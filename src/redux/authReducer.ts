import {ResultCodesEnum, ResultCodesForCaptchaEnum} from "../api/api";
import {profileAPI} from "../api/profile-api";
import {authAPI} from "../api/auth-api";
import {securityAPI} from "../api/security-api";
import {BaseThunkType, InferActionTypes} from "./reduxStore";
import {getSideBarUsers} from "./sideBarReducer";

const SET_USER_DATA = 'ruslnetwork/authReducer/SET_USER_DATA';
const ADD_USER_PHOTO = 'ruslnetwork/authReducer/ADD_USER_PHOTO';
const ERROR_AUTH = 'ruslnetwork/authReducer/ERROR_AUTH';
const SET_CAPTCHA_URL_SUCCESS = 'ruslnetwork/authReducer/SET_CAPTCHA_URL_SUCCESS';


export type InitialStateType = {
    id: null | number,
    login: null | string,
    email: null | string,
    isFetching: boolean,
    isAuth: boolean,
    userPhoto: null | string,
    errorAuth: null | string,
    captchaURL: null | string
}

let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    userPhoto: '',
    errorAuth: null,
    captchaURL: null
}

export type ActionsType = InferActionTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsType>

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case ADD_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.userPhoto,
            }
        case ERROR_AUTH:
            return {
                ...state,
                errorAuth: action.message,
            }
        case SET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaURL: action.captchaURL,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA,
        payload: {id, login, email, isAuth}
    } as const),
    addUserPhotoSuccess: (userPhoto: string | null) => ({
        type: ADD_USER_PHOTO,
        userPhoto,
    } as const),
    errorAuth: (message: string) => ({
        type: ERROR_AUTH,
        message,
    } as const),
    setCaptchaURLSuccess: (captchaURL: string | null) => ({
            type: SET_CAPTCHA_URL_SUCCESS,
            captchaURL
    } as const)
}


export const addUserPhoto = (userId: number | null): ThunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getUserProfile(userId)
        dispatch(actions.addUserPhotoSuccess(data.photos.small))
    }
}


const setCaptchaURL = (): ThunkType => {
    return async (dispatch) => {
        debugger
        const data = await securityAPI.captchaURL()
        dispatch(actions.setCaptchaURLSuccess(data.url))
    }
}

export const login = (email: any, password: any, rememberMe: any, captcha: any): ThunkType => {
    return async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodesForCaptchaEnum.Success) {
            dispatch(getAuthUser())
            dispatch(actions.errorAuth(''))
        } else {
            if (data.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired) {
                dispatch(setCaptchaURL())
            }
            dispatch(actions.errorAuth(data.messages[0]))
        }
        dispatch(actions.setCaptchaURLSuccess(null))
    }
}

export const logout = (): ThunkType => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === ResultCodesEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
    }
}

export const getAuthUser = (): ThunkType => {
    return async (dispatch, getState) => {
        const meData = await authAPI.me()
        if (meData.resultCode === 0) {
            dispatch(actions.setAuthUserData(meData.data.id, meData.data.login, meData.data.email, true))
            await dispatch(addUserPhoto(getState().auth.id))
        } else if (meData.resultCode === 1) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer;
