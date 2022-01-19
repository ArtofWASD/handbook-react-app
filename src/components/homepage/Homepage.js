
import { Data } from '../data/Data';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <div className="cards__list grid justify-center ">
                <div className="cards__title py-4">
                    <h2 className="text-center text-2xl font-semibold text-slate-500"> Выберите раздел</h2>
                </div>
            </div>
            <div className="container grid grid-cols-3 gap-4 px-60 items-baseline">
            {Data.map(post => (
                    <div className='card grid shadow-md shadow-slate-200 hover:shadow-slate-400 border-2 rounded-md bg-white' key={post.id}>
                        <div className="card__img w-full p-2">
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
                        <div>
                            <Link key={post.id} to={`partslist/${post.id}`}><p className='text-center text-sm text-slate-500 py-2'>Подробней</p></Link>
                        </div>
                    </div>
            ))
            }
            </div>


        </>
    );
}

export { Homepage }
