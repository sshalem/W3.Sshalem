/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, Highlight_SQL, SpanEmerald } from "../../../../../components/Highlight";

const O2_SQLScript = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">SQL Script</div>
        This way is very common but, we have to run SQL query inside DB
        <ULdisc>
          <Li>This way , we need to execute command in SQL query on DB</Li>
          <Li>
            create <SpanEmerald>scripts</SpanEmerald> directory (Not package)
            <Highlight_ApplicationProperties code={_1_} />
          </Li>
          <Li>
            Have the script I want in this <SpanEmerald>query_script.sql</SpanEmerald>
            <Highlight_SQL code={_2_} />
          </Li>
          <Li>Copy/Paste the sql code in Postgresql Query and run it</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_SQLScript;

const _1_ = `customer-management/
├── app/
├── scripts/
│   └── query_script.sql
`;

const _2_ = `INSERT INTO customers (first_name, last_name, email, age)
SELECT
    'Customer' || n,
    'Test',
    'customer' || n || '@example.com',
    20 + (n % 50)
FROM generate_series(1, 100) AS n
ON CONFLICT (email) DO NOTHING;`;
