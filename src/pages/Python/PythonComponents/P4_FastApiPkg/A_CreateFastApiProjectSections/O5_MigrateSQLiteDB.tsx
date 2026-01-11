/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O5_MigrateSQLiteDB = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Run Django Project for first time</div>
        In previous section , when we run the project for first time
        <ULDecimal>
          <Li>
            it create a default <SpanGrey>SQLite database</SpanGrey> in the file <SpanGrey>db.sqlite3</SpanGrey> that is intended for development
            purposes
          </Li>
          <Li>
            we also can see that we need to apply migrations, so run command <SpanGrey>python manage.py migrate</SpanGrey> (See prev section)
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O5_MigrateSQLiteDB;

const _1_ = `python manage.py migrate`;
