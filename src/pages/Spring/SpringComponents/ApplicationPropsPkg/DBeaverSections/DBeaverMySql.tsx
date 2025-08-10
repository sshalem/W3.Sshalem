import { FaDiamond } from "react-icons/fa6";
import dbeaver_mysql_1 from "../../../../../assets/dbeaver_mysql_1.jpg";
import dbeaver_mysql_2 from "../../../../../assets/dbeaver_mysql_2.jpg";
import dbeaver_mysql_2_1 from "../../../../../assets/dbeaver_mysql_2_1.jpg";
import dbeaver_mysql_3 from "../../../../../assets/dbeaver_mysql_3.jpg";
import { Span, SpanBlue, SpanGreen } from "../../../../../components/Highlight";
import { IMG, MainChildArea } from "../../../../../components";

const DBeaverMySql = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ul className="mx-8 list-disc">
        <li className="my-1">In the image below, I show all my current DB's I have in MySql workbench</li>
        <li className="my-1">Lets see how I connect DBeaver with DB's on MySql</li>
        <IMG img_name={dbeaver_mysql_1}></IMG>

        <li className="my-1">Open DBeaver</li>
        <li className="my-1">Create new Connection of MySql</li>

        <li className="my-1">
          <div className="my-2">Under main Tab select the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> <SpanBlue>cms</SpanBlue> - thats the name of DB in MySql workbench
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Note - Database field is empty , meaning DBeaver will import all databases
            available
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> user and password : both are <SpanBlue>root</SpanBlue> (as I define when I
            installed MySql on my computer)
          </div>
          <IMG img_name={dbeaver_mysql_2}></IMG>

          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> there is also option to define the local client as &nbsp;
            <SpanGreen>MySql Server 8.0</SpanGreen>
          </div>
          <IMG img_name={dbeaver_mysql_2_1}></IMG>
        </li>
        <li className="my-1">
          Under Driver properties, once I'm on it, it will download the necessary drivers
          <IMG img_name={dbeaver_mysql_3}></IMG>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default DBeaverMySql;
