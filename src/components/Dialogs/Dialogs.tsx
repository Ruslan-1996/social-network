import s from './Dialogs.module.css';
import InputMessage from "./InputMessage/InputMessage";
import BlockMessage from "./BlockMessage/BlockMessage";
import BlockDialogsItem from "./BlockDialogsItem/BlockDialogsItem";
import {DialogType, MessageType} from "../../Types/types";

type PropsType = {
    addNewMessage: (message:string) => void
    messageElement: Array<MessageType>
    dialogElement: Array<DialogType>
}

const Dialogs: React.FC<PropsType> = (props) => {

    return (
        <div className={s.dialogs}>
            <BlockDialogsItem dialogElement={props.dialogElement}/>
            <div className={s.messages}>
                <BlockMessage  messageElement={props.messageElement}/>
                <InputMessage addNewMessage={props.addNewMessage}/>
            </div>
        </div>
    )
};

export default Dialogs;