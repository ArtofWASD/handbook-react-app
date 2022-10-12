import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import Button from "../button/button";
import PartsPostsPreview from "../parts-posts-preview/parts-posts-preview";
import PartPostsNotFound from "../part-post-not-found/part-post-not-found";
const PartPostList = () => {
  const { childId, id, partId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const postsList = Data.find((item) => item.id === String(id))
    ?.childCars.find((item) => item.id === String(childId))
    ?.parts.find((item) => item.id === String(partId));
  return (
    <div className="grid grid-rows-[auto_auto_auto] xl:px-72 lg:px-20">
      <div className="part-posts__title">
        <p className="text-center text-4xl font-semibold text-slate-500 py-2">Список статей</p>
      </div>
      <div className="part-posts grid">
        <div className="part-posts__list border-2 rounded col-start-1 col-end-4 row-start-2">
          {postsList !== undefined && postsList.posts.length > 1 ? (
            postsList.posts.map((item) => <PartsPostsPreview data={item} route={`/${id}/${childId}/${partId}/${item.id}`} key={item.id} />)
          ) : (
            <PartPostsNotFound />
          )}
        </div>
      </div>
      <div className="nav grid justify-end justify-items-center row-start-3 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
        <Link to="../">
          <Button title="На главную" />
        </Link>
        <Button title="Назад" onClickHandler={goBack} />
      </div>
    </div>
  );
};
export default PartPostList;
