import {getAuthUser} from "./authReducer";
import {getSideBarUsers} from "./sideBarReducer";
import {AppStateType, InferActionTypes} from "./reduxStore";

const INITIALIZED_SUCCESS = 'ruslnetwork/appReducer/INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false,
}

export type ActionType = InferActionTypes<typeof actions>


const appReducer = (state = initialState, action: ActionType): InitialStateType => {
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

export const actions = {
    initializedSuccess: () => ({type: INITIALIZED_SUCCESS})
}


export const initializeApp = () => {
    return (dispatch: any, getState: AppStateType) => {
       let promise = dispatch(getAuthUser());
        Promise.all([promise]).then(() => {
            dispatch(actions.initializedSuccess());
        })
    }
}

export default appReducer;
