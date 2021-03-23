import s from './Dialogs.module.css';
import InputMessageContainer from "./InputMessage/InputMessageContainer";

import BlockMessageContainer from "./BlockMessage/BlockMessageContainer";
import BlockDialogsItemContainer from "./BlockDialogsItem/BlockDialogsItemContainer";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {


    return (
        <div className={s.dialogs}>
            <BlockDialogsItemContainer/>
            <div className={s.messages}>
                <BlockMessageContainer />
                <InputMessageContainer/>
            </div>
        </div>
    )
};

export default Dialogs;