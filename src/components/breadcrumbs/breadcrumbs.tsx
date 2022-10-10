import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  console.log(breadcrumbs);

  return (
    <div className="flex justify-self-center text-md font-semibold text-slate-500 py-2">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <span key={match.pathname}>
          <NavLink to={decodeURI(match.pathname)}>/{breadcrumb}</NavLink>
        </span>
      ))}
    </div>
  );
};
export default Breadcrumbs;
