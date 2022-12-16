import { year } from "../../utils/handlerFunctions";

const Footer = () => {
  return (
    <footer className="footer grid bg-blue-600 h-20 items-center row-start-4">
      <p className="grid align-item-end footer__title items-end text-center text-slate-300 text-xs">
        Designed by Chunl3e {year}
      </p>
    </footer>
  );
};

export { Footer };
