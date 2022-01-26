import { useParams, Link, useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';
const PartPostList = () => {
    const { childId, id, postId } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const getCarsArr = Data.find(item => item.id == id);
    const getChildCarsArray = getCarsArr.childCars.find(item => item.id == childId);
    const getPostList = getChildCarsArray.parts.find((item => item.id == postId));
    const postList = getPostList.posts
    
    // Рендерим посты по условию, если в массиве что то есть то используем данный элемент
    function RenderPost() {
        return (
            postList.map(postListItem => (
                <li className="list-none border-2 hover:border-blue-500 p-2 m-2 bg-slate-100" key={postListItem.id}>
                    <div className="text-2xl font-semibold text-slate-500 py-2">
                        {postListItem.title}
                    </div>
                    <div>
                        {postListItem.text.substring(0, 150) + "..."}
                    </div>
                </li>
            ))
        )
    }
    function PostNotsFound() {
        return (
            <div className="container">
                <p className='text-center text-2xl font-semibold text-slate-500 py-4 px-48'>К сожалению в данном разделе статей пока что нет!</p>
            </div>
        )
    }
    return (
        <>
            <div className="part-posts px-48 grid justify-items-center grid-cols-3 grid-rows-[10%_auto_10%] ">
                <div className="part-posts__title col-start-1 col-end-4 self-center">
                    <p className="text-center text-4xl font-semibold text-slate-500 py-2">Список статей</p>
                </div>
                <div className="part-posts__list border-2 rounded col-start-1 col-end-4 row-start-2 mx-3 ">
                    {postList.length > 1 ? <RenderPost /> : <PostNotsFound />}
                </div>
                <div className="nav col-start-2  col-end-4 row-start-3 py-2 lg:justify-self-end sm:justify-self-center mx-3">
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