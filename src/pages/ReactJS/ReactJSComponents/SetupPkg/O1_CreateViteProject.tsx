import { MainChildArea } from "../../../../components";
import { BatchHighlight } from "../../../../components/Highlight";

const O1_CreateViteProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>To create new VITE project </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          go to{" "}
          <a href="https://vite.dev/guide/" target="_blank" className="text-blue-600">
            https://vite.dev/guide/
          </a>
        </li>
        <li className="my-1">open CMD type the following command</li>
        <li className="my-1">Follow the instructions , to create a VITE ReactJS + TypeScript project</li>
      </ul>
      <BatchHighlight batchCode={vite}></BatchHighlight>
    </MainChildArea>
  );
};

export default O1_CreateViteProject;

const vite = `npm create vite@latest`;
