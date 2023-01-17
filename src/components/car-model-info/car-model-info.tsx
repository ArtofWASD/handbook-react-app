import { Popover } from "@headlessui/react";

// Поповер отображающий характеристики выбранного автомобиля
const carModelInfo = (data:any) => {

  return (
    <Popover className="grid justify-center">
      <Popover.Button className=" text-xl font-semibold text-slate-500 py-2">
        Характеристки автомобиля
      </Popover.Button>
      <Popover.Panel>
        <div className="flex gap-10">
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
              Двигатель
            </p>
            <ul className="">
              {data.data.map((item:any)=>(
                <li key={item.engineInfo.id} className='font-semibold text-slate-500'>{item.engineInfo.type} {item.engineInfo.name}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
              Коробка передач
            </p>
            <ul className=""></ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
              Мост
            </p>
            <ul className=""></ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
              Технические жидкости
            </p>
            <ul className=""></ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
              Серии
            </p>
            <ul className=""></ul>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default carModelInfo;
