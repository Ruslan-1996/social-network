import {AppStateType} from "./reduxStore";

export const usersData = (state: AppStateType) => {
    return state.usersReducer.usersData
}

export const pageSize = (state: AppStateType) => {
    return state.usersReducer.pageSize
}

export const totalUsersCount = (state: AppStateType) => {
    return state.usersReducer.totalUsersCount
}

export const currentPage = (state: AppStateType) => {
    return state.usersReducer.currentPage
}

export const isPreloader = (state: AppStateType) => {
    return state.usersReducer.isPreloader
}

export const followingInProgress = (state: AppStateType) => {
    return state.usersReducer.followingInProgress
}

export const authorizedUserId = (state: AppStateType) => {
    return state.auth.id
}

export const filterUsers = (state: AppStateType) => {
    return state.usersReducer.filter
}