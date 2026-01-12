/*


*/
import { Outlet, useLocation } from "react-router-dom";

const JavaInterviewQuestions = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/java-interview-questions" ? (
        <section>
          <div className="bg-blue-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">Java Interview Questions ...</div>
          <article className="my-8">text</article>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};
export default JavaInterviewQuestions;
