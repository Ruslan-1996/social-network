import React from 'react';
import {addNewMessage} from "../../../redux/dialogsReducer";
import InputMessage from "./InputMessage";
import {connect} from "react-redux";

// const InputMessageContainer = (props) => {
//
//     return (
//         <Consumer>
//             { (store) => {
//                 let newMessageText = store.getState().dialogsReducer.newMessageText;
//
//                 let addNewMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }
//
//                 let onNewMessageChange = (text) => {
//                     store.dispatch(updateMessageBodyActionCreator(text));
//                 }
//                 return <InputMessage updateMessageBodyActionCreator={onNewMessageChange}
//                                      sendMessageActionCreator={addNewMessage}
//                                      newMessageText={newMessageText}/>
//             }
//         }
//         </Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsReducer.newMessageText,
    }
}

const InputMessageContainer = connect(mapStateToProps, {addNewMessage})(InputMessage)

export default InputMessageContainer;