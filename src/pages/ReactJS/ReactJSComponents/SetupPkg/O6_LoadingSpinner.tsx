/*


*/
import { MainChildArea } from "../../../../components";
import { JsxHighlight, SpanBlue } from "../../../../components/Highlight";

const O6_LoadingSpinner = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        Let's created a <SpanBlue>Loading</SpanBlue> component, where I use it while fecthing data from server
        <JsxHighlight jsxCode={loading}></JsxHighlight>
      </div>
    </MainChildArea>
  );
};

export default O6_LoadingSpinner;

const loading = `const Loading = () => {
  return (
    <div className="text-center text-4xl text-sky-900">
      <div>Processing. . .</div>
      <div className="mx-auto my-8 h-12 w-12 animate-spin rounded-full border-8 border-b-8 border-t-8 border-b-blue-600 border-t-blue-600"></div>
    </div>
  );
};

export default Loading;`;
