import { FaDiamond } from "react-icons/fa6";
import dbeaver_postgres_1 from "../../../../../assets/dbeaver_postgres_1.jpg";
import dbeaver_postgres_2 from "../../../../../assets/dbeaver_postgres_2.jpg";
import dbeaver_postgres_3 from "../../../../../assets/dbeaver_postgres_3.jpg";
import { SpanBlue, SpanRed, SpanTeal } from "../../../../../components/Highlight";
import { IMG, MainChildArea } from "../../../../../components";

const DBeaverPostgresql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>In order to connect a single DB with DBeaver follow these steps.</div>
      <ul className="mx-8">
        <li className="my-1 list-disc">I have multiple DB's in PGadmin.</li>
        <li className="my-1 list-disc">
          I will connect <SpanRed>only</SpanRed> <SpanBlue>cms</SpanBlue> is my Database in PgAdmin , since I don't all DB's to be shown in DBeaver.
        </li>
        <li className="my-1 list-disc">
          Lets see how I connect DBeaver with <SpanBlue>cms</SpanBlue> DB on Postgresql
        </li>
        <IMG img_name={dbeaver_postgres_1}></IMG>

        <li className="my-1 list-disc">Open DBeaver</li>
        <li className="my-1 list-disc">Create new Connection of Postgresql</li>

        <li className="my-1 list-disc">
          <div className="my-2">Under main Tab select the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <SpanBlue>cms</SpanBlue> - thats the name of DB in PgAdmin
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <SpanRed>Note</SpanRed> - I didnt select <SpanTeal>Show all databases</SpanTeal>{" "}
            (because it will be to much DB's , unless I want them all)
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> user and password : both are <SpanBlue>postgres</SpanBlue> (as I define when I
            installed Postgres on my computer)
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

export default DBeaverPostgresql;
