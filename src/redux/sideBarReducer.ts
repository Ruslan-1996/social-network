import {usersAPI} from "../api/users-api"
import {UserType} from "../Types/types";
import {AppStateType} from "./reduxStore";
import {initializeApp} from "./appReducer";

const SET_SIDE_BAR_USERS = 'SET_SIDE_BAR_USERS'


type InitialStateType = {
    users: Array<UserType>
}

let initialState: InitialStateType = {
    users: [],
}

const sideBarReducer = (state = initialState, action: SetSideBarUsersActionType): InitialStateType => {
    switch (action.type) {
        case SET_SIDE_BAR_USERS:
            var array: Array<number> = [];
            for(var i = 0; i < 3; i++) {
                var numberIsInArray = false;
                var rand = Math.floor(Math.random()*action.users.length)
                for(var j = 0; j < array.length; j++){
                    if(rand === array[j]) {
                        numberIsInArray = true;
                        i--;
                    }
                }
                if(!numberIsInArray){
                    array.push(rand);
                }
            }
            console.log(array)
            return {
                ...state,
                users: [action.users[array[0]],
                    action.users[array[1]],
                    action.users[array[2]]]
            }
        default:
            return state
    }
}

type SetSideBarUsersActionType = {
    type: typeof SET_SIDE_BAR_USERS,
    users: Array<UserType>
}

export const setSideBarUsers = (users: Array<UserType>): SetSideBarUsersActionType => {
    return {
        type: SET_SIDE_BAR_USERS,
        users
    }
}

export const getSideBarUsers = () => {
    return async (dispatch: any) => {
        let data = await usersAPI.getUsers(1, 20, true, '')
        dispatch(setSideBarUsers(data.items))
    }
}

export default sideBarReducer;