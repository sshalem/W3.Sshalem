import { ContentAnchor } from "../../../components";

const DBeaverMySqlOnLinode = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
    </article>
  );
};

export default DBeaverMySqlOnLinode;
