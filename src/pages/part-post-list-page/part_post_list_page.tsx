import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../../ui/button/button";
import PartsPostsPreview from "../../components/parts-posts-preview/parts-posts-preview";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useEffect } from "react";
import {
  clearGroupPostsArray,
  getGroupPosts,
} from "../../services/reducers/dataSlice";
import { motion } from "framer-motion";

// Список статей внутри группы запчастей
const PartPostList = () => {
  const { childName, partName, name } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const dispatch = useAppDispatch();
  const isUserLogin = useAppSelector((state) => state.user.isLogin);
  const postsGroupData = useAppSelector(
    (state) => state.data.groupPosts,
  );
  const isPostsGroupLoad = useAppSelector(
    (state) => state.data.isGroupPostLoad,
  );

  useEffect(() => {
    if (childName && partName) {
      const query = `${childName} ` + `${partName}`;
      dispatch(clearGroupPostsArray());
      dispatch(getGroupPosts(query));
    }
  }, [childName, partName]);

  return (
    <div className="parts_posts_list_page grid justify-center grid-rows-[auto_auto_auto_auto] xl:px-72 lg:px-20">
      {isUserLogin ? (
        <div className="flex justify-self-end py-4">
          <Button title="Редактировать" className="w-40" />
        </div>
      ) : (
        <></>
      )}
      <div className="part-posts px-2">
        <div className="part-posts__list border-2 rounded-xl col-start-1 col-end-4 row-start-3">
          {postsGroupData !== null && postsGroupData.length >= 1 ? (
            postsGroupData?.map((item) => (
              <PartsPostsPreview
                data={item}
                route={`/${name}/${childName}/${partName}/${item.title}`}
                key={item.id}
              />
            ))
          ) : (
            <>
              {isPostsGroupLoad === "Loading" ? (
                <motion.div
                  className="text-center p-20"
                  animate={{
                    scale: [1, 2, 2, 1, 1]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                >
                  Загрузка
                </motion.div>
              ) : (
                <div className="my-auto text-2xl font-semibold text-slate-500 text-center p-5">
                  К сожалению постов в этом разделе нет.
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="nav grid justify-end justify-items-center row-start-4 lg:grid-cols-[auto_auto] md:grid-cols-[40%_40%] grid-cols-2 py-4 gap-2">
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
  );
};
export default PartPostList;
