import { motion } from "framer-motion";
import { FC, SyntheticEvent } from "react";
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
  const onLoad = (data: SyntheticEvent<HTMLElement, Event>) => {
    if (data !== undefined) {
      return data;
    }
  };
  return (
    <motion.div
      className="cars_list_title border-2 rounded-xl grid grid-cols-2 justify-self-center my-2 px-20 bg-white"
      onLoad={onLoad}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <div className="cars__image grid justify-items-center lg:w-52 w-32 md:w-48 px-2 ">
        <img src={data.imgUrl} alt={data.name} />
      </div>
      <div className="cars__description grid content-center">
        <div className="text-lg md:text-4xl text-center font-semibold py-0 lg:py-2 text-slate-500">
          {data.name}
        </div>
        <div className="text-lg md:text-4xl text-center font-semibold py-0 lg:py-2 text-slate-500">
          {data?.year?.length > 4 ? data.year : `${data.year}-${year}`}
        </div>
      </div>
    </motion.div>
  );
};
export default CarsListTitle;
