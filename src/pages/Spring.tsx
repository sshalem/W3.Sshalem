import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink, SideNavbar } from "../components";

const Spring = () => {
  return (
    <GridLayout>
      <SideNavbar>
        <SideBarLink pageName="Spring Home" internalLink="." />
        <SideBarLink pageName="Application properties" internalLink="application-properties" />
        <SideBarLink pageName="JPA" internalLink="jpa" />
        <SideBarLink pageName="Rest" internalLink="rest" />
        <SideBarLink pageName="Spring Docs" internalLink="spring-doc" />
        <SideBarLink pageName="Swagger" internalLink="swagger" />
        <SideBarLink pageName="Open AI" internalLink="open-AI" />
        <SideBarLink pageName="Exception Handling" internalLink="exception-handling" />
        <SideBarLink pageName="Transaction Management" internalLink="transaction-management" />
        <SideBarLink pageName="Caching" internalLink="caching" />
        <SideBarLink pageName="Aop" internalLink="aop" />
        <SideBarLink pageName="SpringSecurity" internalLink="spring-security" />
      </SideNavbar>
      <article className="h-screen border-2 border-green-400">
        <Outlet />
      </article>
    </GridLayout>
  );
};

export default Spring;
