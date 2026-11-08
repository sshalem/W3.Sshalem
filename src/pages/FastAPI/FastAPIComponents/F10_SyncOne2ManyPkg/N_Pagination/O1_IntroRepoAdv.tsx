/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import Greentext from "../../../../../components/Highlight/Greentext";

const O1_IntroRepoAdv = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Pagination</div>
        <div>
          Let's implement Pagination in our existing FastAPI Customer Management project, following the same layered architecture we've been using:
        </div>
        <ULDecimal>
          <Li>Controller → Service → Repository → PostgreSQL</Li>
        </ULDecimal>
        We'll implement this properly, including:
        <ULDecimal>
          <Li>
            <Greentext>Controller</Greentext> : receive pagination parameters.
          </Li>
          <Li>
            <Greentext>Service</Greentext> : validate and calculate pagination.
          </Li>
          <Li>
            <Greentext>Repository</Greentext> : execute SQL using LIMIT and OFFSET.
          </Li>
          <Li>
            <Greentext>Response schema</Greentext> : return customers plus pagination metadata.
          </Li>
          <Li>
            <Greentext>PostgreSQL</Greentext> : understand the generated SQL.
          </Li>
        </ULDecimal>
        We'll also add a <Greentext>total count</Greentext> so the frontend can calculate the total number of pages.
      </section>
    </MainChildArea>
  );
};

export default O1_IntroRepoAdv;
