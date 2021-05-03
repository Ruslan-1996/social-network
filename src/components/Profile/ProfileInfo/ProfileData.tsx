import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfileType} from "../../../Types/types";

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    addChangeAvatar: (file: any) => void
    changeInfoButton: (profile: any) => void
}

const ProfileData: React.FC<PropsType> = (props) => {

    return (
        <div>
            {!props.isOwner &&
            <button onClick={props.changeInfoButton} className={s.editButton}>Change profile</button>}
            <p>About Me: {props.profile && props.profile.aboutMe}</p>
            <p>Ищешь работу: {props.profile && props.profile.lookingForAJob ? 'да' : 'нет'}</p>
            {props.profile && props.profile.lookingForAJobDescription &&
            <p>Описание работы: {props.profile.lookingForAJobDescription}</p>}
            <p className={s.contacts}>Контакты</p>
            {props.profile && props.profile.contacts.facebook &&
            <p>Страница в facebook: {props.profile.contacts.facebook}</p>}
            {props.profile && props.profile.contacts.website &&
            <p>Мой веб-сайт: {props.profile.contacts.website}</p>}
            {props.profile && props.profile.contacts.vk &&
            <p>Страница ВКонтакте: {props.profile.contacts.vk}</p>}
            {props.profile && props.profile.contacts.twitter &&
            <p>Страница в twitter: {props.profile.contacts.twitter}</p>}
            {props.profile && props.profile.contacts.instagram &&
            <p>Страница в instagram: {props.profile.contacts.instagram}</p>}
            {props.profile && props.profile.contacts.youtube &&
            <p>Мой канал на youtube: {props.profile.contacts.youtube}</p>}
            {props.profile && props.profile.contacts.github &&
            <p>Мой репозиторий на github: {props.profile.contacts.github}</p>}
            {props.profile && props.profile.contacts.mainLink &&
            <p>Страница в mainLink: {props.profile.contacts.mainLink}</p>}
        </div>
    )

};

export default ProfileData;