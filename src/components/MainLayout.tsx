import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import TopNavbar from "./home/TopNavbar";

const MainLayout = () => {
  return (
    <section>
      {/* <div className="h-[6rem]"></div> */}
      {/* By adding z-50 , when I scroll all elemets will be behind MainLayoutTitle & Navbar  */}
      <article className="sticky top-0 z-50 h-[89px] bg-white">
        <TopNavbar />
        <Navbar />
      </article>
      {/* This Outlet have the Pages In it like Spring_Page.tsx , ReactJS_page.tsx etc... */}
      <Outlet />
    </section>
  );
};

export default MainLayout;
