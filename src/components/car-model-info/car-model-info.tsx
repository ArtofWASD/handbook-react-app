import { Popover } from "@headlessui/react";

const carModelInfo = () => {
  return (
    <Popover className="grid justify-center">
      <Popover.Button className="font-semibold text-slate-500">Характеристки автомобиля</Popover.Button>
      <Popover.Panel>
        <div className="flex gap-10">
          <div className="">
            <p className="font-semibold text-slate-500">Двигатель</p>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500">Коробка передач</p>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500">Мост</p>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500">Ещё не придумал</p>
          </div>
          <div className="">
            <p className="font-semibold text-slate-500">Ещё не придумал</p>
          </div>
          <div className=""></div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default carModelInfo;
