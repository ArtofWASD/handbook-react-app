import React from 'react';

const SearchBar = () => {
    return (
        <div className="search py-2">
            <div class="flex items-center justify-center ">
                <div class="inline-grid grid-cols-2 gap-2">
                    <input type="text" class=" border border-blue-500 rounded px-4 py-2 w-60 font-semibold" placeholder="Введите номер запчасти" />
                    <button class="w-40 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">Поиск</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;