import s from './BlockMessage.module.css';
import Message from "./Message/Message";



const BlockMessage = (props) => {


    let messageElement = props.messageElement.map(message => <Message message={message.message}/>)

    return (
            <div className={s.blockMessage}>
                {messageElement}
            </div>
    )
};

export default BlockMessage;