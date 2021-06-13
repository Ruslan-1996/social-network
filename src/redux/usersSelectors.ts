import {AppStateType} from "./reduxStore";

export const getUsersData = (state: AppStateType) => {
    return state.usersReducer.usersData
}

export const getPageSize = (state: AppStateType) => {
    return state.usersReducer.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersReducer.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersReducer.currentPage
}

export const getIsPreloader = (state: AppStateType) => {
    return state.usersReducer.isPreloader
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersReducer.followingInProgress
}

export const getAuthorizedUserId = (state: AppStateType) => {
    return state.auth.id
}

export const getFilterUsers = (state: AppStateType) => {
    return state.usersReducer.filter
}