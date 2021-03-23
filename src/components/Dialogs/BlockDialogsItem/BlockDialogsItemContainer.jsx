import BlockDialogsItem from "./BlockDialogsItem";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
   return {
       dialogElement: state.dialogsReducer.dialogsData,
   }
}

const BlockDialogsItemContainer = connect(mapStateToProps)(BlockDialogsItem);

export default BlockDialogsItemContainer;