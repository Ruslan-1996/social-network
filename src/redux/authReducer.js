import {authAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'ruslnetwork/authReducer/SET_USER_DATA';
const ADD_USER_PHOTO = 'ruslnetwork/authReducer/ADD_USER_PHOTO';
const ERROR_AUTH = 'ruslnetwork/authReducer/ERROR_AUTH';

let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    userPhoto: '',
    errorAuth: null,
}

const authReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {id, login, email, isAuth}
    }
}

export const addUserPhoto = (userPhoto) => {
    return {
        type: ADD_USER_PHOTO,
        userPhoto,
    }
}

export const errorAuth = (message) => {
    return {
        type: ERROR_AUTH,
        message,
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUser())
                dispatch(errorAuth(null))
            } else {
                dispatch(errorAuth(response.data.messages[0]))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            dispatch(setAuthUserData(null, null, null, false))
        })
    }
}

export const getAuthUser = (userId) => {
    return (dispatch) => {
        return authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email, true))
                }
                if (userId) {
                    usersAPI.getUserProfile(userId).then(response => {
                        dispatch(addUserPhoto(response.data.photos.small))
                    })
                }
            }
        )
    }
}

export default authReducer;
