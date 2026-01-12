/*


*/
import { Outlet, useLocation } from "react-router-dom";

const Caching = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/spring/caching" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Caching ...</div>
          <article className="my-8">
            <div>Docs/Youtube</div>
            {/* <ULdisc>
              <Li>
                <a href="https://" target="_blank" className="tracking-wider text-blue-600">
                  https://
                </a>
              </Li>
            </ULdisc> */}
          </article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default Caching;
