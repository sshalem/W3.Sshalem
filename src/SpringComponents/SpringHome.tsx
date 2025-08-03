import { Tree } from "../components";
import TreeAppBrowserRouter from "../components/TreeAppBrowserRouter";

const SpringHome = () => {
  return (
    <section>
      <div className="my-2 text-3xl">Spring home ...</div>
      <TreeAppBrowserRouter />
      <Tree />
    </section>
  );
};

export default SpringHome;
