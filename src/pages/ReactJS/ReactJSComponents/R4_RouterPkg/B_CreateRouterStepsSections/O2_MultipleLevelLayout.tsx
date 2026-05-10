/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O2_MultipleLevelLayout = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          Here is example of multiple top-level layouts like <SpanYellow>/</SpanYellow> and <SpanYellow>/temp</SpanYellow>, each with their own nested
          routes.
        </Li>
        <Li>
          Then your URLs are:
          <ULdisc>
            <Li>
              <Redtext>/</Redtext> - <Redtext>Landing</Redtext>
            </Li>
            <Li>
              <Redtext>/products</Redtext> - <Redtext>Products</Redtext>
            </Li>
            <Li>
              <Redtext>/about</Redtext> - <Redtext>About</Redtext>
            </Li>
            <Li>
              <Redtext>/temp</Redtext> - <Redtext>TempLanding</Redtext>
            </Li>
            <Li>
              <Redtext>/temp/products</Redtext> - <Redtext>TempProducts</Redtext>
            </Li>
            <Li>
              <Redtext>/temp/about</Redtext> - <Redtext>TempAbout</Redtext>
            </Li>
          </ULdisc>
          <JsxHighlight jsxCode={_1_}></JsxHighlight>
        </Li>
        <Li>
          Inside both <Redtext>MainLayout</Redtext> and <Redtext>MainTemp</Redtext> we must use:
          <JsxHighlight jsxCode={_2_}></JsxHighlight>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O2_MultipleLevelLayout;

const _1_ = `import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, MainTemp, Error, Landing, Products, About, TempLanding, TempProducts, TempAbout } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Landing /> },
        { path: "products", element: <Products /> },
        { path: "about", element: <About /> },
      ],
    },

    {
      path: "/temp",
      element: <MainTemp />,
      errorElement: <Error />,
      children: [
        { index: true, element: <TempLanding /> },
        { path: "products", element: <TempProducts /> },
        { path: "about", element: <TempAbout /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

export default App;`;

const _2_ = `import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
}
  

import { Outlet } from "react-router-dom";

function MainTemp() {
  return (
    <div>
      <h1>Main Temp</h1>
      <Outlet />
    </div>
  );
}`;
