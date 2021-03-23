import React from 'react';
import s from './PreloaderUsers.module.css'
import Preloader from "../../../common/Preloader/Preloader";

let PreloaderUser = (props) => {
    return (
        <div className={s.wrapper}>
            <Preloader height={'500px'} width={'500px'} borderWidth={'40px'}/>
        </div>
    )
}

export default PreloaderUser;