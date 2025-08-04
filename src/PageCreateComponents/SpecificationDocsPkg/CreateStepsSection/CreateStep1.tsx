import { MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

const CreateStep1 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div className="css-title">step 1 : Create new page </div>
        <div>
          <ul className="ml-8 list-decimal">
            <li>
              go to <Span>pages</Span> folder
            </li>
            <li>
              create a new page component with name <Span>Example</Span>
            </li>
            <JsxHighlight jsxCode={jsxCode_1}></JsxHighlight>
          </ul>
        </div>
      </article>
    </MainChildArea>
  );
};

export default CreateStep1;

const jsxCode_1 = `const Example = () => {
  return <div className="text-3xl">Example page ...</div>;
};

export default Example;
`;
