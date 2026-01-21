/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const InterviewQuestions = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/interview-questions" ? (
        <Subject title="Interview Questions ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default InterviewQuestions;
