/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O1_CreateBrowserRouter = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULDecimal>
        <Li>
          create <SpanYellow>pages</SpanYellow> folder
        </Li>
        <Li>
          create <SpanYellow>components</SpanYellow> folder
        </Li>
        <Li>
          Create 4 pages (For the example) inside pages folder{" "}
          <ULdisc>
            <Li>
              <Redtext>Home</Redtext>
            </Li>
            <Li>
              <Redtext>About</Redtext>
            </Li>
            <Li>
              <Redtext>Products</Redtext>
            </Li>
            <Li>
              <Redtext>Error</Redtext>
            </Li>
          </ULdisc>
        </Li>
        <Li>
          Create <SpanYellow>Navbar</SpanYellow> component, these are the tabs that will be shown on the navbar
          <JsxHighlight jsxCode={navbar}></JsxHighlight>
        </Li>
        <Li>
          Create <SpanYellow>MainLayout</SpanYellow> component, will be the main page , that will display the
          <ULdisc>
            <Li>
              ➡️ The <Redtext>Navbar</Redtext>
            </Li>
            <Li>
              ➡️ The <Redtext>Outlet</Redtext> - (from react router) , will display the related component that related to{" "}
              <Redtext>NavLink , Link</Redtext> on the nav tab (Home, Products, About).
            </Li>
          </ULdisc>
          <JsxHighlight jsxCode={main_layout}></JsxHighlight>
        </Li>
        <Li>
          in <SpanYellow>App.tsx</SpanYellow> , now I config the router
          <ULdisc>
            <Li>
              create an instanbce <Redtext>createBrowserRouter</Redtext>
            </Li>
            <Li>in its parenthesis, create an array</Li>
            <Li>
              In the array create as described in the code , the <SpanYellow>MainLayout</SpanYellow> and <SpanYellow>children</SpanYellow> of
              <SpanYellow>MainLayout</SpanYellow>
            </Li>
            <Li>➡️ I define Home page to be the page with url of root path (set as index: true)</Li>
          </ULdisc>
        </Li>
        <Li>
          How it works
          <ULdisc>
            <Li>
              Let's look in the <Redtext>CreateBrowserRouter</Redtext>
            </Li>
            <Li>
              we can see the in <Redtext>CreateBrowserRouter</Redtext> that <SpanYellow>MainLayout</SpanYellow> element has
              <Redtext>Children</Redtext>
            </Li>
            <Li>
              So, Once I click on any link on the <SpanYellow>NavBar</SpanYellow> , the related url in <Redtext>CreateBrowserRouter</Redtext>{" "}
              <ULdisc>
                <Li>will redirect to that link</Li>
                <Li>The related Element will be assign to the page</Li>
                <Li>
                  as said above, <Redtext>Outlet</Redtext> is responsible to display the content of the related Element
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </Li>
        <JsxHighlight jsxCode={browser_router}></JsxHighlight>
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
       {/* Outlet will display a child Element according the Link on the nav */}
      <Outlet />
    </div>
  );
};

export default MainLayout;`;
