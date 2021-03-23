import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.messageInto}>
                {props.message}
            </div>
        </div>
    )
};

export default Message;