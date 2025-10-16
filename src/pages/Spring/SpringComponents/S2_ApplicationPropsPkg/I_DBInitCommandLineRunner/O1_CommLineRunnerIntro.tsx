import { IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import db_init_6 from "../../../../../assets/db_init_6.jpg";

const O1_CommLineRunnerIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      here is how we config H2 with <SpanBlue>data.sql</SpanBlue>
      <div>
        <ul className="my-4 ml-16 list-decimal">
          <li className="my-1">
            <div>folder/files layout</div>
            <IMG img_name={db_init_6}></IMG>
          </li>
          <li className="my-1">
            <div>
              create <SpanBlue>application-H2.properties</SpanBlue>file
            </div>
            <DivDoubleBorder>application-H2.properties</DivDoubleBorder>
          </li>
        </ul>
      </div>
    </MainChildArea>
  );
};

export default O1_CommLineRunnerIntro;
