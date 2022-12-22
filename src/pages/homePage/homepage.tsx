import CarModelItem from "../../components/car-model-item/car-model-item";
import PostSearch from "../../components/post-search/post-search";
import { useAppSelector } from "../../utils/hooks";

const Homepage = () => {
  const cars = useAppSelector((state) => state.data.data);
  return (
    <div className="grid">
      <PostSearch />
      <div className="cards__list grid justify-center my-auto ">
        <div className="cards__title self-center">
          <p className="text-center text-xl md:text-2xl font-semibold text-slate-500 py-2 px-2">
            Выберите модельный ряд интересующего вас автомобиля
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 justify-items-center sm:grid-cols-1">
        {cars !== undefined &&
          cars !== null &&
          cars.map((item) => (
            <CarModelItem data={item} key={item.id} route={`/${item.name}`} />
          ))}
      </div>
    </div>
  );
};
export default Homepage;
