import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanBlue, SpanGreen, SpanRed, SpanSky, SpanTeal } from "../../../../../components/Highlight";
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
      <DivDoubleBorder>JPQL vs Native SQL Query</DivDoubleBorder>
      <section>
        While <SpanGreen>JPQL</SpanGreen> is powerful and covers most use cases, there are situations where using a{" "}
        <SpanGreen>native SQL query</SpanGreen> becomes necessary or more practical.
        <div className="mt-8 font-semibold">✅ When JPQL Is Enough , works well for:</div>
        <ULdisc>
          <Li>Standard CRUD operations</Li>
          <Li>Filtering, sorting, and joining entities</Li>
          <Li>Aggregations (COUNT, SUM, AVG, etc.)</Li>
          <Li>Subqueries and expressions</Li>
          <Li>Working with mapped relationships (e.g., @OneToMany, @ManyToOne)</Li>
        </ULdisc>
        <hr />
        <div className="mt-8 font-semibold">⚠️ When Native Queries Are Necessary</div>
        <ULdisc>
          <Li>Complex SQL Features Not Supported by JPQL</Li>
          <Li>
            Querying Unmapped Tables or Views (If you're accessing a table not mapped to an entity, <SpanRed>JPQL won't work</SpanRed>.)
          </Li>
          <Li>
            Performance Optimization , Sometimes native queries are faster or allow better <SpanSky>indexing/hints</SpanSky>.
          </Li>
          <Li>JPQL supports bulk updates/deletes, but native queries can be more flexible.</Li>
          <Li>You need native SQL to call stored procedures or database functions.</Li>
        </ULdisc>
        <hr />
      </section>
      <TableCompareJPQL />
    </MainChildArea>
  );
};

export default O1_IntroJpql;
