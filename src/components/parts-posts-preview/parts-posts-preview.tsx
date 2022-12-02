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
    <Link key={data.id} to={route}>
      <li className="post__item list-none border-2 rounded-xl hover:border-blue-500 p-2 m-2 bg-slate-100 lg:w-150">
        <div className="text-xl text-center font-semibold text-slate-500 py-2">
          {data.title}
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${data.text.substring(0, 200) + "..."}`,
          }}
        ></div>
        <div className="post__link text-center"></div>
      </li>
    </Link>
  );
};
export default PartsPostsPreview;
