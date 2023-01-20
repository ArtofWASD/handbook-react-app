import { useParams, Link, useNavigate } from "react-router-dom";
import СarsListTitle from "../../components/cars-list-title/cars-list-title";
import Button from "../../ui/button/button";
import PartsListItem from "../../components/parts-list-item/parts-list-item";
import { useAppSelector } from "../../utils/hooks";
import { motion } from "framer-motion";
import CarModelInfo from "../../components/car-model-info/car-model-info";

const CarsPartsList = () => {
  const { childName, name } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const carsData = useAppSelector((state) => state.data.data);
  const childCarArray = carsData
    ?.find((item: { name: string }) => item.name === String(name))
    ?.childCars.find(
      (item: { name: string }) => item.name === String(childName),
    );
    
  return (
    <>
      {childCarArray !== undefined ? (
        <div className="cars_parts_list_page grid justify-center">
          {childCarArray && <СarsListTitle data={childCarArray} />}
          <CarModelInfo data={childCarArray}/>
          <div className="parts__group-list grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-4 px-1">
            {childCarArray?.partsGroup.map((item) => (
              <PartsListItem
                data={item.part}
                route={`${item.part.name}`}
                key={item.part.id}
              />
            ))}
          </div>
          <div className="nav grid lg:grid-cols-[20%_20%] grid-cols-2 py-4 lg:justify-end justify-items-center gap-2 px-2">
            <Link to="../">
              <Button title="На главную" className="w-36" />
            </Link>
            <Button title="Назад" onClickHandler={goBack} className="w-36" />
          </div>
        </div>
      ) : (
        <motion.div
          className="text-center p-20"
          animate={{
            scale: [1, 2, 2, 1, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          Загрузка
        </motion.div>
      )}
    </>
  );
};
export default CarsPartsList;
