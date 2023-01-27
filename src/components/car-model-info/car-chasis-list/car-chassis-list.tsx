import React, { FC } from "react";
type TCarChassisList = {
  data:any
}
const CarChassisList:FC<TCarChassisList> = ({data}) => {
  return (
    <>
      <div>
        <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
          Колёсная база и серии
        </p>
        <ul>
          {data?.data?.series.map((item: any) => (
            <div key={item.id}>
              {item.shortWeelbase && (
                <li key={item.shortWeelbase.id}>
                  <p className="font-semibold text-slate-500">
                    Короткая база: {item.shortWeelbase.weelbase}
                  </p>
                  {/* <div className="font-semibold text-slate-500 flex">
                              <p className="text-blue-500 pr-1">Колёсный диск:</p>
                              {item.shortWeelbase.weelRadius},
                              <p className="text-blue-500 px-1">
                                Количество шпилек:
                              </p>
                              {item.shortWeelbase.amountWeelStuds}
                            </div> */}
                  <div className="font-semibold text-blue-500 flex">
                    Серии:
                    <div className="font-semibold text-slate-500 ml-1">
                      {item.shortWeelbase.series}
                    </div>
                  </div>
                </li>
              )}
              {item.mediumWeelbase && (
                <li key={item.mediumWeelbase.id}>
                  <p className="font-semibold text-slate-500">
                    Средняя база: {item?.mediumWeelbase.weelbase}
                  </p>
                  {/* <div className="font-semibold text-slate-500 flex">
                              <p className="text-blue-500 pr-1">Колёсный диск:</p>
                              {item.mediumWeelbase.weelRadius},
                              <p className="text-blue-500 px-1">
                                Количество шпилек:
                              </p>
                              {item.mediumWeelbase.amountWeelStuds}
                            </div> */}
                  <div className="font-semibold text-blue-500 flex">
                    Серии:
                    <div className="font-semibold text-slate-500 ml-1">
                      {item?.mediumWeelbase.series}
                    </div>
                  </div>
                </li>
              )}
              {item.longWeelbase && (
                <li key={item.longWeelbase.id}>
                  <p className="font-semibold text-slate-500">
                    Длинная база: {item?.longWeelbase.weelbase}
                  </p>
                  {/* <div className="font-semibold text-slate-500 flex">
                              <p className="text-blue-500 pr-1">Колёсный диск:</p>
                              {item.longWeelbase.weelRadius},
                              <p className="text-blue-500 px-1">
                                Количество шпилек:
                              </p>
                              {item.longWeelbase.amountWeelStuds}
                            </div> */}
                  <div className="font-semibold text-blue-500 flex">
                    Серии:
                    <div className="font-semibold text-slate-500 ml-1">
                      {item?.longWeelbase.series}
                    </div>
                  </div>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CarChassisList;
