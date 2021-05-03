import React from 'react';
import s from './Friends.module.css'
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../Types/types";


type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    portionSize?: number
    usersData: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    authorizedUserId: number | null
}


let Friends: React.FC<PropsType> = (props) => {
    let usersData = props.usersData.map(user => <User follow={props.follow} unfollow={props.unfollow}
                                                      user={user} key={user.id}
                                                      followingInProgress={props.followingInProgress}
                                                      authorizedUserId={props.authorizedUserId}/>)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    let i = 1
    for (i; i <= pagesCount; i++) {
        pages.push(i);
    }

    let handleChange = (e: any) => {
        props.onPageChanged(e.target.value)
    }

    return (
        <div className={s.wrapper}>
            <select onChange={handleChange} value={props.currentPage} className={s.selectPage}>
                {pages.map(p => (
                    <option key={p} className={s.optionPage}>{p} </option>
                ))}
            </select>
            {usersData}
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </div>)
}

export default Friends;