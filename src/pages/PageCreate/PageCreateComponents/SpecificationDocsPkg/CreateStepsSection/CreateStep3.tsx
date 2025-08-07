import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, Span } from "../../../../../components/Highlight";
import page_create_3 from "../../../../../assets/page_create_3.jpg";
import page_create_4 from "../../../../../assets/page_create_4.jpg";

const CreateStep3 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        In order to see the the page name in the Navbar , do the following:
        <div>
          <ul className="my-4 ml-8 list-decimal">
            <li>
              go to <Span>App.tsx</Span> file
            </li>
            <li>
              add code below, under <Span>MainLayout</Span> path , (I create new child) ,
            </li>
            <JsxHighlight jsxCode={jsxCode_3}></JsxHighlight>
            <IMG img_name={page_create_3}></IMG>
            <li>
              at this point I should see <Span>C++</Span> page link on <Span>Navbar</Span>
              <IMG img_name={page_create_4}></IMG>
            </li>
          </ul>
        </div>
      </article>
    </MainChildArea>
  );
};

export default CreateStep3;

const jsxCode_3 = `{ path: "c++", element: <C_plus_plus /> },`;
