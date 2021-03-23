import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import FriendsSideBarContainer from "./FriendsSideBar/FriendsSideBarContainer";

const NavBar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.item_first}`}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialog' activeClassName={s.active}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={`${s.item} ${s.item_setting}`}>
                <NavLink to='/setting' activeClassName={s.active}>Setting</NavLink>
            </div>
            <FriendsSideBarContainer/>
        </nav>
    )
};

export default NavBar;