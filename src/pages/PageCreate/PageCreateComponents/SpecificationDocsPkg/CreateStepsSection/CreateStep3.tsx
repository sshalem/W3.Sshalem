/*


*/
import { IMG, MainChildArea } from "../../../../../components";
import { JsxHighlight, SpanBlue } from "../../../../../components/Highlight";
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
              go to <SpanBlue>App.tsx</SpanBlue> file
            </li>
            <li>
              add code below, under <SpanBlue>MainLayout</SpanBlue> path , (I create new child) ,
            </li>
            <JsxHighlight jsxCode={jsxCode_3}></JsxHighlight>
            <IMG img_name={page_create_3}></IMG>
            <li>
              at this point I should see <SpanBlue>C++</SpanBlue> page link on <SpanBlue>Navbar</SpanBlue>
              <IMG img_name={page_create_4}></IMG>
            </li>
          </ul>
        </div>
      </article>
    </MainChildArea>
  );
};

export default CreateStep3;

const jsxCode_3 = `{ path: "c++", element: <Cpp_page /> },`;
