/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanEmerald, SpanYellow } from "../../../../../components/Highlight";
import Greentext from "../../../../../components/Highlight/Greentext";

const O1_InitDB = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Init Database</div>
        Ways to initialize DB with Data
        <ULDecimal>
          <Li>
            <SpanEmerald>SQL script</SpanEmerald> - run SQL script inside Postgresql query tool To Initialize DB
          </Li>
          <Li>
            <SpanEmerald>FastAPI lifespan </SpanEmerald> describes a FastAPI startup mechanism. gives you a startup hook, and you decide what code to
            execute inside it.
            <ULdisc>
              <Li>
                <SpanYellow>Option 1</SpanYellow> : SQL initialization (similar to <Greentext>Spring Boot data.sql</Greentext> )
              </Li>
              <Li>
                <SpanYellow>Option 2</SpanYellow> Python initialization (similar to <Greentext>CommandLineRunner</Greentext> )
              </Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_InitDB;
