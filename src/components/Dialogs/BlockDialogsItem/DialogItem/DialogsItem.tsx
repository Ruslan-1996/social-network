import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    id: number
    avatarUser: string
    name: string
}

const DialogItem: React.FC<PropsType> = (props) => {

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
