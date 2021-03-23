import s from './InputMessage.module.css';
import {Field, Form} from "react-final-form";


const AddMessageForm = (props) => {

    let addNewMessage = (formData) => {
        props.addNewMessage(formData.textAreaMessage)
    }

    return (
        <Form onSubmit={addNewMessage}
              render={({handleSubmit, form}) => (
                  <form onSubmit={handleSubmit} className={s.inputMessage}>
                      <Field component='textarea' placeholder='Введите новое сообщение'
                             name='textAreaMessage' className={s.textMessage}/>
                      <button className={s.buttonSend}>
                          <img className={s.buttonImg} src="https://img.icons8.com/plumpy/96/000000/filled-sent.png"
                               alt=""/>
                      </button>
                  </form>
              )}
        />
    )
}


const InputMessage = (props) => {
    return <AddMessageForm addNewMessage={props.addNewMessage}/>
};


export default InputMessage;