import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.foneImg}>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500'
                    alt='foneImg'/>
            </div>
            <div className={s.avatarImg}>
                <img
                    src='https://avatars.mds.yandex.net/get-pdb/251121/54664e32-304d-41bb-be6b-f31fa95571a4/s375'
                    alt='avatarImg'/>
                <div className={s.descriptionBlock}> ava+post</div>
            </div>
        </div>

    );
}
export default ProfileInfo;