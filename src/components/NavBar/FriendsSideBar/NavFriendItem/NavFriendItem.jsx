import {NavLink} from "react-router-dom";
import s from "./NavFriendItem.module.css";
import userNull from '../../../../assets/images/user.png';

const NavFriend = (props) => {

    debugger

    return (
        <NavLink disabled={props.isPreloader && true} onClick={() => {props.getUserProfileSideBar(props.id)}} to={`/profile/${props.id}`} className={s.friendItem}>
            <img src={props.avatarUser ? props.avatarUser: userNull}
                 alt='avatar' className={s.avatarUser}/>
            {props.name}
        </NavLink>)
};

export default NavFriend;