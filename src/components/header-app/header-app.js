import React from 'react';
import './header-app.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__buttons py-4 px-2 grid justify-items-end">
                <button className="header__button w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">Добавить</button>                
            </div>
            <div className="header__title py-4">
                <p className='text-center text-2xl font-semibold text-slate-500'> Справочник по самостоятельному ремонту и замене запчастей</p>
            </div>
        </div>
    )
}
export default Header;