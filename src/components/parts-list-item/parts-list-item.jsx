import React from "react";
import { Link } from "react-router-dom";

export default function PartsListItem({data, route}) {
  return (
    <div className="parts__item border-2 rounded shadow-md shadow-slate-200 hover:border-blue-500 bg-white lg:w-48 mx-1 p-2" key={data.id}>
      <div className="parts__item-image">
          <img src={data.image} alt={data.title} />
      </div>
      <div className="parts__link text-center">
        <Link key={data.id} to={route}></Link>
      </div>
    </div>
  );
}
