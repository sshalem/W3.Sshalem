/*


*/
import { Outlet, useLocation } from "react-router-dom";

const Jenkins = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/spring/jenkins" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Jenkins ...</div>
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

export default Jenkins;
