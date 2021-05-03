import {NavLink} from "react-router-dom";
import s from "./NavFriendItem.module.css";
import userNull from '../../../../assets/images/user.png';


type PropsType = {
    isPreloader: boolean
    avatarUser: string | null
    name: string
    id: number
}

const NavFriend: React.FC<PropsType> = (props) => {
    return (<div>
            {!props.isPreloader ? <NavLink to={`/profile/${props.id}`}
                                           className={`${s.friendItem} ${props.isPreloader && s.friendItemPreloader}`}>
                    <img src={props.avatarUser ? props.avatarUser : userNull}
                         alt='avatar' className={s.avatarUser}/>
                    <span className={s.name}>{props.name}</span>
                </NavLink> :
                <div className={s.friendItem}><img src={props.avatarUser ? props.avatarUser : userNull}
                          alt='avatar' className={s.avatarUser}/>
                    <span className={s.name}>{props.name}</span></div>}
        </div>
    )
};

export default NavFriend;