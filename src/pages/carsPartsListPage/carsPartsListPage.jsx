import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import СarsListTitle from "../../components/cars-list-title/cars-list-title";
import Button from "../../ui/button/button.tsx";
import PartsListItem from "../../components/parts-list-item/parts-list-item"

const CarsPartsList = () => {
  const { childId, id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const childCarArray = Data.find((item) => item.id === String(id)).childCars.find((item)=>item.id === String(childId))
 
  return (
    <div className="grid justify-center">
      {childCarArray && <СarsListTitle data={childCarArray} />}
      <div className="parts__group-list grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-4">
        {childCarArray.parts.map((item) => (
            <PartsListItem data={item} route={`/${id}/${childId}/${item.id}`} key={item.id}/>
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
