import { useParams, Link, useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';
const PartPostList = () => {
    const { childId, id, partId } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    // Получаем объект с модельным рядом машин 
    const getCarsArr = Data.find(item => item.id == id);
    // получаем обект содержаший конкретную машину
    const getChildCarsArray = getCarsArr.childCars.find(item => item.id == childId);
    //получаем объект группы запчастей содержаший в себе посты 
    const getPostList = getChildCarsArray.parts.find((item => item.id == partId));
    // помещаем в переменную объет содержашие посты
    const postList = getPostList.posts
    // Рендерим посты по условию, если в массиве что то есть то используем данный элемент
    
    function RenderPost() {
        return (
            postList.map(postListItem => (
                <li className="post__item list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100" key={postListItem.id}>
                    <div className="text-2xl font-semibold text-slate-500 py-2">
                        {postListItem.title}
                    </div>
                    <div>
                        {postListItem.text.substring(0, 200) + "..."}
                    </div>
                    <div className="post__link text-center">
                        <Link key={getCarsArr.id} to={`/carslist/${id}/carspartslist/${getChildCarsArray.id}/partlist/${getPostList.id}/post/${postListItem.id}`}></Link>
                    </div>
                </li>
            ))
        )
    }
    function PostNotsFound() {
        return (
            <div className="">
                <p className='text-center text-2xl font-semibold text-slate-500 py-6'>К сожалению в данном разделе статей пока что нет!</p>
            </div>
        )
    }
    return (
        <div className="grid grid-rows-[auto_auto_auto] xl:px-72 lg:px-20">
            <div className="part-posts__title">
                <p className="text-center text-4xl font-semibold text-slate-500 py-2">Список статей</p>
            </div>
            <div className="part-posts grid">
                <div className="part-posts__list border-2 rounded col-start-1 col-end-4 row-start-2">
                    {postList.length > 1 ? <RenderPost /> : <PostNotsFound />}
                </div>
            </div>
            <div className="nav grid justify-end justify-items-center row-start-3 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
                <Link to='../'>
                    <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded">На главную</button>
                </Link>
                <button className="w-40 bg-blue-500 hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-1 border hover:border-blue-500 rounded" onClick={goBack}> Назад </button>
            </div>
        </div>
    );
}
export default PartPostList;