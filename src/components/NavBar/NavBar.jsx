import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/messages' activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    );
}
export default NavBar;