import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import PreloaderUser from "../Users/User/PreloaderUsers/PreloaderUsers";

const Profile = (props) => {
    if (!props.profile) {
        return (
            <div className={s.preloaderBox}>
                <PreloaderUser/>
            </div>
        )
    }
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPosts photos={props.profile.photos.small} postData={props.postData}/>
        </div>
    )
}

export default Profile;