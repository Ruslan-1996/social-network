import React from "react";
import './Preloader.css'

let Preloader = (props) => {
    return (<div className="lds-ring" >
        <div style={{height: `${props.height}`, width:`${props.width}`, borderWidth:`${props.borderWidth}`}}></div>
        <div style={{height: `${props.height}`, width:`${props.width}`, borderWidth:`${props.borderWidth}`}}></div>
        <div style={{height: `${props.height}`, width:`${props.width}`, borderWidth:`${props.borderWidth}`}}></div>
        <div style={{height: `${props.height}`, width:`${props.width}`, borderWidth:`${props.borderWidth}`}}></div>
    </div>)
}

export default Preloader;