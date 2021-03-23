import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialog/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img className={s.avatarUser} src={props.avatarUser} alt='avatar'/>
                <span className={s.nameUser}>
                    {props.name}
                </span>
            </NavLink>
        </div>
    )
}

export default DialogItem;
