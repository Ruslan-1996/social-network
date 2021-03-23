import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    sideBarReducer: sideBarReducer,
    usersReducer: usersReducer,
    auth: authReducer,
    app: appReducer,
});


let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;