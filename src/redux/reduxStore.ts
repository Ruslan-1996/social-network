import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import appReducer from "./appReducer";
import friendsReducer from "./friendsReducer";

let rootReducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sideBarReducer: sideBarReducer,
    usersReducer: usersReducer,
    friendsReducer: friendsReducer,
    auth: authReducer,
    app: appReducer,
})


type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

export type InferActionTypes<T> = T extends {[keys: string]: (...args: any[])=> infer U} ? U : never


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const store = createStore(rootReducers, applyMiddleware(thunk))

// @ts-ignore
window.store = store

export default store