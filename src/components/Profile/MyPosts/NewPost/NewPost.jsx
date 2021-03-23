import s from './NewPost.module.css'
import {Field, Form} from "react-final-form";
import {maxLengthCreator, required} from "../../../../utils/Validators/validator";
import {Textarea} from "../../../common/FormsControls/FormsControls";


const AddNewPost = (props) => {

    debugger
    let addNewPost = (values) => {
        debugger
        props.addPost(values.inputNewPost)
    }

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <Form onSubmit={addNewPost}>
            {props => (
                <form onSubmit={props.handleSubmit} className={s.newPost}>
                    <Field component={Textarea} name='inputNewPost' className={s.newPost_textarea}
                           placeholder='Введите текст нового поста'
                           validate={composeValidators(required, maxLengthCreator(10))}/>
                    <button disabled={props.hasValidationErrors && true} className={`${s.newPost_button} 
                    ${props.hasValidationErrors && s.disabled}`}>Send
                    </button>
                </form>
            )}
        </Form>
        // <Form onSubmit={addNewPost}
        //       render={({handleSubmit}) => (
        //           <form onSubmit={handleSubmit} className={s.newPost}>
        //               <Field component={Textarea} name='inputNewPost' className={s.newPost_textarea}
        //                      placeholder='Введите текст нового поста'
        //                      validate={composeValidators(required, maxLengthCreator(10))}/>
        //               <button className={s.newPost_button}>Send</button>
        //           </form>
        //       )}/>

    )
}

const NewPost = (props) => {
    return <AddNewPost addPost={props.addPost}/>
}


export default NewPost;