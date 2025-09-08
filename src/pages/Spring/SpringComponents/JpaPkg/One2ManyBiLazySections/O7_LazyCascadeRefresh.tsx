import { Answer, MainChildArea, Question } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O7_LazyCascadeRefresh = ({ anchor }: { anchor: string }) => {
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
