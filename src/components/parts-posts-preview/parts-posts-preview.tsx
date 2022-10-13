import { FC } from "react";
import { Link } from "react-router-dom";
type TPartsPostsPreview = {
  route: string;
  data: {
    text: string;
    title: string;
    id: string;
  };
};
const PartsPostsPreview: FC<TPartsPostsPreview> = ({ data, route }) => {
  return (
    <li className="post__item list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100">
      <div className="text-2xl font-semibold text-slate-500 py-2">
        {data.title}
      </div>
      <div>{data.text.substring(0, 200) + "..."}</div>
      <div className="post__link text-center">
        <Link key={data.id} to={route}></Link>
      </div>
    </li>
  );
};
export default PartsPostsPreview;
