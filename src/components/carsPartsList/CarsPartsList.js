import { useParams, Link, useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';

const CarsPartsList = () => {
    const { childId, id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const getCarsArr = Data.find(item => item.id == id);
    const getChildCarsArray = getCarsArr.childCars.find(item => item.id == childId);
    const getChidCarsPartsArray = getChildCarsArray.parts
    return (
        <div className="grid justify-center">
            {getChildCarsArray && (
                <div className="list__group border-2 rounded bg-white grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-self-center mt-2">
                    <div className="list__img w-60">
                        {getChildCarsArray.image}
                    </div>
                    <div className="px-4">
                        <div className="text-4xl text-center font-semibold py-2 text-slate-500">{getChildCarsArray.label}</div>
                        <div className="text-4xl text-center font-semibold py-2 text-slate-500">{getChildCarsArray.year}</div>
                    </div>
                </div>
            )
            }
            <div className="parts__group-list grid lg:grid-cols-4 sm:grid-cols-2 gap-4 py-4">
                {getChidCarsPartsArray.map(partsItem => (
                    <div className="parts__item border-2 rounded shadow-md shadow-slate-200 hover:border-blue-500 bg-white lg:w-48 mx-1 p-2" key={partsItem.id}>
                        <div className="parts__item-image">
                            {partsItem.image}
                        </div>
                        <div className="parts__link text-center">
                            <Link key={partsItem.id} to={`/carslist/${id}/carspartslist/${getChildCarsArray.id}/partlist/${partsItem.id}`}></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="nav grid lg:grid-cols-[20%_20%] md:grid-cols-[40%_40%] grid-cols-2 py-4 justify-end gap-2">
                <Link to='../'>
                    <button className="header__button w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">На главную</button>
                </Link>
                <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded" onClick={goBack}> Назад </button>
            </div>
        </div>
    );
}
export default CarsPartsList;