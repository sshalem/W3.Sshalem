import { IMG, MainChildArea } from "../../../../components";
import { JsxHighlight, Span } from "../../../../Highlight";
import page_create_2 from "../../../../assets/page_create_2.jpg";

const CreateStep2 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>
          All page names in the <Span>Navbar</Span>are populated from a <Span>Links</Span> array I created in <Span>utils</Span>folder. thus,
          <ul className="my-4 ml-8 list-decimal">
            <li>
              go to <Span>utils</Span> folder
            </li>
            <li>
              open <Span>links.ts</Span> file
            </li>
            <IMG img_name={page_create_2} />
            <li>
              add to the <Span>links</Span> array , new link , usually, I set the name of the page <Span>c++</Span> same as the name of the link.{" "}
              <br />
              <strong>convesion</strong>: must be in small letters
              <br />
              this will be
              <ul className="ml-8 list-disc">
                <li>
                  the url path exaple <Span>localhost:/5173/c++</Span>
                </li>
                <li>
                  Page name shown on <Span>Navbar</Span>
                </li>
              </ul>
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
  "/c++",
];`;
