
import { Data } from '../data/Data';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <div className="cards__list grid justify-center my-auto ">
                <div className="cards__title self-center">
                    <h2 className="text-center text-4xl font-semibold text-slate-500 py-2"> Каталог моделей микроавтобусов </h2>
                    <p className="text-center text-xl font-semibold text-slate-500 py-2"> Выберите модельный ряд или введите в поиск номер интересующей запчасти </p>

                </div>
            </div>
            <div className="container grid lg:grid-cols-3 gap-4 items-baseline sm:grid-cols-1 lg:p-0 px-8 my-auto">
            {Data.map(post => (
                    <div className='card grid shadow-md shadow-slate-200 hover:border-blue-500 border-2 rounded-md bg-white ' key={post.id}>
                        <div className="card__img p-2 lg:w-64 w-full ">
                            {post.image}
                        </div>
                        <div className="card__title py-4">
                            <p className="text-center font-semibold text-2xl text-slate-400">{post.label}</p>
                        </div>
                        <div className="card__year py-4">
                            <p className="text-center font-semibold text-lg text-slate-400 p-0">{post.year}</p>
                        </div>
                        <div className="card__link">
                            <Link key={post.id} to={`carslist/${post.id}`}></Link>
                        </div>
                    </div>
            ))
            }
            </div>
        </>
    );
}

export default Homepage;
