import { ContentAnchor } from "../../../components";

const DBeaverMySqlOnLinode = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
    </article>
  );
};

export default DBeaverMySqlOnLinode;
