const Footer = () => {
  const year = new Date()
  return (
    <footer className="footer grid bg-blue-600 h-20  mt-4 items-center row-start-4">
      <p className="grid align-item-end footer__title items-end text-center text-slate-300 text-xs">
        Designed by Chunlee {year.getFullYear()}
      </p>
    </footer>
  );
};

export { Footer };
