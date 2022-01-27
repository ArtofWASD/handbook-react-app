import { useParams, Link, useNavigate } from 'react-router-dom';
import { Data } from '../data/Data';

const PartPostPage = () => {
    const { childId, id, partId, postId } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="grid">
            <div className="text-center">
                {partId}{postId}
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

export default PartPostPage;