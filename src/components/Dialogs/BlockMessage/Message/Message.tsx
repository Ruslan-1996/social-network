import s from './Message.module.css';

type PropsType = {
    message: string
}

const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message}>
            <div className={s.messageInto}>
                {props.message}
            </div>
        </div>
    )
};

export default Message;