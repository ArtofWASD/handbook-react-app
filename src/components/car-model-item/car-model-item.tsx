import { FC } from "react";
import { Link } from "react-router-dom";
type TCarModelItem = {
  data: {
    image: string;
    name?: string;
    id: string;
    label: string;
    year: string;
  };
  route: string;
};
const CarModelItem: FC<TCarModelItem> = ({ data, route }) => {
  const year = new Date()
  return (
    <div className="card grid shadow-md shadow-slate-200 hover:border-blue-500 border-2 rounded-md bg-white max-w-xs">
      <div className="card__img p-2">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="card__title py-4">
        <p className="text-center font-semibold text-2xl text-slate-400">
          {data.label}
        </p>
      </div>
      <div className="card__year py-4">
        <p className="text-center font-semibold text-lg text-slate-400 p-0">
          {data.year} - {year.getFullYear()}
        </p>
      </div>
      <div className="card__link">
        <Link key={data.id} to={route}></Link>
      </div>
    </div>
  );
};
export default CarModelItem;
