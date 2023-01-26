import { Popover, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import {
  clearEngineInfo,
  getEngineInfo,
} from "../../services/reducers/dataSlice";
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
