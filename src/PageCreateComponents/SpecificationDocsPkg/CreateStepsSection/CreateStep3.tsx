import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";
import page_create_1 from "../../../assets/page_create_1.jpg";

const CreateStep3 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      {" "}
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
    </MainChildArea>
  );
};

export default CreateStep3;

const jsxCode_3 = `{ path: "example", element: <Example /> },`;
