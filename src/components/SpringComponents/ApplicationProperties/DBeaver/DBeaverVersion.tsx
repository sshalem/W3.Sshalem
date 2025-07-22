import dbeaver_version from "../../../../assets/dbeaver_version.jpg";
import ContentTitle from "../../../ContentAnchor";

const DBeaverVersion = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor}>
      <ContentTitle anchor={anchor} />
      <div>
        While writing this tutorial on 21/07/2025 , the current version of &nbsp;
        <span className="rounded-md bg-emerald-500 px-1 py-1 text-white">DBeaver</span>
      </div>
      <div>
        <img src={dbeaver_version} alt="dbeaver_version" className="mx-10 my-10" />
      </div>
    </article>
  );
};

export default DBeaverVersion;
