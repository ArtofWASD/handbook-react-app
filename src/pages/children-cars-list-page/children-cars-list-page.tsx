import { useParams, useNavigate, Link } from "react-router-dom";
import СarsListTitle from "../../components/cars-list-title/cars-list-title";
import Button from "../../ui/button/button";
import CarModelItem from "../../components/car-model-item/car-model-item";
import { useAppSelector } from "../../utils/hooks";

const ChildrenCarsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const carsData = useAppSelector((state) => state.data.data);
  const carsArr = carsData.find((item: any) => item.id === String(id));
  const carTitle = { image: "", label: "", year: "" };

  Object.assign(carTitle, {
    image: carsArr?.image,
    label: carsArr?.label,
    year: carsArr?.year,
  });
  return (
    <div className="grid children_cars_list xl:px-48 px-4">
      <СarsListTitle data={carTitle} />
      {carsArr && (
        <div
          className={
            carsArr.childCars.length > 4
              ? `child-cars grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 justify-self-center gap-4 px-2`
              : `child-cars grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 justify-self-center gap-4 px-2`
          }
        >
          {carsArr.childCars.map((item: any) => (
            <CarModelItem
              data={item}
              route={`/${id}/${item.id}`}
              key={item.id}
            />
          ))}
        </div>
      )}
      <div className="nav grid lg:grid-cols-[10%_24%] md:grid-cols-[40%_40%] grid-cols-2 py-4 justify-end gap-2 px-2">
        <Link to="../">
          <Button title="На главную" className="w-48" />
        </Link>
        <Button onClickHandler={goBack} title="Назад" className="w-48" />
      </div>
    </div>
  );
};
export default ChildrenCarsList;
