import { useParams, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import СarsListTitle from "../cars-list-title/cars-list-title";
import Button from "../button/button";
import CarModelItem from "../car-model-item/car-model-item";

const CarsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const carsArr = Data.find((item) => item.id === Number(id));
  const childCars = carsArr.childCars;

  return (
    <div className="grid xl:px-96 px-4">
      <СarsListTitle data={carsArr} />
      {childCars && (
        <div
          className={
            childCars.length > 4
              ? `child-cars grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 justify-self-center gap-4 px-2`
              : `child-cars grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 justify-self-center gap-4 px-2`
          }
        >
          {childCars.map((item) => (
            <CarModelItem data={item} route={`/${id}/${item.id}`} key={item.id}/>
          ))}
        </div>
      )}
      <div className="nav grid py-4 px-2 justify-end">
        <Button onClickHandler={goBack} title="Назад" />
      </div>
    </div>
  );
};
export default CarsList;
