import { Popover, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import {
  clearEngineInfo,
  getEngineInfo,
} from "../../services/reducers/dataSlice";
import { useAppDispatch } from "../../utils/hooks";
import CarModelInfoDetails from "../car-model-info-details/car-model-info-details";
import Modal from "../modal/Modal";
import CarChassisList from "./car-chasis-list/car-chassis-list";
import CarEnginesList from "./car-engines-list/car-engines-list";
import CarGearboxesList from "./car-gearboxes-list/car-gearboxes-list";

// Поповер отображающий характеристики выбранного автомобиля
const carModelInfo = (data: any) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [engineInfoId, setEngineInfoId] = useState<string>("");
  const dispatch = useAppDispatch();
  // Получение информации о двигателе через Id двигателя
  const getEngineInfoHandler = (id: string) => {
    setIsModalOpen(true);
    setEngineInfoId(id);
  };
  // Отслеживаем изменение Id двигателя и перевызываеф функцию получения информации
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
                <CarEnginesList
                  data={data}
                  close={close}
                  getEngineInfoHandler={getEngineInfoHandler}
                />
                <CarGearboxesList data={data} close={close} />
                <CarChassisList data={data}/>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
      <Modal
        isOpen={isModalOpen}
        isModalOpenHandler={() => {
          setIsModalOpen(false);
          dispatch(clearEngineInfo());
        }}
      >
        <CarModelInfoDetails />
      </Modal>
    </>
  );
};

export default carModelInfo;
