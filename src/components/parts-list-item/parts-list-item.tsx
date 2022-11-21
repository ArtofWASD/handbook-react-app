import { Link } from "react-router-dom";
import { FC } from "react";
type TPartsListItem = {
  route: string;
  data: {
    image: string;
    title: string;
    id: string;
  };
};
const PartsListItem: FC<TPartsListItem> = ({ data, route }) => {
  return (
    <div
      className="parts__item border-2 rounded-xl shadow-md shadow-slate-200 hover:border-blue-500 bg-white lg:w-48 mx-1 p-2"
      key={data.id}
    >
      <div className="parts__item-image flex justify-center">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="parts__item-title text-center text-md pt-2 font-semibold text-slate-500">
        <p>{data.title}</p>
      </div>
      <div className="parts__link text-center">
        <Link key={data.id} to={route}></Link>
      </div>
    </div>
  );
};
export default PartsListItem;
