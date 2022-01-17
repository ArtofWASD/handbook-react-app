import React from 'react';
import {Link} from 'react-router-dom'

export default function CarsItem(props) {
    let classNames = "card grid shadow-md shadow-slate-200 hover:shadow-slate-400 border-2 rounded-md bg-white"
    return (
        <div className={classNames}>
            <div className="card__img w-full p-2">
                {props.image}
            </div>
            <div className="card__title py-4">
                <p className="text-center font-semibold text-2xl text-slate-400">{props.label}</p>
            </div>
            <div className="card__year">
                <p className="text-center font-semibold text-lg text-slate-400 p-0">{props.year}</p>
            </div>
            <div className="card__description text-center py-4 px-3 text-slate-500">
                <p>{props.description}</p>
            </div>
            <div>
                <Link to='../PartsListGroup'><p className='text-center text-sm text-slate-500 py-2'>Подробней</p></Link>
            </div>
        </div>
    )
}

