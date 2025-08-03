import { IMG } from "../components";
import { JsxHighlight, Span } from "../Highlight";
import page_create_1 from "../assets/page_create_1.jpg";

const PageCreationHome = () => {
  return (
    <section>
      <div className="my-4 text-3xl">Steps to create new page</div>

      <article>
        <div className="css-title">step 1 </div>
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

      <article>
        <div className="css-title">step 2 </div>
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

      <article>
        <div className="css-title">step 3 </div>
        <div>
          <ul className="ml-8 list-decimal">
            <li>
              go to <Span>App.tsx</Span> file
            </li>
            <li>
              under <Span>MainLayout</Span> path , add new child
            </li>
          </ul>
          <JsxHighlight jsxCode={jsxCode_3}></JsxHighlight>
          at this poit I should see <Span>Example</Span> page link on <Span>Navbar</Span>
          <IMG img_name={page_create_1}></IMG>
        </div>
      </article>

      <article>
        <div className="css-title">step 4 </div>
        <div></div>
      </article>

      <article>
        <div className="css-title">step 5 </div>
        <div></div>
      </article>

      <article>
        <div className="css-title">step 6 </div>
        <div></div>
      </article>

      <article>
        <div className="css-title">step 7 </div>
        <div></div>
      </article>

      <article>
        <div className="css-title">step 8 </div>
        <div></div>
      </article>
    </section>
  );
};

export default PageCreationHome;

const jsxCode_1 = `const Example = () => {
  return <div className="text-3xl">Example page ...</div>;
};

export default Example;
`;

const jsxCode_2 = `export const links: string[] = [
  "/spring",
  ...
  "/example",
];`;

const jsxCode_3 = `{ path: "example", element: <Example /> },`;
