import BlockMessage from "./BlockMessage";
import {connect} from "react-redux";



// const BlockMessageContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let messageElement = store.getState().dialogsReducer.messageData
//                     return (<BlockMessage messageElement={messageElement}/>)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        messageElement: state.dialogsReducer.messageData
    }
}

const BlockMessageContainer = connect(mapStateToProps)(BlockMessage);

export default BlockMessageContainer;