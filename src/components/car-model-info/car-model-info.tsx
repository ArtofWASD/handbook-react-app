import { Popover, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { clearEngineInfo, getEngineInfo } from "../../services/reducers/dataSlice";
import { useAppDispatch } from "../../utils/hooks";
import CarModelInfoDetails from "../car-model-info-details/car-model-info-details";
import Modal from "../modal/Modal";

type TCarModelInfo = {
  data: {};
};
// Поповер отображающий характеристики выбранного автомобиля
const carModelInfo = (data: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [engineInfoId, setEngineInfoId] = useState<string>("");
  const dispatch = useAppDispatch();
  console.log(engineInfoId);
  
  const getEngineInfoHandler = (id: string) => {
    setIsModalOpen(true);
    setEngineInfoId(id);
  };

  useEffect(() => {
    if (engineInfoId !== "") {
      dispatch(getEngineInfo(engineInfoId));
    }
  }, [engineInfoId, isModalOpen]); 
  return (
    <>
      <Popover className="grid">
        <Popover.Button className="text-xl font-semibold text-slate-500 py-4">
          Характеристки автомобиля
        </Popover.Button>
        <Transition
          enter="transition duration-500 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-250 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
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
                          getEngineInfoHandler(item.engine.engineInfo);
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
                    Серии
                  </p>
                  <ul className=""></ul>
                </div>
                <div className="">
                  <p className="font-semibold text-slate-500 underline underline-offset-4 decoration-2 pb-2">
                    Мост
                  </p>
                  <ul className=""></ul>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
      <Modal
        isOpen={isModalOpen}
        isModalOpenHandler={() => {
          setIsModalOpen(false);
          dispatch(clearEngineInfo())
        }}
      >
        <CarModelInfoDetails />
      </Modal>
    </>
  );
};

export default carModelInfo;
