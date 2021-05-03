import s from './FriendsSideBar.module.css';
import {NavLink} from "react-router-dom";
import NavFriend from "./NavFriendItem/NavFriendItem";
import {UserType} from "../../../Types/types";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSideBarUsers} from "../../../redux/sideBarReducer";
import {AppStateType} from "../../../redux/reduxStore";

type PropsType = {
    nameUserElement: Array<UserType>
    isPreloader: boolean
}

const FriendsSideBar: React.FC<PropsType> = (props) => {


    const dispatch = useDispatch()
    const isAuth = useSelector((state: AppStateType)=> state.auth.isAuth)

    if (isAuth){
    useEffect(() => {
        dispatch(getSideBarUsers())
        }, [])}

    let nameUserElement = props.nameUserElement.map(user => <NavFriend name={user.name} avatarUser={user.photos.small}
                                                                       key={user.id} id={user.id}
                                                                       isPreloader={props.isPreloader}/>);

    return (
        <nav>
            <NavLink to='/friends' className={s.buttonFriends}>
                Friends
            </NavLink>
            <div className={s.blockFriends}>
                {nameUserElement}
            </div>

        </nav>
    )
};

export default FriendsSideBar;