import React from 'react';
import Data from '../data/data'

export default function PartsListGroup (props) {
    const elements = Data.map((item)=>{
        const{ id, ...itemProps} = item;
        console.log(item);
        return(
            <div key={id}>
                {item.image}
        </div>
        )
    })

    return(
        <div className ="list__group">
            <div>
                {elements}
            </div>
            <div className="text-xl text-center font-semibold py-4 text-slate-500">Я отрисовался сюда </div>
        </div>
        
    )
}
