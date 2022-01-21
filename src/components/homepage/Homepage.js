
import { Data } from '../data/Data';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <div className="cards__list grid justify-center ">
                <div className="cards__title pt-4 self-center">
                    <h2 className="text-center text-4xl font-semibold text-slate-500 pb-4 "> Выберите раздел</h2>
                </div>
            </div>
            <div className="container grid lg:grid-cols-3 gap-4 items-baseline sm:grid-cols-1 lg:p-0 px-8">
            {Data.map(post => (
                    <div className='card grid shadow-md shadow-slate-200 hover:border-blue-500 border-2 rounded-md bg-white ' key={post.id}>
                        <div className="card__img p-2 lg:w-64 w-full ">
                            {post.image}
                        </div>
                        <div className="card__title py-4">
                            <p className="text-center font-semibold text-2xl text-slate-400">{post.label}</p>
                        </div>
                        <div className="card__year">
                            <p className="text-center font-semibold text-lg text-slate-400 p-0">{post.year}</p>
                        </div>
                        <div className="card__description text-center py-4 px-3 text-slate-500">
                            <p>{post.description}</p>
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
