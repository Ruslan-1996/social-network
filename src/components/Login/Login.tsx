import s from './Login.module.css';
import {Field, Form} from "react-final-form";
import {Input} from "../common/FormsControls/FormsControls";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {AppStateType} from "../../redux/reduxStore";

const LoginForm: React.FC = (props) => {

    let [password, changeTypePassword] = useState<boolean>(true);

    type LoginFormValuesType = {
        email: string
        password: string
        rememberMe: boolean
        captcha: string
    }

    const errorAuth = useSelector((state: AppStateType) => state.auth.errorAuth)
    const captchaURL = useSelector((state: AppStateType) => state.auth.captchaURL)


    const dispatch = useDispatch()

    let onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

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
                            <FontAwesomeIcon icon={faEyeSlash} onClick={() => changeTypePassword(!password)} className={s.passwordIcon}/> :
                            <FontAwesomeIcon icon={faEye} onClick={() => changeTypePassword(!password)} className={s.passwordIcon}/>}
                    </div>
                    {errorAuth && <span className={s.errorAuth}>{errorAuth}</span>}
                    <div>
                        <Field component="input"
                               type={'checkbox'} name='rememberMe'/> remember me
                    </div>
                    {captchaURL &&
                    <div>
                        <img src={captchaURL} alt="" className={s.captchaImg}/>
                        <div>
                            <Field component="input"
                                   type={'text'} name='captcha' className={s.input}/>
                        </div>
                    </div>
                    }

                    <div>
                        <button className={s.button}>Login</button>
                    </div>
                </form>
            )}
        />
    )
}

const Login: React.FC = (props) => {

    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <LoginForm {...props}/>
        </div>
    )
}

export default Login