import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import СarsListTitle from "../../components/cars-list-title/cars-list-title";
import Button from "ui/button/button";
import PartsListItem from "../../components/parts-list-item/parts-list-item";

const CarsPartsList = () => {
  const { childId, id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const childCarArray = Data.find(
    (item) => item.id === String(id),
  )?.childCars.find((item) => item.id === String(childId));

  return (
    <div className="grid justify-center">
      {childCarArray && <СarsListTitle data={childCarArray} />}
      <div className="parts__group-list grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-4">
        {childCarArray?.parts.map((item) => (
          <PartsListItem
            data={item}
            route={`/${id}/${childId}/${item.id}`}
            key={item.id}
          />
        ))}
      </div>
      <div className="nav grid lg:grid-cols-[20%_20%] md:grid-cols-[40%_40%] grid-cols-2 py-4 justify-end gap-2">
        <Link to="../">
          <Button
            title="На главную"
            className="w-36 justify-self-center p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded-xl"
          />
        </Link>
        <Button
          title="Назад"
          onClickHandler={goBack}
          className="w-36 justify-self-center p-2 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 border hover:border-blue-500 rounded-xl"
        />
      </div>
    </div>
  );
};
export default CarsPartsList;
