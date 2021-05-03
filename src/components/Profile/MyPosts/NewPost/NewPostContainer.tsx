import {addPost} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";


type MapDispatchPropsType = {
    addPost:(newPostText: string) => void
}

const NewPostContainer = connect<{}, MapDispatchPropsType, {}, AppStateType>(null, {addPost})(NewPost);

export default NewPostContainer;