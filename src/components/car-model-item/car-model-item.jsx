import React from "react";
import { Link } from 'react-router-dom';

export default function CarModelItem({data}) {
  return (
    <div className="card grid shadow-md shadow-slate-200 hover:border-blue-500 border-2 rounded-md bg-white " key={data.id}>
      <div className="card__img p-2 lg:w-64 w-full ">
        <img src={data.image} alt="" />
      </div>
      <div className="card__title py-4">
        <p className="text-center font-semibold text-2xl text-slate-400">{data.label}</p>
      </div>
      <div className="card__year py-4">
        <p className="text-center font-semibold text-lg text-slate-400 p-0">{data.year}</p>
      </div>
      <div className="card__link">
        <Link key={data.id} to={`carslist/${data.id}`}></Link>
      </div>
    </div>
  );
}
