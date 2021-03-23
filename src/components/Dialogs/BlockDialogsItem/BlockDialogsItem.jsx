import s from './BlockDialogsItem.module.css';
import DialogItem from "./DialogItem/DialogsItem";



const BlockDialogsItem = (props) => {

    let dialogElement = props.dialogElement.map(dialog => <DialogItem name={dialog.name} id={dialog.id}
                                                                          avatarUser={dialog.avatarUser}/>)

    return (

            <div className={s.dialogs_items}>
                {dialogElement}
            </div>
    )
};

export default BlockDialogsItem;