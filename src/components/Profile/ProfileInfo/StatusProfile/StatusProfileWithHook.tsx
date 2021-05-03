import React, {ChangeEvent, useEffect, useState} from 'react'
import './StatusProfile.css'
import {updateUserStatus} from "../../../../redux/profileReducer";

type PropsType = {
    isOwner: boolean
    status: string
    updateUserStatus: (status: string) => void
}


let StatusProfileWithHook: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status)

    let activeEditMode = () => {
        setEditMode(true)
    }

    let removeEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]
    )

    return (
        <div>
            {!props.isOwner ? (!editMode ? <div onDoubleClick={activeEditMode} className='StatusProfile_status'>
                    {status ? status : 'Введите статус'}
                </div> :
                <div className='StatusProfile_inputBlock'><input autoFocus={true}
                                                                 onChange={onStatusChange} value={status}
                                                                 type="text" className='StatusProfile_input'/>
                    <button onClick={removeEditMode} className='StatusProfile_inputButton'>
                        <i className='check'></i>
                    </button>
                </div>) : <div className='StatusProfile_status'>{status ? status :'Статус не введён'}</div>
            }

        </div>
    )
}

export default StatusProfileWithHook;