import { Link } from "react-router-dom";
import { FC, SyntheticEvent } from "react";
import { motion } from "framer-motion";

type TPartsListItem = {
  route: string;
  data: {
    imgUrl: string;
    label: string;
    id: string;
  };
};
// Компонент отрисовывающий палшу с названием и иконкой группы запчастей
const PartsListItem: FC<TPartsListItem> = ({ data, route }) => {
  // Функция ожидания загрузки компонента
  const onLoad = (data: SyntheticEvent<HTMLElement, Event>) => {
    if (data !== undefined) {
      return data;
    }
  };
  
  return (
    <motion.div
      onLoad={onLoad}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      <Link key={data.id} to={route}>
        <div
          className="parts__item border-2 rounded-xl shadow-md shadow-slate-200 hover:border-blue-500 bg-white lg:w-48 mx-1 p-2"
          key={data.id}
        >
          <div className="parts__item-image flex justify-center">
            <img src={data.imgUrl} alt={data.label} />
          </div>
          <div className="parts__item-title text-center text-md pt-2 font-semibold text-slate-500">
            <p>{data.label}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
export default PartsListItem;
