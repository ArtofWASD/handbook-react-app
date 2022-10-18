import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import Button from "../../ui/button/button";
import PartsPostsPreview from "../../components/parts-posts-preview/parts-posts-preview";
import PartPostsNotFound from "../../components/part-post-not-found/part-post-not-found";
import { useAppSelector } from "utils/hooks";
// Список статей внутри группы запчастей
const PartPostList = () => {
  const { childId, id, partId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const isUserLogin = useAppSelector((state) => state.user.isLogin);

  const postsList = Data.find((item) => item.id === String(id))
    ?.childCars.find((item) => item.id === String(childId))
    ?.parts.find((item) => item.id === String(partId));

  return (
    <div className="grid grid-rows-[auto_auto_auto_auto] xl:px-72 lg:px-20">
      <div className="part-posts__title">
        <p className="text-center text-4xl font-semibold text-slate-500 py-2">Список статей</p>
      </div>
      {isUserLogin ? (<div className="flex justify-self-end py-4"><Button title="Редактировать" className="w-40" /></div>):(<></>)}
      <div className="part-posts">
        <div className="part-posts__list border-2 rounded col-start-1 col-end-4 row-start-3">
          {postsList !== undefined && postsList.posts.length > 1 ? (
            postsList.posts.map((item) => <PartsPostsPreview data={item} route={`/${id}/${childId}/${partId}/${item.id}`} key={item.id} />)
          ) : (
            <PartPostsNotFound />
          )}
        </div>
      </div>
      <div className="nav grid justify-end justify-items-center row-start-4 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
        <Link to="../">
          <Button title="На главную" className="w-48"/>
        </Link>
        <Button title="Назад" onClickHandler={goBack} className="w-48"/>
      </div>
    </div>
  );
};
export default PartPostList;
