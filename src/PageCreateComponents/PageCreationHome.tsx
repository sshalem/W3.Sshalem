import { IMG } from "../components";
import { JsxHighlight, Span } from "../Highlight";
import page_create_1 from "../assets/page_create_1.jpg";
import page_create_2 from "../assets/page_create_2.jpg";
import page_create_3 from "../assets/page_create_3.jpg";
import page_create_4 from "../assets/page_create_4.jpg";
import page_create_5 from "../assets/page_create_5.jpg";
import page_create_6 from "../assets/page_create_6.jpg";

const PageCreationHome = () => {
  return (
    <section>
      <div className="my-4 text-3xl">Steps to create new page</div>

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

      <article>
        <div className="css-title">step 3 : Config App.tsx with Example Page</div>
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
          </ul>
        </div>
      </article>

      <article>
        <div className="css-title">step 4 </div>
        <div>Lets see how to add the Sidebar navigation </div>
        To config the side navbar on the page, copy the context of componenet <Span>Z_PageTemplate</Span>
        and paste it in <Span>Example</Span>component. <br />
        After adding the Page template code , this is how page looks now.
        <IMG img_name={page_create_4}></IMG>
        <div>
          Let's add the sidebar content , so it will be shown like we see in page:
          <IMG img_name={page_create_6} />
          This is a convension of how I define the folder and files in the project.
        </div>
        <ul className="ml-8 list-decimal">
          <li>
            under <Span>src</Span> folder, create the following folder (Its a convension) <Span>ExampleComponents</Span>
          </li>
          <li>
            create 2 files in this folder <Span>index.ts</Span> and <Span>ExampleHome.tsx</Span>
          </li>
          <JsxHighlight jsxCode={jsxCode_4}></JsxHighlight>
          <JsxHighlight jsxCode={jsxCode_5}></JsxHighlight>
          <IMG img_name={page_create_3}></IMG>
          <li>
            Add a Link to <Span>Example</Span> component , so I will see <Span>Example Home</Span> in my side navbar. <br />
            copy code below and add it to <Span>Example</Span> component. (see inside <Span>Example</Span> component where exactlly to add it)
            <JsxHighlight jsxCode={jsxCode_6}></JsxHighlight>
          </li>
          <li>
            Add to <Span>App.tsx</Span> the children of <Span>Example</Span> component
            <JsxHighlight jsxCode={jsxCode_7}></JsxHighlight>
            now lets examine our web page see ho it looks:
            <IMG img_name={page_create_5}></IMG>
          </li>
          <li>
            Create new folder <Span>DropDownExample</Span> under the main <Span>DropDown</Span>folder
          </li>
          <li>
            create new file with name convension prefix <Span>DropDown</Span>, for instance <Span>DropDownTest.tsx</Span>
          </li>
          <li>
            copy from <Span>Z_DropDownTemplate</Span> the content of the component , and paste it in <Span>DropDownTest.tsx</Span>.
          </li>
          <li>
            verify that the internalLink matches the correct path (see inside code)
            <div>
              <Span>includes("example")</Span> and <Span>internalLink="/example/test"</Span>
            </div>
          </li>
          <li>
            Go to <Span>Example</Span> page component , add to it <Span>DropDownTest</Span> component (see code )
          </li>
          <li>
            Create new file in <Span>ExampleComponents</Span> name it <Span>TestMain.tsx</Span>
          </li>
          <li>
            add to <Span>App.tsx</Span>
          </li>
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

const jsxCode_4 = `export { default as MicroServiceHome } from "./ExampleHome";`;

const jsxCode_5 = `const ExampleHome = () => {
  return <div className="text-3xl">Example Home ...</div>;
};

export default ExampleHome;`;

const jsxCode_6 = `<SideBarLink pageName="Example Home" internalLink="/example" />`;

const jsxCode_7 = `        {
          path: "example",
          element: <Example />,
          children: [
            { index: true, element: <ExampleHome /> }
          ],
        },`;
