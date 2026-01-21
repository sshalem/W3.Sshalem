/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Li, Subject, ULdisc } from "../../../../components";
import { JsxHighlight, SpanGrey } from "../../../../components/Highlight";

const Router = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/router" ? (
        <Subject title="React-Router-Dom...">
          {
            <section>
              The 3 actors involved
              <ULdisc>
                <Li>
                  <SpanGrey>{"<Link>"}</SpanGrey> → changes the browser URL
                </Li>
                <Li>
                  <strong>Browser History API</strong> → notifies React Router
                </Li>
                <Li>
                  <SpanGrey>{"<Routes> + <Route>"}</SpanGrey> → picks which component to render
                </Li>
                <Li>
                  <SpanGrey>{"<Outlet />"}</SpanGrey> is replaced with the matched route’s component
                </Li>
              </ULdisc>
              <hr />
              <article className="my-8">
                <div className="my-4">
                  1️⃣ What <SpanGrey>{"<Link>"}</SpanGrey> actually does
                </div>
                <JsxHighlight jsxCode={_1_} />
                When you click it:
                <ULdisc>
                  <Li>❌ No page reload</Li>
                  <Li>❌ No fetch from server</Li>
                  <Li>
                    ✅ Calls <SpanGrey>history.pushState("/users")</SpanGrey>
                  </Li>
                  <Li>So the browser URL becomes:</Li>
                  <JsxHighlight jsxCode={_2_} />
                </ULdisc>
              </article>
              <hr />
              <article className="my-8">
                <div className="my-4">2️⃣ React Router listens to URL changes</div>
                At the top of your app you have:
                <JsxHighlight jsxCode={_3_} />
                BrowserRouter:
                <ULdisc>
                  <Li>Subscribes to the browser history</Li>
                  <Li>Re-renders when the URL changes</Li>
                </ULdisc>
              </article>
              <hr />
              <article className="my-8">
                <div className="my-4">3️⃣ Routes decide what to render</div>
                <JsxHighlight jsxCode={_4_} />
                React Router:
                <ULdisc>
                  <Li>Reads the current URL</Li>
                  <Li>Matches it against path</Li>
                  <Li>Renders the matching element</Li>
                </ULdisc>
              </article>
              <hr />
              <article className="my-8">
                <div className="my-4">4️⃣ Navbar stays — content changes</div>
                Typical layout:
                <JsxHighlight jsxCode={_5_} />
                Routes:
                <JsxHighlight jsxCode={_6_} />
                What happens:
                <ULdisc>
                  <Li>Navbar is always rendered</Li>
                  <Li>
                    <SpanGrey>{"<Outlet />"}</SpanGrey> is replaced with the matched route’s component
                  </Li>
                </ULdisc>
              </article>
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

const _1_ = `<Link to="/users">Users</Link>`;

const _2_ = `http://localhost:5173/users`;

const _3_ = `<BrowserRouter>
  <App />
</BrowserRouter>
`;

const _4_ = `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Users />} />
</Routes>
`;

const _5_ = `function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
`;

const _6_ = `<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
  </Route>
</Routes>
`;
