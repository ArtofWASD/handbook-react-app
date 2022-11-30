import { FC } from "react";
import { Link } from "react-router-dom";
import { year } from "../../utils/handlerFunctions";
// элемент автомобиля
type TCarModelItem = {
  data: {
    imgUrl: string;
    name?: string;
    id: string;
    year: any;
  };
  route: string;
};

const CarModelItem: FC<TCarModelItem> = ({ data, route }) => {  
  return (
    <section className="card grid shadow-md shadow-slate-200 hover:border-blue-500 border-2 rounded-xl bg-white max-w-xs">
      <Link key={data.id} to={route}>
        <div className="card__img p-2">
          <img src={data.imgUrl} alt={data.name} />
        </div>
        <div className="card__title py-2">
          <p className="text-center font-semibold text-2xl text-slate-400">
            {data.name}
          </p>
        </div>
        <div className="card__year py-2">
          <p className="text-center font-semibold text-lg text-slate-400 p-0">
            {data.year.length > 4 ? data.year : `${data.year} - ${year}`}
          </p>
        </div>
      </Link>
    </section>
  );
};
export default CarModelItem;
