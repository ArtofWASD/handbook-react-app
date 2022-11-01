import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../../ui/button/button";
import { useAppSelector } from "utils/hooks";

// Страница с статьей
const PartPostPage = () => {
  const { childId, id, partId, postId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const isUserLogin = useAppSelector((state) => state.user.isLogin);
  const carsData = useAppSelector((state) => state.data.data.Cars);

  const post = carsData
    .find((item: { id: string }) => item.id === String(id))
    ?.childCars.find((item: { id: string }) => item.id === String(childId))
    ?.parts.find((item: { id: string }) => item.id === String(partId))
    ?.posts.find((item: { id: string }) => item.id === String(postId));

  return (
    <div className="grid parts_post_page xl:px-72 lg:px-20 py-4 px-4">
      {isUserLogin ? (
        <div className="flex justify-self-end py-4">
          <Button title="Редактировать" className="w-40" />
        </div>
      ) : (
        <></>
      )}
      {post && (
        <div className="post__item border-2 rounded-xl py bg-slate-100">
          <div className="post__title text-xl font-semibold text-slate-500 p-2">
            {post.title}
          </div>
          <div className="post__img flex justify-center">
            <img src={post.imgUrl} alt={post.imgUrl} />
          </div>

          <div
            className="post__text p-2"
            dangerouslySetInnerHTML={{ __html: `${post.text}` }}
          ></div>
        </div>
      )}
      <div className="nav grid justify-end justify-items-center row-start-3 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
        <Link to="../">
          <Button title="На главную" className="w-32 md:w-48" />
        </Link>
        <Button title="Назад" onClickHandler={goBack} className="w-32 md:w-48" />
      </div>
    </div>
  );
};

export default PartPostPage;
