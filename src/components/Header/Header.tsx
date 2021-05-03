import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userNull from '../../../src/assets/images/user.png';

type PropsType = {
    isAuth: boolean
    userPhoto: string | null
    login: string | null
    logout: () => void
}

const Header: React.FC<PropsType> = (props) => {

    return (
        <header className={s.header}>
            <div className={s.header_logo}>RUSLNETWORK</div>
            {props.isAuth ?
                <NavLink to='/profile' className={s.loginBlock}>
                    <span>
                        <div className={s.blockPhoto}>
                            {props.userPhoto ? <img src={props.userPhoto} alt="" className={s.photo}/> :
                                <img src={userNull} alt="" className={s.photoNull}/>}
                        </div>
                    </span>
                    <span>{props.login}</span>
                    <button onClick={props.logout} className={s.buttonLogout}>Logout</button>
                </NavLink>

                : <NavLink to='/login' className={s.loginBlock} activeClassName={s.active}>
                    Login
                </NavLink>
            }
        </header>
    )
};

export default Header;