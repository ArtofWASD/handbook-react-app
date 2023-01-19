import { Popover } from "@headlessui/react";
import { useState } from "react";
import CarModelInfoDetails from "../car-model-info-details/car-model-info-details";
import Modal from "../modal/Modal";

type TCarModelInfo = {
  data: {};
};
// Поповер отображающий характеристики выбранного автомобиля
const carModelInfo = (data: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  return (
    <>
      <Popover className="grid">
        <Popover.Button className="text-xl font-semibold text-slate-500 py-4">
          Характеристки автомобиля
        </Popover.Button>
        <Popover.Panel>
          {({ close }) => (
            <div className="lg:grid grid-flow-col lg:px-0 mx-4 ">
              <div className="">
                <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
                  Двигатель
                </p>
                <ul className="">
                  {data?.data.engines.map((item: any) => (
                    <li
                      key={item.engine.id}
                      className="font-semibold text-slate-500 hover:cursor-pointer hover:underline underline-offset-4 decoration-blue-500"
                      onClick={() => {
                        setIsModalOpen(true);
                        close();
                      }}
                    >
                      {item.engine.type} {item.engine.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
                  Коробка передач
                </p>
                <ul className="">
                {data?.data.gearboxes.map((item: any) => (
                    <li
                      key={item.gearbox.id}
                      className="font-semibold text-slate-500 hover:cursor-pointer hover:underline underline-offset-4 decoration-blue-500"
                      onClick={() => {
                        setIsModalOpen(true);
                        close();
                      }}
                    >
                      {item.gearbox.name} ({item.gearbox.type})
                    </li>
                  ))}
                </ul>
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
          )}
        </Popover.Panel>
      </Popover>
      <Modal
        isOpen={isModalOpen}
        isModalOpenHandler={() => {
          setIsModalOpen(false);
        }}
      >
        <CarModelInfoDetails />
      </Modal>
    </>
  );
};

export default carModelInfo;
