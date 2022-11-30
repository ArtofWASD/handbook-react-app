import { FC } from "react";
import { year } from "../../utils/handlerFunctions";

type TCarsListTitle = {
  data: {
    imgUrl: string;
    name: string;
    year: string;
  };
};
// Заголовок в старницах с машинами
const CarsListTitle: FC<TCarsListTitle> = ({ data }) => {
  return (
    <div className="cars_list_title border-2 rounded-xl grid lg:grid-cols-2 sm:grid-cols-1 justify-self-center my-2 bg-white">
      <div className="cars__image grid justify-items-center lg:w-80 px-2 ">
        <img src={data.imgUrl} alt={data.name} />
      </div>
      <div className="cars__description grid content-center px-4">
        <div className="text-4xl text-center font-semibold py-2 text-slate-500">
          {data.name}
        </div>
        <div className="text-4xl text-center font-semibold py-2 text-slate-500">
          {data?.year?.length > 4 ? data.year : `${data.year} - ${year}`}
        </div>
      </div>
    </div>
  );
};
export default CarsListTitle;
