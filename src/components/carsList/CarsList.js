import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from '../../utils/Data';

const CarsList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const carsArr = Data.find(item => item.id == id);
    const childCars = carsArr.childCars;
    return (
        <div className="grid xl:px-96 px-4">
            {carsArr && (
                <div className="cars__header border-2 rounded grid lg:grid-cols-2 sm:grid-cols-1 justify-self-center my-2 bg-white">
                    <div className="cars__image grid justify-items-center lg:w-80 px-2 ">
                        {carsArr.image}
                    </div>
                    <div className="cars__description grid content-center px-4">
                        <div className="text-4xl text-center font-semibold py-2 text-slate-500">{carsArr.label}</div>
                        <div className="text-4xl text-center font-semibold py-2 text-slate-500">{carsArr.year}</div>
                    </div>
                </div>
            )}
            <div className="child-cars grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 justify-self-center gap-4 px-2">
                {childCars.map(childCarCard => (
                    <div className="card border-2 rounded shadow-md shadow-slate-200 hover:border-blue-500 bg-white" key={childCarCard.id}>
                        <div className="card__image p-2">
                            {childCarCard.image}
                        </div>
                        <div className="card__model py-2 text-center font-semibold lg:text-2xl sm:text-base md:text-xl text-slate-400">
                            {childCarCard.label}
                        </div>
                        <div className="card__year py-2 text-center font-semibold lg:text-2xl sm:text-base md:text-xl text-slate-400">
                            {childCarCard.year}
                        </div>
                        <div className="card__link py-2">
                            <Link key={childCarCard.id} to={`/carslist/${id}/carspartslist/${childCarCard.id}`}></Link>
                        </div>
                    </div>
                )
                )}
            </div>
            <div className="nav grid py-4 px-2 justify-end">
                <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 p-2 border hover:border-blue-500 rounded" onClick={goBack}> Назад </button>
            </div>
        </div>
    );
}

export default CarsList;
