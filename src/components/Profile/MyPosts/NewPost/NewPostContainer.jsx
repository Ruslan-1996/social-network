import {addPost,onPostChange} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

// const NewPostContainer = (props) => {
//
//
//
//     return (<StoreContext.Consumer>
//             {(store) => {
//                 let newPostText = store.getState().profileReducer.newPostText;
//
//                 let addNewPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 let onPostChange = (text) => {
//                     store.dispatch(onPostChangeActionCreator(text));
//                 }
//
//                 return <NewPost addPostActionCreator={addNewPost}
//                      onPostChangeActionCreator={onPostChange}
//                      newPostText={newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        newPostText: state.profileReducer.newPostText,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addNewPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         onPostChange: (text) => {
//             dispatch(onPostChangeActionCreator(text))
//         },
//     }
// }

const NewPostContainer = connect(mapStateToProps, {addPost})(NewPost);

export default NewPostContainer;