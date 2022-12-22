import Button from "../../ui/button/button";
import { Link } from "react-router-dom";
import Breadcrumb from "../breadcrumbs/breadcrumbs";
const Header = () => {
  return (
    <header className="header grid">
      <div className="header__button grid justify-self-end px-4 py-2">
        <Link to="login">
          <Button title="Авторизация" className="w-48" />
        </Link>
      </div>
      <div className="header__title grid justify-self-center py-2">
        <p className="text-center text-xl md:text-2xl font-semibold text-slate-500 leading-tight">
          Справочник для самостоятельного обучения сотрудников компании.
        </p>
      </div>
      <div className="hidden md:flex justify-self-center">
        {location.pathname === "/" && location.pathname.includes('/post') ? null : <Breadcrumb />}
      </div>
    </header>
  );
};

export default Header;
