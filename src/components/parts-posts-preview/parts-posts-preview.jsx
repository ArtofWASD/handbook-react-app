import React from "react";
import { Link } from "react-router-dom";

export default function PartsPostsPreview({ data, route }) {
  return (
    <li className="post__item list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100">
      <div className="text-2xl font-semibold text-slate-500 py-2">{data.title}</div>
      <div>{data.text.substring(0, 200) + "..."}</div>
      <div className="post__link text-center">
        <Link key={data.id} to={route}></Link>
      </div>
    </li>
  );
}
