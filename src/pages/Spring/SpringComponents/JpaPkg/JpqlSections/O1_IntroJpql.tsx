import { MainChildArea } from "../../../../../components";
import { SpanBlue, SpanRed, SpanTeal } from "../../../../../components/Highlight";
import TableCompareJPQL from "../../../../../components/Tables/TableCompareJPQL";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroJpql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <SpanBlue>JPQL</SpanBlue> (Java Persistence Query Language) is a powerful query language used in Java applications that interact with
        databases via JPA (Java Persistence API).
        <div>
          It’s similar to <SpanBlue>SQL</SpanBlue> but operates on Java objects (entities) rather than directly on database tables.
        </div>
      </section>
      <div className="my-4">Key Features of JPQL</div>
      <ULdisc>
        <Li>
          <strong>Object-oriented:</strong> Queries are written using <SpanTeal>entity class names</SpanTeal> and <SpanTeal>field names</SpanTeal>,
          <SpanRed>not table or column names</SpanRed>.
        </Li>
        <Li>Supports joins, subqueries, aggregation, and more.</Li>
      </ULdisc>
      <TableCompareJPQL />
    </MainChildArea>
  );
};

export default O1_IntroJpql;
