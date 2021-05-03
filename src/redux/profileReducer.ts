import {ResultCodesEnum} from "../api/api";
import {addUserPhoto} from "./authReducer";
import {PhotosType, PostDataType, ProfileType} from "../Types/types";
import {profileAPI} from "../api/profile-api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_USER_STATUS = 'SET_USER_STATUS';
const ADD_AVATAR = 'ADD_AVATAR';


let initialState = {
    postData: [
        {id: 1, message: 'Hi, How are you?', likesCount: 189},
        {id: 2, message: 'I\'m Happy', likesCount: 95},
    ] as Array<PostDataType>,
    profile: null as ProfileType | null,
    isPreloader: false,
    status: '',
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let id = state.postData[state.postData.length - 1].id
            let newPost = {
                id: id + 1,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postId)
            }
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        case TOGGLE_PRELOADER:
            return {...state, isPreloader: action.preloader}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case ADD_AVATAR:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        default:
            return state;

    }
}


type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        newPostText
    }
}

type DeletePostActionType = {
    type: typeof DELETE_POST,
    postId: number
}

export const deletePost = (postId: number): DeletePostActionType => {
    return {
        type: DELETE_POST,
        postId
    }
}

type SetUserProfileActionType = {
    type: typeof SET_USERS_PROFILE,
    profile: ProfileType | null
}

export const setUserProfile = (profile: ProfileType | null): SetUserProfileActionType => {
    return {
        type: SET_USERS_PROFILE,
        profile
    }
}

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}

export const setUserStatus = (status: string): SetUserStatusActionType => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

type SetPreloaderToggleActionType = {
    type: typeof TOGGLE_PRELOADER
    preloader: boolean
}

export const setPreloaderToggle = (preloader: boolean): SetPreloaderToggleActionType => ({
    type: TOGGLE_PRELOADER,
    preloader
})


type AddAvatarSuccessActionType = {
    type: typeof ADD_AVATAR
    photos: PhotosType
}

const addAvatarSuccess = (photos: PhotosType): AddAvatarSuccessActionType => {
    return {
        type: ADD_AVATAR,
        photos
    }
}

export const getUserProfile = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(setUserProfile(null))
        dispatch(setPreloaderToggle(true))
        try {
            const data = await profileAPI.getUserProfile(userId)
            dispatch(setPreloaderToggle(false))
            dispatch(setUserProfile(data))
        } catch (error) {
            // dispatch(setUserProfile(error.message))
            // dispatch(setPreloaderToggle(false))
        }
    }
}

export const getUserStatus = (userId: number) => {
    return async (dispatch: any) => {
        const data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data))
    }
}

export const updateUserStatus = (status: string) => {
    return async (dispatch: any) => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(setUserStatus(status))
        }
    }
}

export const addChangeAvatar = (file: File) => {
    return async (dispatch: any, getState: any) => {
        let data = await profileAPI.updateAvatar(file)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(addAvatarSuccess(data.data.photos))
        }
        dispatch(addUserPhoto(getState().auth.id))
    }
}

export const changeProfile = (profile: any) => {
    return async (dispatch: any, getState: any) => {
        const userId = getState().auth.id
        let response = await profileAPI.updateProfileInfo(profile)
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(getUserProfile(userId))
        }
    }

}

export default profileReducer;