import React from 'react';
import './header-app.css';

const Header = () => {
    return(
        <div className="header bg-blue-400 h-10">
            <ul className="header__menu grid grid-cols-5 gap-1 auto-cols-auto justify-items-center">
                <li className="header__element">Menu Elements</li>
                <li className="header__element">Menu Elements</li>
                <li className="header__element">Menu Elements</li>
                <li className="header__element">Menu Elements</li>
                <li className="header__element">Menu Elements</li>
            </ul>
        </div>
    )
}
export default Header;