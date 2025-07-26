import { FaDiamond } from "react-icons/fa6";

import dbeaver_mysql_1 from "../../../assets/dbeaver_mysql_1.jpg";
import dbeaver_mysql_2 from "../../../assets/dbeaver_mysql_2.jpg";
import dbeaver_mysql_2_1 from "../../../assets/dbeaver_mysql_2_1.jpg";
import dbeaver_mysql_3 from "../../../assets/dbeaver_mysql_3.jpg";
import { Span } from "../../../Highlight";
import { ContentAnchor } from "../../../components";

const DBeaverMySql = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />

      <ul className="mx-8">
        <li className="my-1 list-disc">In the image below, I show all my current DB's I have in MySql workbench</li>
        <li className="my-1 list-disc">Lets see how I connect DBeaver with DB's on MySql</li>
        <div>
          <img src={dbeaver_mysql_1} alt="dbeaver_mysql_1" className="mx-10 my-10" />
        </div>

        <li className="my-1 list-disc">Open DBeaver</li>
        <li className="my-1 list-disc">Create new Connection of MySql</li>

        <li className="my-1 list-disc">
          <div className="my-2">Under main Tab select the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <Span>cms</Span> - thats the name of DB in MySql workbench
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Note - Database field is empty , meaning DBeaver will import all databases
            available
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> user and password : both are <Span>root</Span> (as I define when I installed
            MySql on my computer)
          </div>
          <div>
            <img src={dbeaver_mysql_2} alt="dbeaver_mysql_2" className="mx-10 my-10" />
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> there is also option to define the local client as &nbsp;
            <span className="rounded-md bg-emerald-500 px-1 text-white">MySql Server 8.0</span>
          </div>

          <div>
            <img src={dbeaver_mysql_2_1} alt="dbeaver_mysql_2_1" className="mx-10 my-10" />
          </div>
        </li>
        <li className="my-1 list-disc">
          Under Driver properties, once I'm on it, it will download the necessary drivers
          <div>
            <img src={dbeaver_mysql_3} alt="dbeaver_mysql_3" className="mx-10 my-10" />
          </div>
        </li>
      </ul>
    </article>
  );
};

export default DBeaverMySql;
