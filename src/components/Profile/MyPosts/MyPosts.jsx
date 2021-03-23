import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";


const MyPosts = (props) => {
    let postsElement = props.postData.map(post => <Post message={post.message} likes={post.likesCount} photos={props.photos}/>)

    return (
        <div className={s.posts}>
            <div className={s.posts_title}>
                My Posts
            </div>
            <NewPostContainer/>
            {postsElement}
        </div>
    )
}

export default MyPosts;