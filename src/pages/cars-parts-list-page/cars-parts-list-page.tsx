import { useParams, Link, useNavigate } from "react-router-dom";
import СarsListTitle from "../../components/cars-list-title/cars-list-title";
import Button from "ui/button/button";
import PartsListItem from "../../components/parts-list-item/parts-list-item";
import { useAppSelector } from "utils/hooks";

const CarsPartsList = () => {
  const { childId, id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const carsData = useAppSelector((state) => state.data.data.Cars);
  
  const childCarArray = carsData
    .find((item: { id: string }) => item.id === String(id))
    ?.childCars.find((item: { id: string }) => item.id === String(childId));

  return (
    <div className="cars_parts_list_page grid justify-center">
      {childCarArray && <СarsListTitle data={childCarArray} />}
      <div className="parts__group-list grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-4 px-1">
        {childCarArray?.parts.map((item: any) => (
          <PartsListItem
            data={item}
            route={`/${id}/${childId}/${item.id}`}
            key={item.id}
          />
        ))}
      </div>
      <div className="nav grid lg:grid-cols-[20%_20%] md:grid-cols-[40%_40%] grid-cols-2 py-4 justify-end gap-2 px-2">
        <Link to="../">
          <Button title="На главную" className="w-36" />
        </Link>
        <Button title="Назад" onClickHandler={goBack} className="w-36" />
      </div>
    </div>
  );
};
export default CarsPartsList;
