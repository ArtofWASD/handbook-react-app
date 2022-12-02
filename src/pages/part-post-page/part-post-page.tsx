import { motion } from "framer-motion";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getCurrentPost } from "../../services/reducers/dataSlice";
import Button from "../../ui/button/button";
import { useAppSelector, useAppDispatch } from "../../utils/hooks";

// Страница с статьей
const PartPostPage = () => {
  const { postName } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dispatch = useAppDispatch();
  const isUserLogin = useAppSelector((state) => state.user.isLogin);
  const post = useAppSelector((state: any) => state.data.currentPost);
  const isPostLoad = useAppSelector(
    (state: any) => state.data.isCurrentPostLoad,
  );

  useEffect(() => {
    dispatch(getCurrentPost(postName));
  }, [postName]);

  return (
    <>
      {post !== null && isPostLoad === "Success" ? (
        <>
          <div className="grid parts_post_page xl:px-72 lg:px-20 py-4 px-4">
            {isUserLogin ? (
              <div className="flex justify-self-end py-4">
                <Button title="Редактировать" className="w-40" />
              </div>
            ) : (
              <></>
            )}
            {post.map((item: any) => (
              <div
                className="post__item border-2 rounded-xl py bg-slate-100"
                key={item.id}
              >
                <div className="post__title text-xl font-semibold text-slate-500 p-2">
                  {item.title}
                </div>
                <div className="post__img flex justify-center">
                  <img src={item.imgUrl} alt={item.imgUrl} />
                </div>
                <div
                  className="post__text p-2"
                  dangerouslySetInnerHTML={{ __html: `${item.text}` }}
                ></div>
              </div>
            ))}
            <div className="nav grid justify-end justify-items-center row-start-3 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
              <Link to="../">
                <Button title="На главную" className="w-32 md:w-48" />
              </Link>
              <Button
                title="Назад"
                onClickHandler={goBack}
                className="w-32 md:w-48"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="grid m-auto w-72 h-72">
          <motion.img
            src={"../../../public/loading_icon.png"}
            alt=""
            className="w-14 m-auto"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: 360,
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      )}
    </>
  );
};

export default PartPostPage;
