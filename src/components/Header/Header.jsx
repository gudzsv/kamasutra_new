import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={require('../../images/logo.png')} alt='logo.png' />
        </header>
    );
}
export default Header;