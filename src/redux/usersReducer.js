import {usersAPI} from "../api/api";

const FOLLOW = 'ruslnetwork/usersReducer/FOLLOW';
const UNFOLLOW = 'ruslnetwork/usersReducer/UNFOLLOW';
const SET_USERS = 'ruslnetwork/usersReducer/SET-USERS';
const SET_USERS_CURRENT_PAGE = 'ruslnetwork/usersReducer/SET_USERS_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'ruslnetwork/usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'ruslnetwork/usersReducer/TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'ruslnetwork/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 20,
    totalUsersCount: 11,
    currentPage: 1,
    isPreloader: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, usersData: [...action.userId]}
        case SET_USERS_CURRENT_PAGE:
            return {...state, currentPage: +action.numberPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_PRELOADER:
            return {...state, isPreloader: action.preloader}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.preloader ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId),
            }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (userId) => ({type: SET_USERS, userId})
export const setUsersCurrentPage = (numberPage) => ({type: SET_USERS_CURRENT_PAGE, numberPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setPreloaderToggle = (preloader) => ({type: TOGGLE_PRELOADER, preloader})
export const toggleFollowingProgress = (preloader, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, preloader, userId})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setPreloaderToggle(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setPreloaderToggle(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))

    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await usersAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export default usersReducer;
