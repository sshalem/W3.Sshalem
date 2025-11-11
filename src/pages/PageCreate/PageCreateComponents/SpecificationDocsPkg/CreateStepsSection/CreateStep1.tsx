/*


*/
import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanBlue } from "../../../../../components/Highlight";
import page_create_1 from "../../../../../assets/page_create_1.jpg";

const CreateStep1 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>
          <ul className="ml-8 list-decimal">
            <li>
              go to <SpanBlue>pages</SpanBlue> folder
            </li>
            <li>
              create new folder <SpanBlue>Cpp</SpanBlue>
            </li>
            <li>
              Inside <SpanBlue>Cpp</SpanBlue> , create new page component <SpanBlue>Cpp_page.tsx</SpanBlue>
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

const jsxCode_1 = `const Cpp_page = () => {
  return <div className="text-3xl">C++ ...</div>;
};
export default Cpp_page;`;
