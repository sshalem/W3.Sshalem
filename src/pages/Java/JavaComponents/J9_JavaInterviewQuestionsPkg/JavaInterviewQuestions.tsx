/*


*/
import { Outlet, useLocation } from "react-router-dom";

const JavaInterviewQuestions = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/java-interview-questions" ? <div className="text-3xl">Java Interview Questions ...</div> : <Outlet />}
    </section>
  );
};
export default JavaInterviewQuestions;
