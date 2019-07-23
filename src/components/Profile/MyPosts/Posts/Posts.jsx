import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return (

        <div className={s.posts}>
            <div className={s.item}>
                <img src={props.avatar} alt = 'post avatar img'/>
                {props.message}
            </div>
            < div className={s.like}>
                < span>
                    Like: ({props.likeCount})
                < /span>
            </div>
        </div>
);
}
export default Posts;