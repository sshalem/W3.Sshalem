import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, Span } from "../../../../../components/Highlight";
import page_create_1 from "../../../../../assets/page_create_1.jpg";

const CreateStep1 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>
          <ul className="ml-8 list-decimal">
            <li>
              go to <Span>pages</Span> folder
            </li>
            <li>
              create a new page component with name <Span>C_plus_plus.tsx</Span>
            </li>
            <IMG img_name={page_create_1}></IMG>
            <li>add the below code in the created file</li>
            <JsxHighlight jsxCode={jsxCode_1}></JsxHighlight>
          </ul>
        </div>
      </article>
    </MainChildArea>
  );
};

export default CreateStep1;

const jsxCode_1 = `const C_plus_plus = () => {
  return <div className="text-3xl">C++ ...</div>;
};

export default C_plus_plus;`;
