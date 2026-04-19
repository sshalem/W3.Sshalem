/*


*/

import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const ReactJSInterviewQuestions = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/reactjs-interview-questions" ? (
        <Subject title="ReactJS Interview Questions  ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default ReactJSInterviewQuestions;
