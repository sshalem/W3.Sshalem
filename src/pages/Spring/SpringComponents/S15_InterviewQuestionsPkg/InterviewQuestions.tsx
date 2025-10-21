import { Outlet, useLocation } from "react-router-dom";

const InterviewQuestions = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/interview-questions" ? <div className="text-3xl">Interview Questions page ...</div> : <Outlet />}
    </section>
  );
};
export default InterviewQuestions;
