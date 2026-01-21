/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";

const JavaInterviewQuestions = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/java-interview-questions" ? (
        <Subject title="Java Interview Questions ...">{<div></div>}</Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default JavaInterviewQuestions;
