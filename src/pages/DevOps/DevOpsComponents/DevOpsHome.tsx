import { Link } from "react-router-dom";

const DevOpsHome = () => {
  return (
    <section>
      <div className="bg-teal-500 p-4 font-mono text-4xl font-semibold tracking-wider text-white">DevOps Home ...</div>
      <article>
        <ul className="my-4 ml-8 list-decimal text-xl">
          <li className="my-1 text-teal-600">
            <Link to={"/devops/react-on-spring"}>React Deply On Spring</Link>
          </li>
          <li className="my-1 text-teal-600">
            <Link to={"/devops/netlify"}>Netlify</Link>
          </li>
          <li className="my-1 text-teal-600">
            <Link to={"/devops/render"}>Render</Link>
          </li>
          <li className="my-1 text-teal-600">
            <Link to={"/devops/tomcat"}>tomcat</Link>
          </li>
          <li className="my-1 text-teal-600">
            <Link to={"/devops/linux-server"}>Linux Server</Link>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default DevOpsHome;
