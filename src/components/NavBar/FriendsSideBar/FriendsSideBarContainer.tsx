import FriendsSideBar from "./FriendsSideBar";
import {connect} from "react-redux";
import {UserType} from "../../../Types/types";
import {AppStateType} from "../../../redux/reduxStore";

type MapStatePropsType = {
    nameUserElement: Array<UserType>
    isPreloader: boolean
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        nameUserElement: state.sideBarReducer.users,
        isPreloader: state.profileReducer.isPreloader
    }
}

const FriendsSideBarContainer = connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)(FriendsSideBar)



export default FriendsSideBarContainer;