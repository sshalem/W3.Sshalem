import { FaDiamond } from "react-icons/fa6";
import { Span } from "../../../Highlight";

import dbeaver_postgres_1 from "../../../../assets/dbeaver_postgres_1.jpg";
import dbeaver_postgres_2 from "../../../../assets/dbeaver_postgres_2.jpg";
import dbeaver_postgres_3 from "../../../../assets/dbeaver_postgres_3.jpg";
import ContentAnchor from "../../../ContentAnchor";

const DBeaverPostgresql = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />

      <ul className="mx-8">
        <li className="my-1 list-disc">
          <Span>cms</Span> is my Database in PgAdmin
        </li>
        <li className="my-1 list-disc">
          Lets see how I connect DBeaver with <Span>cms</Span> DB on Postgresql
        </li>
        <div>
          <img src={dbeaver_postgres_1} alt="dbeaver_postgres_1" className="mx-10 my-10" />
        </div>

        <li className="my-1 list-disc">Open DBeaver</li>
        <li className="my-1 list-disc">Create new Connection of Postgresql</li>

        <li className="my-1 list-disc">
          <div className="my-2">Under main Tab select the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <Span>cms</Span> - thats the name of DB in PgAdmin
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Note - I didnt select Show all databases (because it will be to much DB's ,
            unless I want them all)
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> user and password : both are <Span>postgres</Span> (as I define when I installed
            Postgres on my computer)
          </div>
          <div>
            <img src={dbeaver_postgres_2} alt="dbeaver_postgres_2" className="mx-10 my-10" />
          </div>
        </li>
        <li className="my-1 list-disc">
          Under Driver properties, once I'm on it, it will download the necessary drivers
          <div>
            <img src={dbeaver_postgres_3} alt="dbeaver_postgres_3" className="mx-10 my-10" />
          </div>
        </li>
      </ul>
    </article>
  );
};

export default DBeaverPostgresql;
