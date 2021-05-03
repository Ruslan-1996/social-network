import {usersAPI} from "../api/users-api";
import {UserType} from "../Types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType, BaseThunkType} from "./reduxStore";
import {ResultCodesEnum} from "../api/api";
import {compose} from "redux";

const FOLLOW = 'ruslnetwork/usersReducer/FOLLOW';
const UNFOLLOW = 'ruslnetwork/usersReducer/UNFOLLOW';
const SET_USERS = 'ruslnetwork/usersReducer/SET-USERS';
const SET_USERS_CURRENT_PAGE = 'ruslnetwork/usersReducer/SET_USERS_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'ruslnetwork/usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'ruslnetwork/usersReducer/TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'ruslnetwork/usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_FILTER_USERS = 'ruslnetwork/usersReducer/SET_FILTER_USERS'


let initialState = {
    usersData: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 11,
    currentPage: 1,
    isPreloader: true,
    followingInProgress: [] as Array<number>, // array of users id
    filter: '',
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
            return {...state, usersData: [...action.users]}
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
        case SET_FILTER_USERS:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
}

type ActionsType = FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetUsersCurrentPageActionType
    | SetTotalUsersCountActionType
    | SetPreloaderToggleActionType
    | ToggleFollowingProgressActionType
    | SetFilterUsersType

type ThunkType = BaseThunkType<ActionsType>

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId})

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW, userId})

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users})

type SetUsersCurrentPageActionType = {
    type: typeof SET_USERS_CURRENT_PAGE
    numberPage: number
}

export const setUsersCurrentPage = (numberPage: number): SetUsersCurrentPageActionType => ({
    type: SET_USERS_CURRENT_PAGE,
    numberPage
})

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}

export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})

type SetPreloaderToggleActionType = {
    type: typeof TOGGLE_PRELOADER,
    preloader: boolean
}

export const setPreloaderToggle = (preloader: boolean): SetPreloaderToggleActionType => ({
    type: TOGGLE_PRELOADER,
    preloader
})

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    preloader: boolean,
    userId: number
}

export const toggleFollowingProgress = (preloader: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    preloader,
    userId
})

type SetFilterUsersType = {
    type: typeof SET_FILTER_USERS
    filter: string
}

export const setFilterUsers = (filter: string): SetFilterUsersType => {
    return {
        type: SET_FILTER_USERS,
        filter
    }
}

export const getUsers = (currentPage: number, pageSize: number, friend: boolean | null = null, term: string =''): ThunkType => {
    return async (dispatch) => {
        dispatch(setPreloaderToggle(true))
        dispatch(setFilterUsers(term))
        let data = await usersAPI.getUsers(currentPage, pageSize, null, term)
        dispatch(setPreloaderToggle(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await usersAPI.follow(userId)
        if (data.resultCode === ResultCodesEnum.Success) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let data = await usersAPI.unfollow(userId)
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export default usersReducer;
