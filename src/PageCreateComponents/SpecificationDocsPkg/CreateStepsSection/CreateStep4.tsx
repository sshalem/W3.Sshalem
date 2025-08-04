import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";
import page_create_3 from "../../../assets/page_create_3.jpg";
import page_create_4 from "../../../assets/page_create_4.jpg";
import page_create_5 from "../../../assets/page_create_5.jpg";
import page_create_6 from "../../../assets/page_create_6.jpg";
import page_create_7 from "../../../assets/page_create_7.jpg";
import page_create_8 from "../../../assets/page_create_8.jpg";
import page_create_9 from "../../../assets/page_create_9.jpg";

const CreateStep4 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
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
            Add a <Span>SideBarLink</Span> to <Span>Example</Span> component , so I will see <Span>Example Home</Span> in my side navbar. <br />
            copy code below and add it to <Span>Example</Span> component. (see inside <Span>Example</Span> component where exactlly to add it)
            <JsxHighlight jsxCode={jsxCode_6}></JsxHighlight>
          </li>
          <li>
            Add to <Span>App.tsx</Span> the children of <Span>Example</Span> component
            <JsxHighlight jsxCode={jsxCode_7}></JsxHighlight>
            now lets examine our web page see ho it looks:
            <IMG img_name={page_create_5}></IMG>
          </li>

          <li>Continue with creating the DropDown.</li>
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
              <Span>includes("test")</Span> and <Span>internalLink="/example/test"</Span>
            </div>
            <IMG img_name={page_create_9}></IMG>
          </li>
          <li>
            Go to <Span>Example</Span> page component , add to it <Span>DropDownTest</Span> component (see code )
          </li>
          <li>
            Create new file in <Span>ExampleComponents</Span> name it <Span>Test.tsx</Span>
          </li>
          <li>
            create 2 folder with following convension <Span>LearnSections</Span> and <Span>StudySections</Span>
            <IMG img_name={page_create_7}></IMG>
          </li>
          <li>
            In each folder create a file taht will be the main file ,<Span>StudyMain.tsx</Span> and <Span>LearnMain.tsx</Span>
            <IMG img_name={page_create_8}></IMG>
          </li>
          <li>
            add to <Span>App.tsx</Span> the new links and thier corresponding elements
            <JsxHighlight jsxCode={jsxCode_8}></JsxHighlight>
          </li>
        </ul>
      </article>
    </MainChildArea>
  );
};

export default CreateStep4;

const jsxCode_4 = `export { default as ExampleHome } from "./ExampleHome";`;

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

const jsxCode_8 = `        {
          path: "example",
          element: <Example />,
          children: [
            { index: true, element: <ExampleHome /> },
            {
              path: "test",
              element: <Test />,
              children: [
                { path: "learn", element: <LearnMain /> },
                { path: "study", element: <StudyMain /> },
              ],
            },
          ],
        },`;
