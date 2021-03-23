import s from './Login.module.css';
import {Field, Form} from "react-final-form";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const LoginForm = (props) => {

    let [password, changeTypePassword] = useState(true);

    let typePassword = () => {
        if (password) {
            changeTypePassword(false)
        } else {
            changeTypePassword(true)
        }
    }

    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)

    }

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)


    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <Field component={Input} name='email' type='text' placeholder={'Email'}
                               className={s.input}/>
                    </div>
                    <div>
                        <Field component={Input} className={`${s.input} ${s.inputPassword}`}
                               type={password ? 'password' : 'text'} name='password' placeholder='Password'/>
                        {!password ?
                            <FontAwesomeIcon icon={faEyeSlash} onClick={typePassword} className={s.passwordIcon}/> :
                            <FontAwesomeIcon icon={faEye} onClick={typePassword} className={s.passwordIcon}/>}
                    </div>
                    {props.errorAuth && <span className={s.errorAuth}>{props.errorAuth}</span>}
                    <div>
                        <Field component="input"
                               type={'checkbox'} name='rememberMe'/> remember me
                    </div>
                    <div>
                        <button className={s.button}>Login</button>
                    </div>
                </form>
            )}
        />
    )
}

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        errorAuth: state.auth.errorAuth,
    }
}

export default connect(mapStateToProps, {login})(Login);