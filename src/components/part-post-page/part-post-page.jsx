import { useParams, Link, useNavigate } from "react-router-dom";
import { Data } from "../../utils/Data";
import Button from "../button/button.tsx";

const PartPostPage = () => {
  const { childId, id, partId, postId } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const post = Data.find((item) => item.id === String(id))
    .childCars.find((item) => item.id === String(childId))
    .parts.find((item) => item.id === String(partId))
    .posts.find((item) => item.id === String(postId));
  return (
    <div className="grid xl:px-72 lg:px-20 py-4 px-4">
      {post && (
        <div className="post__item border-2 rounded py bg-slate-100">
          <div className="post__title text-xl font-semibold text-slate-500 p-2">{post.title}</div>
          <div className="post__text p-2">{post.text}</div>
        </div>
      )}
      <div className="nav grid justify-end justify-items-center row-start-3 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
        <Link to="../">
          <Button title="На главную" />
        </Link>
        <Button title="Назад" onClickHandler={goBack} />
      </div>
    </div>
  );
};

export default PartPostPage;
