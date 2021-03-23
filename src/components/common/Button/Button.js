import s from './Button.module.css'

const Button = (props) => {
    return (
        <button className={s.button}>
            {props.text}
        </button>
    )
}