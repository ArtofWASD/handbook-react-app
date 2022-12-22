import Button from "../../ui/button/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header grid grid-cols-auto">
      <div className="header__button grid justify-self-end py-2 px-4">
        <Link to="login">
          <Button title="Авторизация" className="w-48" />
        </Link>
      </div>
      <div className="header__title grid justify-self-center py-2">
        <p className="text-center text-xl md:text-2xl font-semibold text-slate-500 px-1 leading-tight">
          Справочник по самостоятельному ремонту и замене запчастей
        </p>
      </div>
    </header>
  );
};

export default Header;
