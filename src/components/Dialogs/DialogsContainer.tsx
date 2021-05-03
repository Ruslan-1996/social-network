import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {addNewMessage} from "../../redux/dialogsReducer";
import {AppStateType} from "../../redux/reduxStore";
import {DialogType, MessageType} from "../../Types/types";


type MapDispatchPropsType = {
    addNewMessage: (message:string) => void
}

type MapStatePropsType = {
    messageElement: Array<MessageType>
    dialogElement: Array<DialogType>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messageElement: state.dialogsReducer.messageData,
        dialogElement: state.dialogsReducer.dialogsData,
    }
}

const DialogsContainer = compose<React.ComponentType>(withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addNewMessage}))(Dialogs)

export default DialogsContainer;