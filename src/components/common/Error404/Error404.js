import error404 from "../../../assets/images/error_404.png";
import s from "./Error404.module.css"
import React from "react";

const Error404 = (props) => {
    return (<div>
            <img src={error404} className={s.imagesError}/>
        </div>
    )
}

export default Error404;