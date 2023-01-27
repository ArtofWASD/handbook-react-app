import { FC } from "react";

type TCarGearboxes = {
    data: any,
    close:()=>void
}

const CarGearboxesList:FC<TCarGearboxes> = ({data, close}) => {
  return (
    <>
      <div>
        <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
          Коробка передач
        </p>
        <ul>
          {data?.data.gearboxes.map((item: any) => (
            <li
              key={item.gearbox.id}
              className="font-semibold text-slate-500 decoration-blue-500"
              onClick={() => {
                close();
              }}
            >
              {item.gearbox.name} ({item.gearbox.type})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CarGearboxesList;
