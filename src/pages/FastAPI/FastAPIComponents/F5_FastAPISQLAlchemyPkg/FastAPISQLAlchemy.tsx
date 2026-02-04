/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Li, Subject, ULdisc } from "../../../../components";

const FastAPISQLAlchemy = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/sqlalchemy" ? (
        <Subject title="FastAPI SQLAlchemy ...">
          {
            <section className="my-8">
              <ULdisc>
                <Li>
                  <article>
                    SQLAlchemy with navin reddy{" "}
                    <a className="tracking-wider text-blue-500" href="https://www.youtube.com/watch?v=Lu8lXXlstvM&t=5398s">
                      https://www.youtube.com/watch?v=Lu8lXXlstvM&t=5398s
                    </a>
                  </article>
                </Li>
              </ULdisc>
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
export default FastAPISQLAlchemy;
