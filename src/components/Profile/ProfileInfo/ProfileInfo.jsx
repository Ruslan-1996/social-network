import s from "./ProfileInfo.module.css";
import React from "react";
import avatarUser from '../../../assets/images/user.png'
import StatusProfileWithHook from "./StatusProfile/StatusProfileWithHook";

const ProfileImage = (props) => {
    return (
        <img className={s.profile_logo}
             src={props.image} alt=""/>
    )
}

// const ProfileAvatar = (props) => {
//     return (
//         <img className={s.descriptions_logo} src={props.image} alt={props.alt}/>
//     )
// }

const ProfileInfo = (props) => {
        return (
            <div>
                <ProfileImage
                    image='https://www.komandirovka.ru/upload/save_file33/bf5/bf5c6f100d3d620c48787b3714cb4fea.jpg'/>
                <div className={s.descriptions}>
                    <img className={s.descriptions_logo}
                         src={props.profile.photos.large != null ? props.profile.photos.large : avatarUser}/>
                    <div className={s.descriptions_text}>
                        <div className={s.descriptions_name}>
                            {props.profile.fullName}
                        </div>
                        <StatusProfileWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
                        <div className={s.descriptions_about}>
                            <p>Ищешь работу: {props.profile.lookingForAJob ? 'да' : 'нет'}</p>
                            {props.profile.lookingForAJobDescription ?
                                <p>Описание работы: {props.profile.lookingForAJobDescription}</p> : null}
                                <p className={s.contacts}>Контакты</p>
                            {props.profile.contacts.facebook ?
                                <p>Страница в facebook: {props.profile.contacts.facebook}</p> : null}
                            {props.profile.contacts.website ?
                                <p>Мой веб-сайт: {props.profile.contacts.website}</p> : null}
                            {props.profile.contacts.vk ?
                                <p>Страница ВКонтакте: {props.profile.contacts.vk}</p> : null}
                            {props.profile.contacts.twitter ?
                                <p>Страница в twitter: {props.profile.contacts.twitter}</p> : null}
                            {props.profile.contacts.instagram ?
                                <p>Страница в instagram: {props.profile.contacts.instagram}</p> : null}
                            {props.profile.contacts.youtube ?
                                <p>Мой канал на youtube: {props.profile.contacts.youtube}</p> : null}
                            {props.profile.contacts.github ?
                                <p>Мой репозиторий на github: {props.profile.contacts.github}</p> : null}
                            {props.profile.contacts.mainLink ?
                                <p>Страница в mainLink: {props.profile.contacts.mainLink}</p> : null}
                        </div>
                    </div>
                </div>

            </div>
        )

};

export default ProfileInfo;