import ContentTitle from "../../../ContentAnchor";

const DBeaverMySqlOnLinode = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor}>
      <ContentTitle anchor={anchor} />
    </article>
  );
};

export default DBeaverMySqlOnLinode;
