/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Li, Subject, ULdisc } from "../../../../components";
import { JsxHighlight, Redtext, SpanYellow } from "../../../../components/Highlight";

const Router = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/router" ? (
        <Subject title="React-Router-Dom...">
          {
            <section>
              <p className="text-2xl">
                👍 The actors involved in <SpanYellow>React Router 6.4</SpanYellow> and above (v7 is different story)
              </p>
              <ULdisc>
                <Li>
                  <Redtext>createBrowserRouter</Redtext> → ✅ New way , modern routing API
                </Li>
                <Li>
                  <Redtext>RouterProvider</Redtext> → ✅ replaces {"<BrowserRouter>"}
                </Li>
                <Li>
                  <Redtext>children</Redtext> → ✅ Nested routes with
                </Li>
                <Li>
                  <Redtext>Outlet</Redtext> → ✅ renders child routes , replaced with the matched route’s component
                </Li>
                <Li>
                  index: true → ✅ replaces path: <Redtext>"/"</Redtext> for default child
                </Li>
                <Li>
                  <Redtext>{"<Link>"}</Redtext> → changes the browser URL
                </Li>
              </ULdisc>
              <hr />

              <article className="my-8">
                <p className="my-4 text-2xl">⭐ createBrowserRouter</p>
                <ULdisc>
                  <Li>
                    <Redtext>createBrowserRouter</Redtext> → ✅ New way , modern routing API
                  </Li>
                  <Li>
                    Use
                    <Redtext>{"<RouterProvider/>"}</Redtext>
                  </Li>
                  <Li>
                    Enables advanced features like:
                    <ULdisc>
                      <Li>
                        loaders (<Redtext>data fetching</Redtext> )
                      </Li>
                      <Li>
                        actions (<Redtext>forms</Redtext> )
                      </Li>
                      <Li>error handling</Li>
                    </ULdisc>
                  </Li>
                </ULdisc>
                <JsxHighlight jsxCode={_1_} />
              </article>

              <hr />

              <hr />
            </section>
          }
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default Router;

const _1_ = `import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
      </nav>
      {/* Outlet will display a child Element according the Link on the nav */}
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <h1>Home</h1> },
      { path: "about", element: <h1>About</h1> },
    ],
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  );
}

export default App;`;
