
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, How are you?', likesCount: '189'},
                {id: 2, message: 'I\'m Happy', likesCount: '95'},
            ],
            newPostText: '',
        },

        dialogsPage: {
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
            newMessageText: '',
        },

        sideBar: {
            user: [
                {
                    nameUser: 'Sun',
                    avatarUser: 'https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png'
                },
                {
                    nameUser: 'Teacher',
                    avatarUser: 'https://ikeacity.by/UserFiles/products/images2/large/903/684/47/doska-molbert-ikea-mola-0.jpg'
                },
                {
                    nameUser: 'Nikitka',
                    avatarUser: 'https://www.meme-arsenal.com/memes/5608fd17a92284aa78fdf6ec089a3c97.jpg'
                },
            ]
        },
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {      //{type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    },

}

export default store;