import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import {ContactsType, ProfileType} from "../../../Types/types";
import {Field, Form} from "react-final-form";

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    addChangeAvatar: (file: any) => void
    changeInfoButton: (profile: any) => void
    changeProfile: (profile: any) => void
}

const ProfileDataForm: React.FC<PropsType> = (props) => {

    type valueType = {
        aboutMe: string | null,
        contacts: ContactsType,
        lookingForAJob: boolean,
        lookingForAJobDescription: string | null,
        fullName: string,
    }
    let onSubmit = (value: valueType) => {
        let profile = {...value, fullName: props.profile && props.profile.fullName, lookingForAJob: isChecked}
        props.changeProfile(profile)
    }

    const [isChecked, setIsChecked] = useState<boolean | undefined>(props.profile?.lookingForAJob)

    return (
        <div>

            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form action="" onSubmit={handleSubmit}>
                        <button className={s.editButton}>Save profile</button>
                        <button onClick={props.changeInfoButton} className={s.editButton}>Don't save changes</button>
                        <p>About Me:</p>
                        <Field component={"input"} type={'text'} name={'aboutMe'}
                               initialValue={props.profile?.aboutMe}
                               className={s.form}/>
                        <p>Ищешь работу:</p>
                        <span className={s.checkbox} onClick={() => setIsChecked(!isChecked)}>
                             <Field component={"input"} type="checkbox" name={'lookingForAJob'} checked={isChecked}/>
                             <span className={s.wrapper}>
                                  <i className={s.check}></i>
                             </span>
                        </span>
                        <p>Описание работы: </p>
                        <Field component={"input"} type={'text'}
                               name={'lookingForAJobDescription'}
                               initialValue={props.profile?.lookingForAJobDescription}
                               className={s.form}/>
                        <p className={s.contacts}>Контакты</p>
                        <p>Страница в facebook: </p>
                        <Field component={'input'} type={'text'} name={'contacts.facebook'}
                               initialValue={props.profile?.contacts.facebook}
                               className={s.form}/>
                        <p>Мой веб-сайт: </p>
                        <Field component={'input'} type={'text'} name={'contacts.website'}
                               initialValue={props.profile?.contacts.website}
                               className={s.form}/>
                        <p>Страница ВКонтакте: </p>
                        <Field component={'input'} type={'text'} name={'contacts.vk'}
                               initialValue={props.profile?.contacts.vk}
                               className={s.form}/>
                        <p>Страница в twitter: </p>
                        <Field component={'input'} type={'text'} name={'contacts.twitter'}
                               initialValue={props.profile?.contacts.twitter}
                               className={s.form}/>
                        <p>Страница в instagram:</p>
                        <Field component={'input'} type={'text'} name={'contacts.instagram'}
                               initialValue={props.profile?.contacts.instagram}
                               className={s.form}/>
                        <p>Мой канал на youtube: </p>
                        <Field component={'input'} type={'text'} name={'contacts.youtube'}
                               initialValue={props.profile?.contacts.youtube}
                               className={s.form}/>
                        <p>Мой репозиторий на github: </p>
                        <Field component={'input'} type={'text'}
                               name={'contacts.github'}
                               initialValue={props.profile?.contacts.github}
                               className={s.form}/>
                        <p>Страница в mainLink: </p>
                        <Field component={'input'} type={'text'} name={'contacts.mainLink'}
                               initialValue={props.profile?.contacts.mainLink}
                               className={s.form}/>

                    </form>
                )}
            />
        </div>

    )

};

export default ProfileDataForm;