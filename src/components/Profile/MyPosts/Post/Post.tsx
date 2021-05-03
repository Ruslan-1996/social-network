import s from './Post.module.css';
import avatarUser from '../../../../assets/images/user.png'
import React from "react";

type PropsType = {
    photos: string | null
    message: string
    id: number
    likes: number
    deletePost: (id: number) => void
}

const Post: React.FC<PropsType> = (props) => {
        return (
        <div className={s.post}>
            <div className={s.post_content}>
                <img className={s.post_logo}
                     src={props.photos ? props.photos : avatarUser}
                     alt="avatar"/>
                <p className={s.post_text}>{props.message}</p>
                <span onClick={() => {props.deletePost(props.id)}} className={s.delete}></span>
            </div>
            <button id='button' className={s.post_like}>
                like
            </button>
            <div className={s.post_likes} id='like'>
                {props.likes}
            </div>
        </div>
    )

}


export default Post;