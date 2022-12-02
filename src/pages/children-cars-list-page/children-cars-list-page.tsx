import { useParams, useNavigate, Link } from "react-router-dom";
import СarsListTitle from "../../components/cars-list-title/cars-list-title";
import Button from "../../ui/button/button";
import CarModelItem from "../../components/car-model-item/car-model-item";
import { useAppSelector } from "../../utils/hooks";

type TChildCarsArray = {
  id: string;
  name: string;
  year: string;
  imgUrl: string;
  parent_id: string;
};

type TCarsArray = {
  imgUrl: string | undefined;
  name: string;
  year: string;
  id: string;
  childCars: Array<TChildCarsArray> | any;
};

const ChildrenCarsList = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const carsData: Array<TCarsArray> = useAppSelector(
    (state:any) => state.data.data,
  );

  const carsArr = carsData.find((item) => item.name === String(name));
  const carTitle = { imgUrl: "", name: "", year: "" };

  Object.assign(carTitle, {
    imgUrl: carsArr?.imgUrl,
    name: carsArr?.name,
    year: carsArr?.year,
  });

  return (
    <>
      {carsArr !== undefined ? (
        <div className="grid children_cars_list xl:px-48 px-4">
          <СarsListTitle data={carTitle} />
          <div
            className={
              carsArr?.childCars?.length >= 4
                ? `child-cars grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 justify-self-center gap-4 px-2`
                : `child-cars grid lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 justify-self-center gap-4 px-2`
            }
          >
            {carsArr.childCars.map((item: any) =>
              <CarModelItem key={item.id} data={item} route={`${item.name}`}/>  
            )}
          </div>
          <div className="nav grid lg:grid-cols-[10%_24%] md:grid-cols-[40%_40%] grid-cols-2 py-4 lg:justify-end justify-items-center lg:gap-2 px-2">
            <Link to="../">
              <Button title="На главную" className="w-36 md:w-48" />
            </Link>
            <Button onClickHandler={goBack} title="Назад" className="w-36 md:w-48" />
          </div>
        </div>
      ) : (
        <div className="text-2xl text-center">Children Cars List Page</div>
      )}
    </>
  );
};
export default ChildrenCarsList;
