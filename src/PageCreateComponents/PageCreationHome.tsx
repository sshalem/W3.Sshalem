import { IMG } from "../components";
import { JsxHighlight, Span } from "../Highlight";
import page_create_1 from "../assets/page_create_1.jpg";
import page_create_2 from "../assets/page_create_2.jpg";
import page_create_3 from "../assets/page_create_3.jpg";
import page_create_4 from "../assets/page_create_4.jpg";

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
            <JsxHighlight jsxCode={jsxCode_3}></JsxHighlight>
            <li>
              at this point I should see <Span>Example</Span> page link on <Span>Navbar</Span>
              <IMG img_name={page_create_1}></IMG>
            </li>
            <li>
              To config the side navbar on the page, copy the context of componenet <Span>Z_PageTemplate</Span>
              and paste it in <Span>Example</Span>component. <br />
              After adding the Page template code , this is how page looks now.
              <IMG img_name={page_create_4}></IMG>
            </li>
          </ul>
        </div>
      </article>

      <article>
        <div className="css-title">step 4 </div>
        <div>Lets see how to add the Sidebar navigation </div>
        <IMG img_name={page_create_2} />
        <div>
          Now I will config the folder of <Span>Example</Span>
        </div>
        <ul className="ml-8 list-decimal">
          <li>
            under <Span>src</Span> folder, create the following folder (Its a convension) <Span>ExampleComponents</Span>
            <IMG img_name={page_create_3}></IMG>
          </li>
          <li></li>
          <li></li>
        </ul>
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
