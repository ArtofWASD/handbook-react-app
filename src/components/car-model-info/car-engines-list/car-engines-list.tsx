import { FC } from "react";

type TCarEnginesList = {
    data: any,
    getEngineInfoHandler:(engineInfo:string) => void,
    close:()=>void
}
const CarEnginesList:FC<TCarEnginesList> = ({ data, getEngineInfoHandler, close }) => {
  return (
    <>
      <div>
        <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
          Двигатель
        </p>
        <ul>
          {data?.data.engines.map((item: any) => (
            <li
              key={item.engine.id}
              className="font-semibold text-slate-500 hover:cursor-pointer hover:underline underline-offset-4 decoration-blue-500"
              onClick={() => {
                getEngineInfoHandler(item.engine.engineInfo);
                close();
              }}
            >
              {item.engine.type} {item.engine.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CarEnginesList;
