import React from 'react';
import CarsItem from '../cars-item-app/cars-item'

export default function CarsList ({posts}) {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <div key={id}>
                <CarsItem 
                {...itemProps}
                />
            </div>
        )
    })
    
    return (
        <div className="cards__list grid justify-center">
            <div className="cards__title py-4">
                <h2 className="text-center text-2xl font-semibold text-slate-500"> Выберите раздел</h2>
            </div>
            <div className='container inline-grid grid-cols-4 gap-4 px-10 '>
                <React.Fragment>
                    {elements}
                </React.Fragment>
            </div>
        </div>
    )
}
