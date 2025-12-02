/*


*/
import { FaDiamond } from "react-icons/fa6";
import dbeaver_postgres_4 from "../../../../../assets/dbeaver_postgres_4.jpg";
import dbeaver_postgres_5 from "../../../../../assets/dbeaver_postgres_5.jpg";
import dbeaver_postgres_3 from "../../../../../assets/dbeaver_postgres_3.jpg";
import { SpanGreen, SpanGrey } from "../../../../../components/Highlight";
import { IMG, MainChildArea } from "../../../../../components";

const O6_DBeaverPostgresqlAllDB = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        In order to connect a <SpanGrey>All Postgres DB with DBeaver</SpanGrey> follow these steps.
      </div>
      <ul className="mx-8">
        <li className="my-1 list-disc">I know , I have multiple DB's in PGadmin.</li>
        <li className="my-1 list-disc">
          Connect <SpanGrey>ALL DB</SpanGrey> to DBeaver , So so I can see them all in DBeaver.
        </li>
        <li className="my-1 list-disc">
          I have in PGadmin 2 DB : <SpanGrey>jpa</SpanGrey> and <SpanGrey>jwt</SpanGrey>
        </li>
        <IMG img_name={dbeaver_postgres_4}></IMG>

        <li className="my-1 list-disc">Open DBeaver</li>
        <li className="my-1 list-disc">Create new Connection of Postgresql</li>

        <li className="my-1 list-disc">
          <div className="my-2">Under main Tab select the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <SpanGrey>cms</SpanGrey> - thats the name of DB in PgAdmin
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> leave the <SpanGrey>Database</SpanGrey> field empty
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> select the check box <SpanGreen>Show all databases</SpanGreen>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> username : <SpanGrey>postgres</SpanGrey>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> password : <SpanGrey>postgres</SpanGrey> or <SpanGrey>admin</SpanGrey> or{" "}
            <SpanGrey>root</SpanGrey> (depends when I installed Postgres on my computer)
          </div>
          <IMG img_name={dbeaver_postgres_5}></IMG>
        </li>
        <li className="my-1 list-disc">
          Under Driver properties, once I'm on it, it will download the necessary drivers
          <IMG img_name={dbeaver_postgres_3}></IMG>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O6_DBeaverPostgresqlAllDB;
