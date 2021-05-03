import React, {useState} from "react";
import {ProfileType} from "../../../Types/types";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import s from "./ProfileInfo.module.css";
import AvatarProfile from "./AvavatarProfile/AvatarProfile";
import StatusProfileWithHook from "./StatusProfile/StatusProfileWithHook";


type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    addChangeAvatar: (file: any) => void
    changeProfile: (profile: any) => void
}

const ProfileInfo: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    return (
        <div className={s.wrapper}>
            <img className={s.profile_logo}
                 src="https://www.komandirovka.ru/upload/save_file33/bf5/bf5c6f100d3d620c48787b3714cb4fea.jpg" alt=""/>
            <div className={s.descriptions}>
                <div className={s.descriptions_logo}>
                    <AvatarProfile isOwner={props.isOwner} photo={props.profile && props.profile.photos.large}
                                   addChangeAvatar={props.addChangeAvatar}/>
                </div>
                <div className={s.descriptions_text}>
                    <div className={s.descriptions_name}>
                        {props.profile && props.profile.fullName}
                    </div>
                    <StatusProfileWithHook isOwner={props.isOwner} status={props.status}
                                           updateUserStatus={props.updateUserStatus}/>

                    <div className={s.descriptions_about}>
                        {!editMode ? <ProfileData {...props} changeInfoButton={() => setEditMode(true)}/> :
                            <ProfileDataForm {...props} changeProfile={props.changeProfile} changeInfoButton={() => setEditMode(false)}/>}
                    </div>
                </div>
            </div>
        </div>
    )

};

export default ProfileInfo;