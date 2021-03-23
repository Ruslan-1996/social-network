import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let postData = store.getState().profileReducer.postData;
//                 return <MyPosts postData={postData}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        postData: state.profileReducer.postData,
    }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;