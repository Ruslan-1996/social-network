import {usersAPI} from "../api/api";
import {setPreloaderToggle, setUserProfile} from "./profileReducer";

const SET_SIDE_BAR_USERS = 'SET_SIDE_BAR_USERS';
const PRELOADER_SIDE_BAR = 'PRELOADER_SIDE_BAR';

let initialState = {
    users: [],
    isPreloader: false,
};


const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIDE_BAR_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case PRELOADER_SIDE_BAR:
            return {
                ...state,
                isPreloader: action.isPreloader
            }
        default:
            return state;
    }
}

let setSideBarUsers = (users) => {
    return {
        type: SET_SIDE_BAR_USERS,
        users
    }
}

let isPreloaderSideBar = (isPreloader) => {
    return {
        type: PRELOADER_SIDE_BAR,
        isPreloader
    }
}

export const getUserProfileSideBar = (userId) => {
    return (dispatch) => {
        debugger
        dispatch(setUserProfile(null))
        dispatch(isPreloaderSideBar(true))
        dispatch(setPreloaderToggle(true))
        usersAPI.getUserProfile(userId).then(response => {
            dispatch(setPreloaderToggle(false))
            dispatch(isPreloaderSideBar(false))
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getSideBarUsers = () => {
    return async (dispatch) => {
        debugger
        let data = await usersAPI.getUsers(1, 3)
        dispatch(setSideBarUsers(data.items))
    }
}

export default sideBarReducer;