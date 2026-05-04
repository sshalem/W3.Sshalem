/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { JsxHighlight, SpanBlue, SpanGreen, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O1_CreateBrowserRouter = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>create pages folder</Li>
        <Li>create components folder</Li>
        <Li>
          Create 4 pages (For the example) inside pages folder <SpanGreen>Home</SpanGreen> <SpanGreen>About</SpanGreen>{" "}
          <SpanGreen>Products</SpanGreen> <SpanGreen>Error</SpanGreen>
        </Li>
        <Li>
          Create <SpanGreen>MainLayout</SpanGreen> in components folder
        </Li>
        <Li>
          Create <SpanGreen>Navbar</SpanGreen> component, these are the tabs that will be shown on the navbar
          <JsxHighlight jsxCode={navbar}></JsxHighlight>
        </Li>
        <Li>
          <SpanYellow>MainLayout</SpanYellow> will be the main page , that will display the <br /> <br />
          ➡️ The <SpanBlue>Navbar</SpanBlue> <br />
          ➡️ The content of each page using the <SpanBlue>Outlet</SpanBlue> component from react router, that related to the nav tab (Home, Products,
          About). <br />
          ➡️ In the <SpanYellow>CreateBrowserRouter</SpanYellow> The <SpanYellow>MainLayout</SpanYellow> element has <SpanYellow>Children</SpanYellow>
          <br />
          ➡️ In order to display the children we add the <SpanYellow>Outlet</SpanYellow>
          <br />
          <JsxHighlight jsxCode={main_layout}></JsxHighlight>
        </Li>
        <Li>
          in <SpanRed>App.tsx</SpanRed> , now I config the router .
          <br /> <br />
          ➡️ I define Home page to be the page with url of root path (set as index: true) <br />
          <JsxHighlight jsxCode={browser_router}></JsxHighlight>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O1_CreateBrowserRouter;

const navbar = `import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </>
  );
};

export default Navbar;`;

const browser_router = `import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout, Error, Landing, Products, About } from "./pages";

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

export default App;`;

const main_layout = `import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <h1>MainLayout</h1>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;`;
