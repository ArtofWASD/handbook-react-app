import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import Header from "../header/header";
const Layout = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
