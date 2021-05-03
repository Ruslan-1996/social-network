import {DialogType, MessageType} from "../Types/types";

const ADD_MESSAGE = 'ADD-NEW-MESSAGE'

let initialState = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Bye'},
    ] as Array<MessageType>,

    dialogsData: [
        {
            id: 1,
            name: 'Sun',
            avatarUser: 'https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png'
        },
        {
            id: 2,
            name: 'Teacher',
            avatarUser: 'https://ikeacity.by/UserFiles/products/images2/large/903/684/47/doska-molbert-ikea-mola-0.jpg'
        },
        {
            id: 3,
            name: 'Nikitka',
            avatarUser: 'https://www.meme-arsenal.com/memes/5608fd17a92284aa78fdf6ec089a3c97.jpg'
        },
    ] as Array<DialogType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: action.message,
            }
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            }
        default:
            return state;
    }
}

type ActionTypes = AddNewMessageType

type AddNewMessageType = {
    type: typeof ADD_MESSAGE,
    message: string
}

export const addNewMessage = (message: string): AddNewMessageType => {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export default dialogsReducer;
