import React from 'react';

const SearchBar = () => {
    return (
        <div className="search">
            <div className="grid items-center justify-center ">
                <div className="inline-grid grid-cols-5 gap-2">
                    <input type="text" className="col-span-4 border border-blue-500 rounded px-4 py-2 font-semibold" placeholder="Номер запчасти или название" />
                    <button className="w-40 col-start-5 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">Поиск</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;