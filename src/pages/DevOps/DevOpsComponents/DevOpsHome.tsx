import { Link } from "react-router-dom";
import { Subject } from "../../../components";

const DevOpsHome = () => {
  return (
    <Subject title="DevOps Home">
      <article>
        <ul className="my-4 ml-8 list-decimal text-xl">
          <li className="my-1 text-blue-600">
            <Link to={"/devops/react-on-spring"}>React Deply On Spring</Link>
          </li>
          <li className="my-1 text-blue-600">
            <Link to={"/devops/netlify"}>Netlify</Link>
          </li>
          <li className="my-1 text-blue-600">
            <Link to={"/devops/render"}>Render</Link>
          </li>
          <li className="my-1 text-blue-600">
            <Link to={"/devops/tomcat"}>tomcat</Link>
          </li>
          <li className="my-1 text-blue-600">
            <Link to={"/devops/linux-server"}>Linux Server</Link>
          </li>
        </ul>
      </article>
    </Subject>
  );
};

export default DevOpsHome;
