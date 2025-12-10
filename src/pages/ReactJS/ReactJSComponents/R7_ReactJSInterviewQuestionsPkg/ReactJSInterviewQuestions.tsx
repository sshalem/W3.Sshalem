/*


*/

import { Outlet, useLocation } from "react-router-dom";

const ReactJSInterviewQuestions = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/reactJS/reactjs-interview-questions" ? (
        <div className="text-3xl">ReactJS Interview Questions Main ...</div>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default ReactJSInterviewQuestions;
