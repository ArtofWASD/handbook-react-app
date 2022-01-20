import { useParams, Link, useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';
// Изображения временно
import battery from '../img/battery.png';
import breakPads from '../img/break.png';
import carDoor from '../img/car_door.png';
import chasis from '../img/chassis.png';
import cooler from '../img/cooler.png';
import piston from '../img/piston.png';
import suspension from '../img/shockbreaker.png';
import stearing from '../img/wheels.png';


const CarsPartsList = () => {
    const { childId, id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const carsArr = Data.find(item => item.id == id);
    const result = carsArr.childCars.find(item => item.id == childId);
    return (
        <>  {result && (
            <>
                <div className="list__group grid justify-center py-4 items-center align-baseline">
                    <div className="list__header grid grid-flow-col auto-cols-max gap-5 ">
                        <div className="list__img grid justify-items-center w-60">
                            {result.image}
                        </div>
                        <div className="grid content-center px-4">
                            <div className="text-4xl text-center font-semibold py-2 text-slate-500">{result.label}</div>
                            <div className="text-4xl text-center font-semibold py-2 text-slate-500">{result.year}</div>
                        </div>
                    </div>
                </div>
            </>
        )
        }

            <div className="parts__group-list grid container grid-cols-4 gap-4 py-4">
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ piston } alt="Battery"></img>
                </div>
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ carDoor } alt="Battery"></img>
                </div>
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ suspension } alt="Battery"></img>
                </div>
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ cooler } alt="Battery"></img>
                </div>
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ chasis } alt="Battery"></img>
                </div>
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ stearing } alt="Battery"></img>
                </div>
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ battery } alt="Battery"></img>
                </div>
                <div className="parts__item border-2 bg-white w-48">
                    <img src={ breakPads } alt="Battery"></img>
                </div>
            </div>
            <div className="nav container grid grid-flow-col py-4 justify-end gap-2">
                <Link to='../'>
                    <button className="header__button w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">На главную</button>
                    </Link>
                <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded" onClick={goBack}> Назад </button>
            </div>
        </>
    );
}

export { CarsPartsList };