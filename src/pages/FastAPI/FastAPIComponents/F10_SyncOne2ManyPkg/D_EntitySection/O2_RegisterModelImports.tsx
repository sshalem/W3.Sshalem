/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O2_RegisterModelImports = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Register EModel Classes in main.py</div>
        <div></div>
        <ULdisc>
          <Li>In order for tables to be created in Postgresql Databse , we must register them.</Li>
          <Li>Otherwise , I won't see them in Database</Li>
          <Li>
            What Does it mean to <SpanEmerald>register them</SpanEmerald>?
            <ULdisc>
              <Li>It means to import a Model class anywhere in the project</Li>
              <Li>
                Then in <SpanEmerald>app/main.py</SpanEmerald> where the instance of <SpanEmerald>FastApi</SpanEmerald> present , it must be binded to
                Database
              </Li>
              <Li>
                It is sufficient for the <SpanEmerald>Customer model's</SpanEmerald> Python module to be imported anywhere in the application before
                <SpanYellow>Base.metadata.create_all()</SpanYellow> executes.
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>

        <div className="text-lg font-semibold">Best practice:</div>
        <ULdisc>
          <Li>In FastAPI project, I recommend explicitly importing all SQLAlchemy models in one central location before database initialization.</Li>
          <Li>Register can be doen , by import any model at any file, but , I prefer to centrlize it</Li>
        </ULdisc>

        <div className="text-lg font-semibold">Thus :</div>
        <ULdisc>
          <Li>Centralize imports (my preference)</Li>
          <Li>
            Go to <SpanEmerald>app/models/__init__.py</SpanEmerald>
          </Li>
          <Li>
            Add this line
            <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
          </Li>
          <Li>
            Go to <SpanEmerald>app/main.py</SpanEmerald>
          </Li>
          <Li>
            add this
            <Highlight_PYTHON code={_2_}></Highlight_PYTHON> before this command
            <Highlight_PYTHON code={_3_}></Highlight_PYTHON>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_RegisterModelImports;

const _1_ = `from app.models.customer import Customer`;

const _2_ = `# Both model classes register their tables in Base.metadata.
from app.models import Customer, Order`;

const _3_ = `# Create all registered tables (In Database) (temporary - until we introduce Alembic)
Base.metadata.create_all(bind=engine)
`;
