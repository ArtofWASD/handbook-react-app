
import { Data } from '../../utils/Data';
import CarModelItem from '../car-model-item/car-model-item'
const Homepage = () => {
    return (
        <div className="grid justify-center">
            <div className="cards__list grid justify-center my-auto ">
                <div className="cards__title self-center">
                    <h2 className="text-center text-4xl font-semibold text-slate-500 py-2"> Каталог моделей микроавтобусов </h2>
                    <p className="text-center text-xl font-semibold text-slate-500 py-2"> Выберите модельный ряд или введите в поиск номер интересующей запчасти </p>
                </div>
            </div>
            <div className="container grid lg:grid-cols-3 gap-4 items-baseline sm:grid-cols-1 lg:pt-20 px-8 my-auto">
                {Data && Data.map(item => (
                    <CarModelItem data={item} key={item.id} route={`/${item.id}`}/>
                ))}
            </div>
        </div>
    );
}

export default Homepage;
