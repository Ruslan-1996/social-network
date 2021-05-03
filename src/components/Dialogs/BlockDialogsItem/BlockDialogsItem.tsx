import s from './BlockDialogsItem.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import {DialogType} from "../../../Types/types";

type PropsType = {
    dialogElement: Array<DialogType>
}

const BlockDialogsItem: React.FC<PropsType> = (props) => {

    let dialogElement = props.dialogElement.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}
                                                                          avatarUser={dialog.avatarUser}/>)

    return (

            <div className={s.dialogs_items}>
                {dialogElement}
            </div>
    )
};

export default BlockDialogsItem;