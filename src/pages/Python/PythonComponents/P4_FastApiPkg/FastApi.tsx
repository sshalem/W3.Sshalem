/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Li, Subject, ULdisc } from "../../../../components";

const FastApi = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/python/fastapi" ? (
        <Subject title="Fast API ...">
          {
            <article className="my-8">
              <div>Fast API docs/youtube</div>
              <ULdisc>
                <Li>
                  <a href="https://fastapi.tiangolo.com/" target="_blank" className="tracking-wider text-blue-600">
                    https://fastapi.tiangolo.com/ - docs
                  </a>
                </Li>
                <Li>
                  <a href="https://www.youtube.com/watch?v=Lu8lXXlstvM" target="_blank" className="tracking-wider text-blue-600">
                    https://www.youtube.com/watch?v=Lu8lXXlstvM - Navin Reddy
                  </a>
                </Li>
                <Li>
                  <a href="https://www.youtube.com/watch?v=-ykeT6kk4bk" target="_blank" className="tracking-wider text-blue-600">
                    https://www.youtube.com/watch?v=-ykeT6kk4bk - Tech With Tim
                  </a>
                </Li>
                <Li>
                  <a href="https://www.youtube.com/watch?v=H9Blu0kWdZE" target="_blank" className="tracking-wider text-blue-600">
                    https://www.youtube.com/watch?v=H9Blu0kWdZE - Eric Roby
                  </a>
                </Li>
              </ULdisc>
            </article>
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
export default FastApi;
