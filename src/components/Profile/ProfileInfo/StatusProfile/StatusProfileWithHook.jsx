import React, {useEffect, useState} from 'react'
import './StatusProfile.css'
import {updateUserStatus} from "../../../../redux/profileReducer";

let StatusProfileWithHook = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    let activeEditMode = () => {
        setEditMode(true)
    }

    let removeEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
            setStatus(props.status)
        },[props.status]
    )

    return (
        <div>
            {!editMode ? <div onDoubleClick={activeEditMode} className='StatusProfile_status'>
                    {/*{!this.props.status ? 'Введите статус' : this.props.status}*/}
                {status ? status : 'Введите статус'}
                </div> :
                <div className='StatusProfile_inputBlock'><input autoFocus={true}
                                                                 onChange={onStatusChange} value={status}
                                                                 type="text" className='StatusProfile_input'/>
                    <button onClick={removeEditMode} className='StatusProfile_inputButton'>
                        <i className='check'></i>
                    </button>
                </div>}

        </div>
    )
}

export default StatusProfileWithHook;