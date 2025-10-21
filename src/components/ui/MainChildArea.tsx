import ContentAnchor from "./ContentAnchor";

interface MainChildAreaProps {
  anchor: string;
  children?: React.ReactNode;
}

const MainChildArea = ({ anchor, children }: MainChildAreaProps) => {
  return (
    <section className="my-10 mb-28 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <article>{children}</article>
      <div className="mt-20">
        <hr />
      </div>
    </section>
  );
};

export default MainChildArea;
