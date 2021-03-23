import {getAuthUser} from "./authReducer";
import {getSideBarUsers} from "./sideBarReducer";

const INITIALIZED_SUCCESS = 'ruslnetwork/appReducer/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializeApp = (userId) => {
    return (dispatch) => {
       let promise = dispatch(getAuthUser(userId));
       let promiseSideBar = dispatch(getSideBarUsers())
        Promise.all([promise, promiseSideBar]).then(() => {
            dispatch(initializedSuccess());

        })
    }
}

export default appReducer;
