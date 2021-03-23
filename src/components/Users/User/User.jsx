import React from 'react';
import s from './User.module.css'
import userNull from '../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import PreloaderButton from "../../common/Preloader/PreloaderButton/PreloaderButton";

let User = ({user, ...props}) => {

    return (
        <div className={s.user}>
            <div className={s.avatarBlock}>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={s.avatarUser} src={user.photos.large != null ? user.photos.large : userNull}
                         alt="avatar"/>
                </NavLink>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.unfollow(user.id)
                    }}
                              className={s.buttonFollow}>
                        {props.followingInProgress.some(id => id === user.id) ? <PreloaderButton/> : 'Unfollow'}
                    </button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                        props.follow(user.id)
                    }}
                              className={s.buttonFollow}>
                        {props.followingInProgress.some(id => id === user.id) ? <PreloaderButton/> : 'Follow'}
                    </button>}
            </div>
            <div className={s.profileUser}>
                <div className={s.aboutUser}>
                    <div className={s.nameUser}>{user.name}</div>
                    <div className={s.bio}>{user.status}</div>
                </div>
                <div className={s.blockCountry}>
                    <div className={s.countyUser}>{'user.country'}</div>
                    <div className={s.cityUser}>{'user.city'}</div>
                </div>
            </div>
        </div>
    )
}

export default User;