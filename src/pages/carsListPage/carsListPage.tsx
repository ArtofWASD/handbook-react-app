import { useParams, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import СarsListTitle from "../../components/cars-list-title/cars-list-title";
import Button from "../../ui/button/button";
import CarModelItem from "../../components/car-model-item/car-model-item";

const CarsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const carsArr = Data.find((item) => item.id === String(id));
  const carTitle = { image: "", label: "", year: "" };
  Object.assign(carTitle, {
    image: carsArr?.image,
    label: carsArr?.label,
    year: carsArr?.year,
  });
  return (
    <div className="grid xl:px-48 px-4">
      <СarsListTitle data={carTitle} />
      {carsArr && (
        <div
          className={
            carsArr.childCars.length > 4
              ? `child-cars grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 justify-self-center gap-4 px-2`
              : `child-cars grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 justify-self-center gap-4 px-2`
          }
        >
          {carsArr.childCars.map((item) => (
            <CarModelItem
              data={item}
              route={`/${id}/${item.id}`}
              key={item.id}
            />
          ))}
        </div>
      )}
      <div className="nav grid py-4 px-2 justify-end">
        <Button onClickHandler={goBack} title="Назад"  className="w-48"/>
      </div>
    </div>
  );
};
export default CarsList;
