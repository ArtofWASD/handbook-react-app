import { useAppSelector } from "../../utils/hooks";

// Отображение детальной информации о интересующем узле автомобиля из информаци о двигателе
const CarModelInfoDetails = () => {
  const data = useAppSelector((state) => state.data.engineInfo);
  return (
    <>
      {data !== undefined && data !== null ? (
        <div className="py-3 px-2">
          <div className="text-center text-xl font-semibold text-slate-500">
            Подробная информация:
          </div>
          {data.map((item: any) => (
            <div key={item.id} className="flex-col gap-2">
              <div className=" text-slate-500">- Cпецификация масла: {item.engineOilSpecification}</div>
              <div className=" text-slate-500">- Объём масла: {item.engineOilAmount}</div>
              <div className=" text-slate-500">- Масляные фильтры: {item.oilFilters}</div>
              <div className=" text-slate-500">- Воздушные фильтры: {item.airFilters}</div>
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
