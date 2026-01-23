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
      {/* This Outlet contains : 
          Pages , like Spring_Page.tsx , ReactJS_page.tsx etc... */}
      {/* See Spring_page.tsx 
        Each page is divded as follows:
        1. Left side is the DropDown lost of each page
        2. Right side is the Page Content */}
      <Outlet />
    </section>
  );
};

export default MainLayout;
