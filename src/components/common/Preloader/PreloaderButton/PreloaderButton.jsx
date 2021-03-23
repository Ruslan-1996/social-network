import React from "react";
import './PreloaderButton.css'

let PreloaderButton = (props) => {
    return (<div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>)
}

export default PreloaderButton;