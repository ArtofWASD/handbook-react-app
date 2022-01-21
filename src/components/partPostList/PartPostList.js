import { useParams, Link, useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';

const PartPostList = () => {
    const { childId, id, postId } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <div className="part-posts container xl:px-52 lg:px-32 grid justify-items-center grid-cols-3 grid-rows-[10%_auto_10%] ">
                <div className="part-posts__title col-start-1 col-end-4 self-center">
                    <p className="text-center text-4xl font-semibold text-slate-500 py-2">Список статей</p>
                </div>
                <div className="part-posts__list border-2 rounded col-start-1 col-end-4 row-start-2 mx-3">
                    <li className="list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quia error tempora quisquam deserunt
                            est officia nihil reprehenderit totam numquam. Rem, accusamus eius blanditiis neque pariatur quam? Dolor, non minus?</span>
                    </li>
                    <li className="list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quia error tempora quisquam deserunt
                            est officia nihil reprehenderit totam numquam. Rem, accusamus eius blanditiis neque pariatur quam? Dolor, non minus?</span>
                    </li>
                    <li className="list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quia error tempora quisquam deserunt
                            est officia nihil reprehenderit totam numquam. Rem, accusamus eius blanditiis neque pariatur quam? Dolor, non minus?</span>
                    </li>
                    <li className="list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quia error tempora quisquam deserunt
                            est officia nihil reprehenderit totam numquam. Rem, accusamus eius blanditiis neque pariatur quam? Dolor, non minus?</span>
                    </li>
                    <li className="list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quia error tempora quisquam deserunt
                            est officia nihil reprehenderit totam numquam. Rem, accusamus eius blanditiis neque pariatur quam? Dolor, non minus?</span>
                    </li>
                </div>
                <div className="nav col-start-2 col-end-4 row-start-3 py-2 justify-self-end mx-3">
                    <Link to='../'>
                        <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">На главную</button>
                    </Link>
                    <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded" onClick={goBack}> Назад </button>
                </div>
            </div>
        </>
    );
}

export default PartPostList;