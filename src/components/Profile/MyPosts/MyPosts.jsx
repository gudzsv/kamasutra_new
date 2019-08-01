import React from 'react';
import s from './MyPosts.module.css';

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts/Posts";


const MyPosts = (props) => {


    let postsElement = props.postData.map(p => <Posts message={p.message}
                                                      avatar={p.avatar}
                                                      likeCount={p.likeCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onChangeText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
        return (
            <div className={s.myPosts}>
                Post Comment:
                <div>
                    <div>
                    <textarea onChange={onChangeText}
                              ref={newPostElement}
                              title='inpit text here please'
                              value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Save Post</button>
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