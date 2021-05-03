import s from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";
import {PostDataType} from "../../../Types/types";
import React from "react";


type PropsType = {
    postData: Array<PostDataType>
    photos: string | null
    deletePost: (id: number) => void
}

const MyPosts: React.FC<PropsType> = (props) => {
    let postsElement = props.postData.map(post => <Post message={post.message} likes={post.likesCount}
                                                        photos={props.photos} key={post.id} id={post.id}
                                                        deletePost={props.deletePost}/>)

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

const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized;