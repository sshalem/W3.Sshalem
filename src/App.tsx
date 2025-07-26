import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import { DevOps, Error, FullStack, Git, Home, HTML_CSS, Java, JavaScript, Python, ReactJS, Spring, SpringMicroServices, Sql } from "./pages";
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
} from "./SpringComponents";

import { ApplicationProperties, DBeaver, H2, MySql, Postgresql } from "./SpringComponents/ApplicationPropsPkg";
import { Jpa, One2ManyBiEager, One2ManyBiLazy } from "./SpringComponents/JpaPkg";
import { Logging } from "./SpringComponents/LoggingPkg";
import { LogUtil } from "./SpringComponents/LoggingPkg";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "spring",
          element: <Spring />,
          children: [
            { index: true, element: <SpringHome /> },
            {
              path: "application-properties",
              element: <ApplicationProperties />,
              children: [
                { path: "h2", element: <H2 /> },
                { path: "postgresql", element: <Postgresql /> },
                { path: "mysql", element: <MySql /> },
                { path: "dbeaver", element: <DBeaver /> },
              ],
            },
            {
              path: "logging",
              element: <Logging />,
              children: [
                // { path: "Slf4JLogback", element: <LoggingSlf4JLogback /> },
                // { path: "FileLocationLinuxServer", element: <One2ManyBiLazy /> },
                { path: "LogUtil", element: <LogUtil /> },
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
            { path: "logging", element: <Logging /> },
          ],
        },
        { path: "microservices", element: <SpringMicroServices /> },
        { path: "reactJS", element: <ReactJS /> },
        { path: "javascript", element: <JavaScript /> },
        { path: "html_css", element: <HTML_CSS /> },
        { path: "fullstack", element: <FullStack /> },
        { path: "java", element: <Java /> },
        { path: "sql", element: <Sql /> },
        { path: "python", element: <Python /> },
        { path: "devops", element: <DevOps /> },
        { path: "git", element: <Git /> },
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
