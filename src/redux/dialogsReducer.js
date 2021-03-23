import {act} from "@testing-library/react";

const ADD_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you?'},
        {id: 1, message: 'Bye'},
    ],

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
    ],
}

const dialogsReducer = (state = initialState, action) => {
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

export const addNewMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
}

export default dialogsReducer;
