import { useAppSelector } from "../../utils/hooks";

// Отображение детальной информации о интересующем узле автомобиля из информаци о машине
const CarModelInfoDetails = () => {
  const data: any = useAppSelector((state) => state.data.engineInfo);
  return (
    <>
      {data !== undefined && data !== null ? (
        <div className="py-5 px-2">
          <div className="">
            Тут пока ничего нету, без паники, это временно!
          </div>
          {data.map((item: any) => (
            <div key={item.id} className="flex-col gap-2">
              <div>Cпецификация масла: {item.engineOilSpecification}</div>
              <div>Объём масла: {item.engineOilAmount}</div>
              <div>Масляные фильтры: {item.oilFilters}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-5 px-2">
          К сожелнию по данному узлу информации нет в данный момент
        </div>
      )}
    </>
  );
};

export default CarModelInfoDetails;
