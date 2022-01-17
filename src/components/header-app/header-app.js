import React from 'react';
import {Link} from 'react-router-dom'
import './header-app.css';

const Header = () => {
    return (
        <div className="header grid">
            <div className="header__buttons justify-self-end grid grid-flow-col auto-cols-max gap-2 py-4 px-4">
            <Link to='../'><button className="header__button w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">На главную</button></Link>
                <button className="header__button w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">Авторизация</button>             
               
            </div>
            <div className="header__title grid justify-self-center py-4">
                <p className='text-center text-2xl font-semibold text-slate-500'> Справочник по самостоятельному ремонту и замене запчастей</p>
            </div>
        </div>
    )
}
export default Header;