import { Outlet } from "react-router-dom";
import { MainLayoutTitle, Navbar } from "../components";

const MainLayout = () => {
  return (
    <section>
      <article className="sticky top-0 bg-white">
        <MainLayoutTitle />
        <Navbar />
      </article>
      <Outlet />
    </section>
  );
};

export default MainLayout;
