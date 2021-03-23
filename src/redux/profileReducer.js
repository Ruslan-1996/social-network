import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, How are you?', likesCount: '189'},
        {id: 2, message: 'I\'m Happy', likesCount: '95'},
    ],
    newPostText: '',
    profile: null,
    isPreloader: true,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: action.newPostText,
                likesCount: '0',
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
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
        default:
            return state;
    }
}


export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export const setPreloaderToggle = (preloader) => ({type: TOGGLE_PRELOADER, preloader})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        dispatch(setUserProfile(null))
        dispatch(setPreloaderToggle(true))
        usersAPI.getUserProfile(userId).then(response => {
            dispatch(setPreloaderToggle(false))
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
                dispatch(setUserStatus(response.data))
        })
    }
}

export const updateUserStatus = (status) => {
    debugger
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
}

window.initialState = initialState;

export default profileReducer;