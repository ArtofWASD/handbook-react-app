import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import СarsListTitle from "../cars-list-title/cars-list-title";
import Button from "../button/button";
import PartsListItem from "../parts-list-item/parts-list-item"

const CarsPartsList = () => {
  const { childId, id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const getCarsArr = Data.find((item) => item.id == id);
  const getChildCarsArray = getCarsArr.childCars.find((item) => item.id == childId);
  const getChidCarsPartsArray = getChildCarsArray.parts;

  return (
    <div className="grid justify-center">
      {getChildCarsArray && <СarsListTitle data={getChildCarsArray} />}
      <div className="parts__group-list grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-4">
        {getChidCarsPartsArray.map((partsItem) => (
            <PartsListItem data={partsItem} route={`/${id}/${getChildCarsArray.id}/${partsItem.id}`} key={partsItem.id}/>
        ))}
      </div>
      <div className="nav grid lg:grid-cols-[20%_20%] md:grid-cols-[40%_40%] grid-cols-2 py-4 justify-end gap-2">
        <Link to="../">
          <Button title="На главную" />
        </Link>
        <Button title="Назад" onClickHandler={goBack} />
      </div>
    </div>
  );
};
export default CarsPartsList;
