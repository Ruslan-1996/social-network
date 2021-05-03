import React, {ChangeEvent} from 'react'
import './StatusProfile.css'

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class StatusProfile extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({editMode: true});
    }

    removeEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.target.value,
        })
    }

    componentDidUpdate(prevProps:PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode ? <div onDoubleClick={this.activeEditMode} className='StatusProfile_status'>
                        {!this.props.status ? 'Введите статус' : this.props.status}</div> :
                    <div className='StatusProfile_inputBlock'><input autoFocus={true}
                                onChange={this.onStatusChange} value={this.state.status} type="text" className='StatusProfile_input'/>
                        <button onClick={this.removeEditMode} className='StatusProfile_inputButton'>
                            <i className='check'></i>
                        </button>
                    </div>}

            </div>
        )
    }
}

export default StatusProfile;