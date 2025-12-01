/*


*/
import { FaDiamond } from "react-icons/fa6";
import dbeaver_postgres_1 from "../../../../../assets/dbeaver_postgres_1.jpg";
import dbeaver_postgres_2 from "../../../../../assets/dbeaver_postgres_2.jpg";
import dbeaver_postgres_3 from "../../../../../assets/dbeaver_postgres_3.jpg";
import { SpanGrey, SpanRed } from "../../../../../components/Highlight";
import { IMG, MainChildArea } from "../../../../../components";

const O5_DBeaverPostgresqlSingleDB = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        In order to connect a <SpanGrey>single DB with DBeaver</SpanGrey> follow these steps.
      </div>
      <ul className="mx-8">
        <li className="my-1 list-disc">I know , I have multiple DB's in PGadmin.</li>
        <li className="my-1 list-disc">
          But, I will connect <SpanRed>only</SpanRed> <SpanGrey>cms</SpanGrey> is my Database in PgAdmin , since I don't all DB's to be shown in
          DBeaver.
        </li>
        <li className="my-1 list-disc">
          Lets see how I connect DBeaver with <SpanGrey>cms</SpanGrey> DB on Postgresql
        </li>
        <IMG img_name={dbeaver_postgres_1}></IMG>

        <li className="my-1 list-disc">Open DBeaver</li>
        <li className="my-1 list-disc">Create new Connection of Postgresql</li>

        <li className="my-1 list-disc">
          <div className="my-2">Under main Tab select the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <SpanGrey>cms</SpanGrey> - thats the name of DB in PgAdmin
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <SpanRed>Note</SpanRed> - I didnt select <SpanRed>Show all databases</SpanRed>{" "}
            (because it will be to much DB's , unless I want them all)
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> username : <SpanGrey>postgres</SpanGrey>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> password : <SpanGrey>postgres</SpanGrey> or <SpanGrey>admin</SpanGrey> or{" "}
            <SpanGrey>root</SpanGrey> (depends when I installed Postgres on my computer)
          </div>
          <IMG img_name={dbeaver_postgres_2}></IMG>
        </li>
        <li className="my-1 list-disc">
          Under Driver properties, once I'm on it, it will download the necessary drivers
          <IMG img_name={dbeaver_postgres_3}></IMG>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O5_DBeaverPostgresqlSingleDB;
