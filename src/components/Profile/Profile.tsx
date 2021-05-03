import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import PreloaderUser from "../Users/User/PreloaderUsers/PreloaderUsers";
import {PostDataType, ProfileType} from "../../Types/types";

type PropsType = {
    isOwner: boolean
    profile:  ProfileType | null
    status: string
    updateUserStatus: (status:string) => void
    addChangeAvatar: (file:any) => void
    postData: Array<PostDataType>
    deletePost: (id: number) => void
    changeProfile: (profile: any) => void
}

const Profile: React.FC<PropsType> = (props) => {
    if (!props.profile) {
        return (
            <div className={s.preloaderBox}>
                <PreloaderUser/>
            </div>
        )
    }
    return (
        <div className={s.profile}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateUserStatus={props.updateUserStatus} addChangeAvatar={props.addChangeAvatar} changeProfile={props.changeProfile}/>
            <MyPosts photos={props.profile.photos.small} postData={props.postData} deletePost={props.deletePost}/>
        </div>
    )
}

export default Profile;