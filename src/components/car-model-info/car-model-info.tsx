import { Popover } from "@headlessui/react";

const carModelInfo = () => {
  return (
    <Popover className="grid justify-center">
      <Popover.Button className=" text-xl font-semibold text-slate-500 py-2">
        Характеристки автомобиля
      </Popover.Button>
      <Popover.Panel>
        <div className="flex gap-10">
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">Двигатель</p>
            <ul className="">
              <li className="font-semibold text-slate-500">Бензин 2.0</li>
              <li className="font-semibold text-slate-500">Дизель 2.5 DI</li>
              <li className="font-semibold text-slate-500">Дизель 2.5 TD</li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">Коробка передач</p>
            <ul className="">
              <li className="font-semibold text-slate-500">Механическая </li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">Мост</p>
            <ul className="">
              <li className="font-semibold text-slate-500">Type 32</li>
              <li className="font-semibold text-slate-500">Type 35</li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">Технические жидкости</p>
            <ul className="">
              <li className="font-semibold text-slate-500">Масло моторное 5W-30</li>
              <li className="font-semibold text-slate-500">Масло моторное 5W-30</li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">Серии</p>
            <ul className="">
              <li className="font-semibold text-slate-500">80</li>
              <li className="font-semibold text-slate-500">120</li>
              <li className="font-semibold text-slate-500">150</li>
              <li className="font-semibold text-slate-500">190</li>
              <li className="font-semibold text-slate-500">100L</li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">Ещё не придумал</p>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default carModelInfo;
