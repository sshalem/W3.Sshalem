import { Outlet } from "react-router-dom";
import { GridLayout, SideBarLink, SideDropdownLink, SideNavbar } from "../components";
import { useState } from "react";

const Spring = () => {
  const [openList, setOpenList] = useState<boolean>(false);

  const handleOpenList = () => {
    setOpenList(!openList);
  };

  return (
    <GridLayout>
      <SideNavbar>
        <button className="" onClick={handleOpenList}>
          Application properties
        </button>
        <SideBarLink pageName="Application properties" internalLink="application-properties" />
        {openList && (
          <>
            <SideDropdownLink pageName="H2" internalLink="application-properties/h2" />
            <SideDropdownLink pageName="MySql" internalLink="application-properties/mysql" />
            <SideDropdownLink pageName="Postgresql" internalLink="application-properties/postgresql" />
          </>
        )}

        {/*  */}
        {/*  */}
        <SideBarLink pageName="Spring Home" internalLink="." />
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
        <SideBarLink pageName="Logging" internalLink="logging" />
      </SideNavbar>
      <article className="mt-4 h-screen">
        <Outlet />
      </article>
    </GridLayout>
  );
};

export default Spring;
