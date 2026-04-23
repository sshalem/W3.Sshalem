/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanYellow } from "../../../../../components/Highlight";
import setup_axios_1 from "../../../../../assets/setup_axios_1.jpg";

const O1_CreateAxiosInstance = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 Creata Axios Instance</article>
        <div>
          <ULdisc>
            <Li>
              create <SpanYellow>utils</SpanYellow> folder ,
            </Li>
            <Li>
              Inside <SpanYellow>utils</SpanYellow> , create a file named <SpanYellow>axiosInstance.tsx</SpanYellow> , where I create an Instance of
              axios
              <IMG img_name={setup_axios_1}></IMG>
            </Li>
            <Li>
              Copy/paste the code below of creating an axios instance in <SpanYellow>axiosInstance.tsx</SpanYellow>
              <JsxHighlight jsxCode={_1_}></JsxHighlight>
            </Li>
          </ULdisc>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O1_CreateAxiosInstance;

const _1_ = `import axios from "axios";

// BASE_URL for custom instances
const BASE_URL = "http://localhost:8080";

const productsController = axios.create({
  baseURL: \`\${BASE_URL}/api/products\`,
  headers: {
    Accept: "application/json",
  },
});

export { productsController };`;
