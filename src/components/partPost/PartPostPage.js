import { useParams, Link, useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';

const PartPostPage = () => {
    const { childId, id, partId, postId } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    // Получаем объект с модельным рядом машин 
    const getCarsArr = Data.find(item => item.id == id);
    // получаем обект содержаший конкретную машину
    const getChildCarsArray = getCarsArr.childCars.find(item => item.id == childId);
    //получаем объект группы запчастей содержаший в себе посты 
    const getPostList = getChildCarsArray.parts.find((item => item.id == partId));
    // помещаем в переменную объет содержашие посты
    const postList = getPostList.posts.find((item) => item.id == postId)

    return (
        <div className="grid xl:px-72 lg:px-20 py-4 px-4">
            {postList && (
                <div className="post__item border-2 rounded py bg-slate-100">
                    <div className="post__title text-xl font-semibold text-slate-500 p-2">
                        {postList.title}
                    </div>
                    <div className="post__text p-2">
                        {postList.text}
                    </div>
                </div>
            )}

            <div className="nav grid justify-end justify-items-center row-start-3 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
                <Link to='../'>
                    <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">На главную</button>
                </Link>
                <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded" onClick={goBack}> Назад </button>
            </div>
        </div>
    );
}

export default PartPostPage;