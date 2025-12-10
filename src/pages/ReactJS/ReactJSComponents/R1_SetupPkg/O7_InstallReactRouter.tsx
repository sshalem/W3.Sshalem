/*


*/
import { Anchor, IMG, MainChildArea } from "../../../../components";
import { BatchHighlight, JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";
import setup_router_1 from "../../../../assets/setup_router_1.jpg";

const O7_InstallReactRouter = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          go to <Anchor description="https://reactrouter.com/home" href="https://reactrouter.com/home"></Anchor>
        </li>
        <li className="my-1">
          Make sure to select <SpanGreen>V6.XX.0</SpanGreen> (V6.29.0 is the latest version I used in Ecommerce Project)
          <IMG img_name={setup_router_1}></IMG>
        </li>
        <li className="my-1">
          to Install react router v6 type the following command. If I don't add the digit 6 at the end of the command , <br />
          It will install the latest version (See documnetation)
          <BatchHighlight batchCode={router_install}></BatchHighlight>
          To uninstall use command
          <BatchHighlight batchCode={router_uninstall}></BatchHighlight>
        </li>
        <li className="my-1">create pages folder</li>
        <li className="my-1">create components folder</li>
        <li className="my-1">
          Create 4 pages (For the example) inside pages folder <SpanGreen>Home</SpanGreen> <SpanGreen>About</SpanGreen>{" "}
          <SpanGreen>Products</SpanGreen> <SpanGreen>Error</SpanGreen>
        </li>
        <li className="my-1">
          Create <SpanGreen>MainLayout</SpanGreen> in components folder
        </li>
        <li className="my-1">
          Create <SpanGreen>Navbar</SpanGreen> component, these are the tabs that will be shown on the navbar
          <JsxHighlight jsxCode={navbar}></JsxHighlight>
        </li>
        <li className="my-1">
          MainLayout will be the main page , that will display the <br /> <br />
          ➡️ The <SpanBlue>Navbar</SpanBlue> <br />
          ➡️ The content of each page using the <SpanBlue>Outlet</SpanBlue> component from react router, that related to the nav tab (Home, Products,
          About). <br />
          <JsxHighlight jsxCode={main_layout}></JsxHighlight>
        </li>
        <li className="my-1">
          in <SpanRed>App.tsx</SpanRed> , now I config the router .
          <br /> <br />
          ➡️ I define Home page to be the page with url of root path (set as index: true) <br />
          <JsxHighlight jsxCode={browser_router}></JsxHighlight>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O7_InstallReactRouter;

const router_install = `npm install react-router-dom@6`;
const router_uninstall = `npm uninstall react-router-dom@6`;

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
