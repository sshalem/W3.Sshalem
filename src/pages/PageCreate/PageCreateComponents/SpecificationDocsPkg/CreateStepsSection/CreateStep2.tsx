import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanBlue } from "../../../../../components/Highlight";
import page_create_2 from "../../../../../assets/page_create_2.jpg";

const CreateStep2 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>
          All page names in the <SpanBlue>Navbar</SpanBlue>are populated from a <SpanBlue>Links</SpanBlue> array I created in{" "}
          <SpanBlue>utils</SpanBlue>folder. thus,
          <ul className="my-4 ml-8 list-decimal">
            <li>
              go to <SpanBlue>utils</SpanBlue> folder
            </li>
            <li>
              open <SpanBlue>links.ts</SpanBlue> file
            </li>
            <IMG img_name={page_create_2} />
            <li>
              add to the <SpanBlue>links</SpanBlue> array , new link , usually, I set the name of the page <SpanBlue>c++</SpanBlue> same as the name
              of the link. <br />
              <strong>convesion</strong>: must be in small letters
              <br />
              this will be
              <ul className="ml-8 list-disc">
                <li>
                  the url path exaple <SpanBlue>localhost:/5173/c++</SpanBlue>
                </li>
                <li>
                  Page name shown on <SpanBlue>Navbar</SpanBlue>
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
