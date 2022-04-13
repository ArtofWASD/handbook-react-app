import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from '../../utils/Data';
import СarsListTitle from '../cars-list-title/cars-list-title'
import Button from '../button/button'

const CarsList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const carsArr = Data.find(item => item.id == id);
    const childCars = carsArr.childCars;
    return (
        <div className="grid xl:px-96 px-4">
            <СarsListTitle data={carsArr}/>
            <div className="child-cars grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 justify-self-center gap-4 px-2">
                {childCars.map(childCarCard => (
                    <div className="card border-2 rounded shadow-md shadow-slate-200 hover:border-blue-500 bg-white" key={childCarCard.id}>
                        <div className="card__image p-2">
                            <img src={childCarCard.image} alt={childCarCard.name} />
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
                <Button onClickHandler={goBack} title="Назад"/>
            </div>
        </div>
    );
}

export default CarsList;
