import FriendsSideBar from "./FriendsSideBar";
import {connect} from "react-redux";
import {getUserProfileSideBar} from "../../../redux/sideBarReducer";



let mapStateToProps = (state) => {
    return{
        nameUserElement: state.sideBarReducer.users,
        isPreloader: state.sideBarReducer.users
    }
}

const FriendsSideBarContainer = connect(mapStateToProps, {getUserProfileSideBar})(FriendsSideBar)



export default FriendsSideBarContainer;