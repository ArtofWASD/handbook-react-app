import React from 'react';
import './header-app.css';

const Header = () => {
    return(
        <div className="header py-2 px-2 inline-grid grid-cols-2 col-end-2 gap-2">
            <button className="header__button w-40 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">Добавить</button>
            <button className="header__button w-40 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">Удалить</button>
        </div>
    )
}
export default Header;