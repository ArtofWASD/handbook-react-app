import React, { Component } from 'react';

export default class CardItem extends Component {
    render() {
        const { label, year, description, image } = this.props;
        let classNames = "card grid shadow-md shadow-slate-200  hover:shadow-slate-400 border-2 rounded-md bg-white"
        return (
            <div className={classNames}>
                <div className="card__img w-full">
                    {image}
                    <img src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="placeholder"></img>
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
