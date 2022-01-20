import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from '../data/Data';

const Carslist = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const carsArr = Data.find(item => item.id == id);
    const childCars = carsArr.childCars;
    return (
        <>
            {carsArr && (
                <div className="list__group grid justify-center py-4 items-center align-baseline">
                    <div className="list__header grid grid-flow-col auto-cols-max gap-5 ">
                        <div className="list__img grid justify-items-center w-80">
                            {carsArr.image}
                        </div>
                        <div className="grid content-center px-4">
                            <div className="text-4xl text-center font-semibold py-2 text-slate-500">{carsArr.label}</div>
                            <div className="text-4xl text-center font-semibold py-2 text-slate-500">{carsArr.year}</div>
                        </div>
                    </div>
                </div>
            )}
            <div className="child_cars container grid grid-cols-4 gap-4">
                {childCars.map(childCarCard => (
                    <div className="border-2 rounded shadow-md shadow-slate-200 hover:border-blue-500 bg-white" key={childCarCard.id}>
                        <div className="w-52">
                            {childCarCard.image}
                        </div>
                        <div className="py-2 text-center font-semibold text-2xl text-slate-400">
                            {childCarCard.label}
                        </div>
                        <div className="py-2 text-center font-semibold text-2xl text-slate-400">
                            {childCarCard.year}
                        </div>
                        <div className="py-2">
                            <Link key={childCarCard.id} to={`/carslist/${id}/carspartslist/${childCarCard.id}`}><p className='text-center text-sm text-slate-500 py-2'>Подробней</p></Link>
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="nav container grid py-4 justify-end">
                <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded" onClick={goBack}> Назад </button>
            </div>
        </>
    );
}

export { Carslist };