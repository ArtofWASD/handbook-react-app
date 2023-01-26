import { NavLink, useLocation } from "react-router-dom";
// Хлебные крошки, старый вариант под работу роутера до 6.4 версии
const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <div className="flex justify-self-center text-sm font-semibold text-black-500 py-2">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <div key={name}>/{decodeURI(name)}</div>
        ) : (
          <NavLink key={name} to={routeTo}>
            /{decodeURI(name)}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Breadcrumbs;
