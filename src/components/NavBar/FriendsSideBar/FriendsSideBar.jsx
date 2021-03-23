import s from './FriendsSideBar.module.css';
import {NavLink} from "react-router-dom";
import NavFriend from "./NavFriendItem/NavFriendItem";

const FriendsSideBar = (props) => {
    debugger
    let nameUserElement = props.nameUserElement.map(user => <NavFriend name={user.name} avatarUser={user.photos.small}
                                                                       key={user.id} id={user.id}
                                                                       isPreloader={props.isPreloader}
                                                                       getUserProfileSideBar={props.getUserProfileSideBar}/>);

    return (
        <nav>
            <NavLink to='/users' className={s.buttonFriends}>
                Friends
            </NavLink>
            <div className={s.blockFriends}>
                {nameUserElement}
            </div>

        </nav>
    )
};

export default FriendsSideBar;