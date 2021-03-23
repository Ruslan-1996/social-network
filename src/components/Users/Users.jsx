import React from 'react';
import s from './Users.module.css'
import User from "./User/User";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
    let usersData = props.usersData.map(user => <User follow={props.follow} unfollow={props.unfollow}
                                                      user={user}
                                                      currentPage={props.currentPage}
                                                      totalUsersCount={props.totalUsersCount}
                                                      pageSize={props.pageSize}
                                                      followingInProgress={props.followingInProgress}/>)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    let i = 1
    for (i; i <= pagesCount; i++) {
        pages.push(i);
    }

    let handleChange = (e) => {
        props.onPageChanged(e.target.value)
    }

    return (
        <div className={s.wrapper}>
            <select onChange={handleChange} value={props.currentPage} className={s.selectPage}>
                {pages.map(p => (
                    <option className={s.optionPage}>{p} </option>
                ))}
            </select>
            {usersData}
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        </div>)
}

export default Users;