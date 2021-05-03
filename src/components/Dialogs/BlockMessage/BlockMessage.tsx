import s from './BlockMessage.module.css';
import Message from "./Message/Message";
import {MessageType} from "../../../Types/types";

type PropsType = {
    messageElement: Array<MessageType>
}

const BlockMessage: React.FC<PropsType> = (props) => {


    let messageElement = props.messageElement.map(message => <Message key={message.id} message={message.message}/>)

    return (
            <div className={s.blockMessage}>
                {messageElement}
            </div>
    )
};

export default BlockMessage;