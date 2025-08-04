import { MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

const CreateStep2 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div className="css-title">step 2 : Add Page to Navbar</div>
        <div>
          All page names in the <Span>Navbar</Span>are populated from a <Span>Links</Span> array I created in <Span>utils</Span>folder. thus,
          <ul className="ml-8 list-decimal">
            <li>
              go to <Span>utils</Span> folder
            </li>
            <li>
              go to <Span>links.ts</Span> file
            </li>
            <li>
              add to the <Span>links</Span> array , new link , same as the name of the page <Span>example</Span> , in small letters
            </li>
            <JsxHighlight jsxCode={jsxCode_2}></JsxHighlight>
          </ul>
        </div>
      </article>
    </MainChildArea>
  );
};

export default CreateStep2;

const jsxCode_2 = `export const links: string[] = [
  "/spring",
  ...
  "/example",
];`;
