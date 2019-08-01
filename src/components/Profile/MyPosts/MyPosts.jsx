import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";


const MyPosts = (props) => {

    let postsElement = props.postData.map(p => <Posts message={p.message}
                                                      avatar={p.avatar}
                                                      likeCount={p.likeCount}/>)
    let onAddPost = () => {
        props.addPost();
    }
    let onChangeText = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.myPosts}>
            Post Comment:
            <div>
                <div>
                    <textarea onChange={onChangeText}
                              title='inpit text here please'
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Save Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <h3>New posts:</h3>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;