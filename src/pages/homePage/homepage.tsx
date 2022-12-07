import CarModelItem from "../../components/car-model-item/car-model-item";
import { useAppSelector } from "../../utils/hooks";

const Homepage = () => {
  const cars = useAppSelector((state:any) => state.data.data);
  return (
    
    <div className="grid justify-center">
      <div className="cards__list grid justify-center my-auto ">
        <div className="cards__title self-center">
          <p className="text-center text-xl md:text-2xl font-semibold text-slate-500 py-5 px-2">
            Выберите модельный ряд интересующего вас автомобиля
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 justify-items-center items-baseline sm:grid-cols-1 px-8 my-auto">
        {cars !== undefined &&
          cars.map((item: any) => (
            <CarModelItem data={item} key={item.id} route={`/${item.name}`} />
          ))}
      </div>
    </div>
  );
};

export default Homepage;
