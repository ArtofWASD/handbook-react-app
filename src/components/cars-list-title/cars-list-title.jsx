import React from "react";

export default function carsListTitle({data}) {
  return (
    <div className="cars__header border-2 rounded grid lg:grid-cols-2 sm:grid-cols-1 justify-self-center my-2 bg-white">
      <div className="cars__image grid justify-items-center lg:w-80 px-2 ">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="cars__description grid content-center px-4">
        <div className="text-4xl text-center font-semibold py-2 text-slate-500">{data.label}</div>
        <div className="text-4xl text-center font-semibold py-2 text-slate-500">{data.year}</div>
      </div>
    </div>
  );
}
