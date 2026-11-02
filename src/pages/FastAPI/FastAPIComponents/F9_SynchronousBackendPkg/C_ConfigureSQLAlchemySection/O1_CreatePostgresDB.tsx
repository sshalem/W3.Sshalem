/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_SQL } from "../../../../../components/Highlight";

const O1_CreatePostgresDB = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Create DataBase in Postgresql</div>

        <ULDecimal>
          <Li>Open DBeaver or pgAdmin.</Li>
          <Li>Connect to your local PostgreSQL server.</Li>
          <Li>
            For this project, create a database:
            <Highlight_SQL code={_1_}></Highlight_SQL>
            Verify
            <Highlight_SQL code={_2_}></Highlight_SQL>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_CreatePostgresDB;

const _1_ = `CREATE DATABASE customer_management;`;

const _2_ = `SELECT datname
FROM pg_database
WHERE datname = 'customer_management';`;
