import React from 'react';
import Logo from '../assets/laPatrona.jpeg';
import '../header/header.styles.scss'

const Header = () => {
    return (
        <div className="header">
             <img className="logo" src={Logo}/>
             <div className="title">La Patrona</div>
        </div>
       
    )
}

export default Header
