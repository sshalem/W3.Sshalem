/*
/spring/jpa/one2many-bi-lazy#7.CascadeTypeRefresh
CascadeType Refresh --> (SPRING)(JPA)(OneToMany (Bi Lazy))
*/
import { useLocation } from "react-router-dom";
import { Answer, MainChildArea, Question } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";
import { useEffect } from "react";

const O7_LazyCascadeRefresh = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  useEffect(() => {
    // console.log(hash);
    // Checks if url with hash is present
    if (hash) {
      // 1. remove '#' from hash
      // 2. find the element with assigned hash , for example
      // id="about",
      // id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      <Question>
        🔄 What <strong>REFRESH</strong> means
      </Question>
      <Answer>
        Normally, when you call , <strong>em.refresh(entity)</strong>
        <br />
        JPA reloads the entity from the database, <strong>discarding</strong> any in-memory changes (overwriting fields with values from DB).
        <br />
        <br />
        As we see in the code below , Spring Data JPA repositories don’t expose a <strong>refresh()</strong> method directly. <br /> Repositories are
        mainly for CRUD (save, find, delete, etc.), not lower-level EntityManager operations like refresh().
        <JavaHighlight javaCode={code}></JavaHighlight>
      </Answer>
    </MainChildArea>
  );
};

export default O7_LazyCascadeRefresh;

const code = `    @PersistenceContext
    private EntityManager em;

    em.refresh(entity);`;
