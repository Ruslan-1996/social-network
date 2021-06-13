import React, {useEffect} from 'react';
import s from './Users.module.css'
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import SearchForm from "../common/SearchForm/SearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getAuthorizedUserId,
    getCurrentPage,
    getFilterUsers,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../redux/usersSelectors";
import {followAC, getUsers, setUsersCurrentPage, unfollowAC} from "../../redux/usersReducer";
import SelectPaginator from "../common/SelectPaginator/SelectPaginator";

type PropsType = {
    pageSize: number
    currentPage: number
    isFriendPage: true | null

}

let Users: React.FC<PropsType> = ({currentPage, pageSize, isFriendPage}) => {

    const usersData = useSelector(getUsersData)

    const totalUsersCount = useSelector(getTotalUsersCount)
    const followingInProgress = useSelector(getFollowingInProgress)
    const authorizedUserId = useSelector(getAuthorizedUserId)
    const filter = useSelector(getFilterUsers)

    const dispatch = useDispatch()

    const onPageChanged = (numberPage: number) => {
        dispatch(setUsersCurrentPage(numberPage))
        dispatch(getUsers(numberPage, pageSize, isFriendPage, filter));
    }

    const onFilterChanged = (term: string) => {
        dispatch(getUsers(1, pageSize, isFriendPage, term))
    }

    const follow = (userId: number) => {
        dispatch(followAC(userId))
    }

    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
    }

    let usersDataComponent = usersData.map(user => <User follow={follow} unfollow={unfollow}
                                                         user={user} key={user.id}
                                                         followingInProgress={followingInProgress}
                                                         authorizedUserId={authorizedUserId}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.menu}>
                <SelectPaginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                                 onPageChanged={onPageChanged}/>
                <SearchForm onFilterChanged={onFilterChanged}/>
            </div>
            {usersDataComponent}
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
        </div>)
}

export default Users;