import { useLocation } from "react-router-dom";
import ContentAnchor from "./ContentAnchor";
import { useEffect } from "react";

interface MainChildAreaProps {
  anchor: string;
  children?: React.ReactNode;
}

const MainChildArea = ({ anchor, children }: MainChildAreaProps) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  // Checks if url with hash is present
  // [1] remove '#' from hash
  // [2] find the element with assigned hash ,
  // "id" is found inside MainChildArea
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

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
