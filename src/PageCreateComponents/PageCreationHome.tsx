import { Tree, TreeAppBrowserRouter } from "../Tree";

const PageCreationHome = () => {
  return (
    <section>
      <div className="my-2 text-3xl">Page Creation home ...</div>
      <TreeAppBrowserRouter />
      <Tree />
    </section>
  );
};

export default PageCreationHome;
