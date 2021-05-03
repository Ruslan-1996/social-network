import s from './AvavatarProfile.module.css'
import avatarUser from "../../../../assets/images/user.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserEdit} from "@fortawesome/free-solid-svg-icons";
import {ChangeEvent} from "react";


type PropsType = {
    isOwner: boolean
    photo:  string | null
    addChangeAvatar: (file:any) => void
}


const AvatarProfile: React.FC<PropsType> = (props) => {

    let onChangeAvatarMe = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length)
            props.addChangeAvatar(e.target.files[0])
    }

    return (
        <div>
            <img className={s.avatar}
                 src={props.photo != null ? props.photo : avatarUser}/>
            {!props.isOwner && <div className={s.blockInput}>
                <input type={"file"} onChange={onChangeAvatarMe} id={'avatar'} className={s.inputPhoto}/>
                <label htmlFor="avatar" className={s.fakeInputPhoto}>
                    <div className={s.blockFakeInputPhoto}>
                        <FontAwesomeIcon icon={faUserEdit} className={s.iconFakeInputPhoto}/>
                    </div>
                </label>
            </div>
            }
        </div>
    )
}

export default AvatarProfile;