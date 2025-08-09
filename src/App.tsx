import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import {
  Batch_page,
  Cpp_page,
  DevOps_page,
  Error_page,
  FullStack_page,
  Git_page,
  Home_page,
  HTML_CSS_page,
  Java_page,
  JavaScript_page,
  Linux_page,
  MicroServices_page,
  Page_Creation_page,
  Postman_page,
  Python_page,
  ReactJS_page,
  Spring_page,
  Sql_page,
  Windows_page,
} from "./pages/index_Page";

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

import { CppHome, PointersMain, FundamentalConcepts, CppBasics, FunctionsMain } from "./pages/Cpp/CppComponents";

import { JsxMain, ReactBasics, ReactJSHome } from "./pages/ReactJS/ReactJSComponents";
import { JavaBasics, JavaHome, ArrayMain } from "./pages/Java/JavaComponents";
import { JavaScriptBasics, JavaScriptHome, JsArrayMain } from "./pages/JavaScript/JavaScriptComponents";
import { HtmlCssHome } from "./pages/HTML_CSS/HtmlCssComponents";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        { index: true, element: <Home_page /> },
        {
          path: "c++",
          element: <Cpp_page />,
          children: [
            { index: true, element: <CppHome /> },
            {
              path: "cpp-basics",
              element: <CppBasics />,
              children: [{ path: "functions", element: <FunctionsMain /> }],
            },
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
        {
          path: "reactJS",
          element: <ReactJS_page />,
          children: [
            { index: true, element: <ReactJSHome /> },
            { path: "basics", element: <ReactBasics />, children: [{ path: "jsx", element: <JsxMain /> }] },
          ],
        },
        {
          path: "javascript",
          element: <JavaScript_page />,
          children: [
            { index: true, element: <JavaScriptHome /> },
            { path: "basics", element: <JavaScriptBasics />, children: [{ path: "array", element: <JsArrayMain /> }] },
          ],
        },
        { path: "html_css", element: <HTML_CSS_page />, children: [{ index: true, element: <HtmlCssHome /> }] },
        { path: "fullstack", element: <FullStack_page /> },
        {
          path: "java",
          element: <Java_page />,
          children: [
            { index: true, element: <JavaHome /> },
            { path: "basics", element: <JavaBasics />, children: [{ path: "array", element: <ArrayMain /> }] },
          ],
        },
        { path: "sql", element: <Sql_page /> },
        { path: "python", element: <Python_page /> },
        { path: "devops", element: <DevOps_page /> },
        { path: "git", element: <Git_page /> },
        { path: "linux", element: <Linux_page /> },
        { path: "batch", element: <Batch_page /> },
        { path: "postman", element: <Postman_page /> },
        { path: "windows", element: <Windows_page /> },
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
