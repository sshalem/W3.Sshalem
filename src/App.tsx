import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import {
  Batch,
  C_plus_plus_page,
  DevOps,
  Error,
  FullStack,
  Git,
  Home,
  HTML_CSS,
  Java,
  JavaScript,
  Linux,
  MicroServices_page,
  Page_Creation_page,
  Postman,
  Python,
  ReactJS,
  Spring_page,
  Sql,
  Windows,
} from "./pages";

import {
  Aop,
  Caching,
  ExceptionHandling,
  OpenAI,
  Rest,
  SpringDoc,
  SpringHome,
  SpringSecurity,
  Swagger,
  TransactionManagement,
} from "./pages/Spring/SpringComponents";

import {
  ApplicationProperties,
  DBeaverMain,
  DBInitMain,
  H2Main,
  MongoDBMain,
  MySqlMain,
  PostgresqlMain,
  ProfileMain,
} from "./pages/Spring/SpringComponents/ApplicationPropsPkg";
import { Jpa, One2ManyBiEager, One2ManyBiLazy } from "./pages/Spring/SpringComponents/JpaPkg";
import { Logging, LogFileMain, LogUtilMain, Slf4jLogbackMain, LoggingPropsMain } from "./pages/Spring/SpringComponents/LoggingPkg";
import { Eureka, MicroServiceHome } from "./pages/MicroServices/MicroServiceComponents";
import { EurekaDiscoveryMain, EurekaMain } from "./pages/MicroServices/MicroServiceComponents/EurekaPkg";

import {
  SpecificationDocument,
  CreateStepMain,
  PageCreationHome,
  AppTreeComponent,
  ComponentTreeComponent,
  WebPageComponent,
} from "./pages/PageCreate/PageCreateComponents";

import { CPlusPlusHome, FundamentalConcepts } from "./pages/CPlusPlus/CPlusPlusComponents";
import PointersMain from "./pages/CPlusPlus/CPlusPlusComponents/FundamentalConceptsPkg/PointersSections/PointersMain";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "c++",
          element: <C_plus_plus_page />,
          children: [
            { index: true, element: <CPlusPlusHome /> },
            {
              path: "fundamental-concepts",
              element: <FundamentalConcepts />,
              children: [{ path: "pointers", element: <PointersMain /> }],
            },
          ],
        },
        {
          path: "spring",
          element: <Spring_page />,
          children: [
            { index: true, element: <SpringHome /> },
            {
              path: "application-properties",
              element: <ApplicationProperties />,
              children: [
                { path: "h2", element: <H2Main /> },
                { path: "postgresql", element: <PostgresqlMain /> },
                { path: "mysql", element: <MySqlMain /> },
                { path: "mongodb", element: <MongoDBMain /> },
                { path: "dbeaver", element: <DBeaverMain /> },
                { path: "profiles", element: <ProfileMain /> },
                { path: "db-initialization", element: <DBInitMain /> },
              ],
            },
            {
              path: "logging",
              element: <Logging />,
              children: [
                { path: "LogUtil", element: <LogUtilMain /> },
                { path: "slf4j-logback", element: <Slf4jLogbackMain /> },
                { path: "log-file", element: <LogFileMain /> },
                { path: "logging-props", element: <LoggingPropsMain /> },
              ],
            },
            {
              path: "jpa",
              element: <Jpa />,
              children: [
                { path: "one2many-bi-eager", element: <One2ManyBiEager /> },
                { path: "one2many-bi-lazy", element: <One2ManyBiLazy /> },
              ],
            },
            {
              path: "rest",
              element: <Rest />,
              children: [
                { path: "one2many-bi-eager", element: <One2ManyBiEager /> },
                { path: "one2many-bi-lazy", element: <One2ManyBiLazy /> },
              ],
            },
            { path: "spring-doc", element: <SpringDoc /> },
            { path: "swagger", element: <Swagger /> },
            { path: "open-AI", element: <OpenAI /> },
            { path: "exception-handling", element: <ExceptionHandling /> },
            { path: "transaction-management", element: <TransactionManagement /> },
            { path: "caching", element: <Caching /> },
            { path: "aop", element: <Aop /> },
            { path: "spring-security", element: <SpringSecurity /> },
          ],
        },
        {
          path: "microservices",
          element: <MicroServices_page />,
          children: [
            { index: true, element: <MicroServiceHome /> },
            {
              path: "eureka",
              element: <Eureka />,
              children: [
                { path: "eureka-server", element: <EurekaMain /> },
                { path: "eureka-discovery", element: <EurekaDiscoveryMain /> },
              ],
            },
          ],
        },
        { path: "reactJS", element: <ReactJS /> },
        { path: "javascript", element: <JavaScript /> },
        { path: "html_css", element: <HTML_CSS /> },
        { path: "fullstack", element: <FullStack /> },
        { path: "java", element: <Java /> },
        { path: "sql", element: <Sql /> },
        { path: "python", element: <Python /> },
        { path: "devops", element: <DevOps /> },
        { path: "git", element: <Git /> },
        { path: "linux", element: <Linux /> },
        { path: "batch", element: <Batch /> },
        { path: "postman", element: <Postman /> },
        { path: "windows", element: <Windows /> },
        {
          path: "page_creation",
          element: <Page_Creation_page />,
          children: [
            { index: true, element: <PageCreationHome /> },
            {
              path: "specification-document",
              element: <SpecificationDocument />,
              children: [{ path: "create-steps", element: <CreateStepMain /> }],
            },
            { path: "app-tree", element: <AppTreeComponent /> },
            { path: "component-tree", element: <ComponentTreeComponent /> },
            { path: "web-page", element: <WebPageComponent /> },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  );
}

export default App;
