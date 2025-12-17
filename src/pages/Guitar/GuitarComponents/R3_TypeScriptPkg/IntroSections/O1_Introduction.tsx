/*


*/
import { IMG, MainChildArea } from "../../../../../components";
import typescript_1 from "../../../../../assets/typescript_1.jpg";
import { JsxHighlight, SpanGreen } from "../../../../../components/Highlight";

const O1_Introduction = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>I start learning typescript, I use a vanilla typescript project , using VITE</div>
      <ul className="my-4 ml-8 list-disc">
        <li className="my-1">
          <SpanGreen>npm create vite@latest vanilla-typescript -- --template vanilla-ts</SpanGreen>Create a vanilla TypeScript app using VITE
        </li>
        <li className="my-1">
          <SpanGreen>npm install</SpanGreen> Since it's VITE , (even thou it is a vanilla TS app) need to run npm install
        </li>
        <li className="my-1">
          <SpanGreen>npm run dev</SpanGreen> - Like in React app , runs on port 5173
        </li>
      </ul>
      <JsxHighlight jsxCode={typescript_install}></JsxHighlight>
      <IMG img_name={typescript_1}></IMG>
    </MainChildArea>
  );
};

export default O1_Introduction;

const typescript_install = `npm create vite@latest vanilla-typescript -- --template vanilla-ts
cd vanilla-typescript
npm install
npm run dev`;
