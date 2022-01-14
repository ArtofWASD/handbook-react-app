import React, { Component } from 'react';

export default class CardItem extends Component {
    render() {
        const { label, year, description, image } = this.props;
        let classNames = "card grid shadow-md shadow-slate-200  hover:shadow-slate-400 border-2 rounded-md bg-white"
        return (
            <div className={classNames}>
                <div className="card__img w-full">
                    {image}
                </div>
                <div className="card__title py-4">
                    <p className="text-center font-semibold text-2xl text-slate-400 ">{label}</p>
                </div>
                <div className="card__year">
                    <p className="text-center font-semibold text-lg text-slate-400 p-0">{year}</p>
                </div>
                <div className="card__description text-center py-4 px-3 text-slate-500">
                    <p>{description}</p>
                </div>
            </div>
        )
    }

}
