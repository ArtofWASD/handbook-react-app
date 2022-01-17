import React from 'react';
import './parts-list-group.css'
import Data from '../data/data'

export default function PartsListGroup() {
    const elements = Data.map((item) => {
        const { id } = item;
        return (
            <div key={id}>
            </div>
        )
    })

    return (
        <div className="list__group grid justify-center py-4">
            <div className="list__header grid grid-flow-col auto-cols-max gap-5 ">
                {elements}
                <div className="list__img grid justify-items-center">
                    <img className="h-48 " src="https://images.unsplash.com/photo-1605663485884-1f1c37b1f55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                </div>
                <div className="grid content-center px-4">
                    <div className="text-4xl text-center font-semibold py-2 text-slate-500">Модель автомобиля </div>
                    <div className="text-4xl text-center font-semibold py-2 text-slate-500">2000-2022 </div>
                </div>
            </div>
            <section className="list__content inline-grid grid-cols-4 gap-4 py-4">
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
                <div className="border-2 rounded w-48 h-48 text-center bg-gray-200 shadow-md hover:shadow-slate-600">Выбери категорию</div>
            </section>
        </div>
    )
}
