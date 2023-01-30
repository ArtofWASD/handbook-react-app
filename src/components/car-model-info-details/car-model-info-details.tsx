import { useAppSelector } from "../../utils/hooks";

// Отображение детальной информации о интересующем узле автомобиля из информаци о двигателе
const CarModelInfoDetails = () => {
  const data = useAppSelector((state) => state.data.engineInfo);
  return (
    <>
      {data !== undefined && data !== null ? (
        <div className="py-3 px-2">
          {data.map((item: any) => (
            <div key={item.id}>
              <div className="text-center text-xl font-semibold text-slate-500">
                Подробная информация: {item.engineType }
              </div>
              <div  className="flex-col gap-2">
                <div className=" text-slate-500 flex gap-1">
                  - Cпецификация масла: {item.engineOilSpecification !== null ? (<div className="text-blue-500">{item.engineOilSpecification}</div>):(<div className="text-red-500">информации нет</div>)}
                </div>
                <div className=" text-slate-500 flex gap-1">
                  - Объём масла для полной замены: {item.engineOilAmount !== null ? (<div className="text-blue-500">{item.engineOilAmount}</div>):(<div className="text-red-500">информации нет</div>)}
                </div>
                <div className=" text-slate-500 flex gap-1">
                  - Масляные фильтры: {item.oilFilters !== null ? (<div className="text-blue-500">{item.oilFilters}</div>):(<div className="text-red-500">информации нет</div>)}
                </div>
                <div className=" text-slate-500 flex gap-1">
                  - Воздушные фильтры: {item.airFilters !== null ? (<div className="text-blue-500">{item.airFilters}</div>):(<div className="text-red-500">информации нет</div>)}
                </div>
                <div className=" text-slate-500 flex gap-1">
                  - Топливные фильтры: {item.fuelFilters !== null ? (<div className="text-blue-500">{item.fuelFilters}</div>):(<div className="text-red-500">информации нет</div>)}
                </div>
                <div className=" text-slate-500 flex gap-1">
                  - Салонные фильтры: {item.saloonFilter !== null ? (<div className="text-blue-500">{item.saloonFilter}</div>):(<div className="text-red-500">информации нет</div>)}
                </div>
                <div className=" text-slate-500 flex gap-1">
                  - Объём охлаждающей жидкости для полной замены: {item.amountCoolant !== null ? (<>{item.amountCoolant}</>):(<div className="text-red-500">информации нет</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-5 px-2">
          К сожалению по данному узлу информации нет в данный момент
        </div>
      )}
    </>
  );
};

export default CarModelInfoDetails;
