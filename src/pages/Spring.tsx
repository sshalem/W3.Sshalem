import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink, SideNavbar } from "../components";
import { DropDownApplicationProperties, DropDownJpa } from "../components/DropDown";

const Spring = () => {
  // const { openList, handleOpenList } = useAppContext();

  return (
    <GridLayout>
      <SideNavbar>
        <SideBarLink pageName="Spring Home" internalLink="." />
        <DropDownApplicationProperties />
        <DropDownJpa />

        <SideBarLink pageName="Rest" internalLink="rest" />
        <SideBarLink pageName="Spring Docs" internalLink="spring-doc" />
        <SideBarLink pageName="Swagger" internalLink="swagger" />
        <SideBarLink pageName="Open AI" internalLink="open-AI" />
        <SideBarLink pageName="Exception Handling" internalLink="exception-handling" />
        <SideBarLink pageName="Transaction Management" internalLink="transaction-management" />
        <SideBarLink pageName="Caching" internalLink="caching" />
        <SideBarLink pageName="Aop" internalLink="aop" />
        <SideBarLink pageName="SpringSecurity" internalLink="spring-security" />
        <SideBarLink pageName="Logging" internalLink="logging" />
        {/*  */}
        {/*  */}
      </SideNavbar>

      {/* I use here max-h-full (And not , 100vh or 100%), so the my SideNavbar won't scroll with the outlet content */}
      {/* there is another solution , to set the Sidebar as fixed  */}
      {/*  */}
      {/*  */}
      {/* <main className="mt-4 max-h-full"> */}
      <main className="ml-64 max-h-full w-[1150px] min-w-[330px] border-r-[1px] border-solid border-zinc-300 px-8 py-4 pt-1">
        {/* <main className="sticky ml-64 mt-[50px] max-h-[500px] w-[850px] min-w-[330px] overflow-auto border-r-[1px] border-solid border-zinc-300 px-8 py-4"> */}
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default Spring;

// {
/* <SideBarLink pageName="Rest" internalLink="rest" />
<SideBarLink pageName="Spring Docs" internalLink="spring-doc" />
<SideBarLink pageName="Swagger" internalLink="swagger" />
<SideBarLink pageName="Open AI" internalLink="open-AI" />
<SideBarLink pageName="Exception Handling" internalLink="exception-handling" />
<SideBarLink pageName="Transaction Management" internalLink="transaction-management" />
<SideBarLink pageName="Caching" internalLink="caching" />
<SideBarLink pageName="Aop" internalLink="aop" />
<SideBarLink pageName="SpringSecurity" internalLink="spring-security" />
<SideBarLink pageName="Logging" internalLink="logging" /> */
// }
