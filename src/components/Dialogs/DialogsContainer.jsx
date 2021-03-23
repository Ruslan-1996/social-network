import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";


const DialogsContainer = withAuthRedirect(Dialogs)

export default DialogsContainer;