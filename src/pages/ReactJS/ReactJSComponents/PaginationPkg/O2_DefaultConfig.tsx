import { GitHub, GitHubLiAnchor, IMG, MainChildArea } from "../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";
import pagination_1 from "../../../../assets/pagination_1.jpg";

const O2_DefaultConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        This is default implementation , with minimum configuration , which gives only pagination. <br />
        <IMG img_name={pagination_1}></IMG>
        <ul className="my-4 ml-8 list-disc">
          <li className="my-1">
            <strong>Note : </strong>Pagination Code is written in <SpanRed>TypeScript</SpanRed>
          </li>
          <li className="my-1">
            we <SpanRed>MUST</SpanRed> know the <SpanGreen>fields</SpanGreen> of the objects
          </li>
          <li className="my-1">
            In this example : <SpanBlue>id</SpanBlue>
            <SpanBlue>first_name</SpanBlue>, <SpanBlue>last_name</SpanBlue>, <SpanBlue>email</SpanBlue>
          </li>
          <li className="my-1">
            <SpanRed>CSS for Data</SpanRed> - Re-design with css the data layout , inside <SpanGreen>Pagination</SpanGreen>
            code. go to the last <SpanGreen>section</SpanGreen> tag , where <SpanGreen>dataChuck</SpanGreen> is itterated.
          </li>
        </ul>
        <GitHub>
          <GitHubLiAnchor
            description="main - pagaination git"
            gitLink="https://github.com/sshalem/ReactJS/tree/main/08-pagination-sort-items/src/20-Pagination-prod"
          ></GitHubLiAnchor>
          <GitHubLiAnchor
            description="pagaination usage"
            gitLink="https://github.com/sshalem/ReactJS/blob/main/08-pagination-sort-items/src/20-Pagination-prod/App20.tsx"
          ></GitHubLiAnchor>
          <GitHubLiAnchor
            description="pagaination code"
            gitLink="https://github.com/sshalem/ReactJS/blob/main/08-pagination-sort-items/src/20-Pagination-prod/Pagination.tsx"
          ></GitHubLiAnchor>
        </GitHub>
        {/*  */}
        {/*  */}
        <DivDoubleBorder>Implement default config</DivDoubleBorder>
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            define the <SpanGreen>fields</SpanGreen> of a single object , as they appear on backend (or any other data sorce)
            <JsxHighlight jsxCode={fields}></JsxHighlight>
          </li>
          <li className="my-1">
            Since I use <SpanGreen>TypeScript</SpanGreen> , thus, I define a <SpanGreen>type</SpanGreen> (or I can define interface instead) of the
            Single Object , since I iterate it in my code
            <JsxHighlight jsxCode={itemProps}></JsxHighlight>
          </li>
          <li className="my-1">
            define 3 <SpanGreen>useState</SpanGreen> (These are a Must for code to work)
            <JsxHighlight jsxCode={use_state}></JsxHighlight>
          </li>
          <li className="my-1">
            Config Pagination Component
            <JsxHighlight jsxCode={config_pagination}></JsxHighlight>
          </li>
          <li className="my-1">
            fetch data (I use the useEffect on initial , but I can do whatever I want when fetching), <SpanGreen>setItems</SpanGreen> with raw JSON
            data (see full code)
          </li>
          <li className="my-1">Iterate data and display</li>
        </ul>
        <div className="my-12">
          See <SpanGreen>Full code</SpanGreen>
          <JsxHighlight jsxCode={use_pagination}></JsxHighlight>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O2_DefaultConfig;

const fields = `// [1] - define the fields of a single object
const dataFields = ["id", "first_name", "last_name", "email"];`;

const itemProps = `// [2] - define the type of the Single Object , since I iterate it in my code,
//       I prepare to have the right type, Instead of 'any'
type DataProps = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};`;

const use_state = `  // [3] - define useState (These are a Must for code to work)
  const [data, setData] = useState<DataProps[]>([]);`;

const config_pagination = `<Pagination 
    data={data} 
    allFields={dataFields} 
/>`;

const use_pagination = `import { useEffect, useState } from "react";
import Pagination from "./Pagination";

type DataProps = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

const dataFields = ["id", "first_name", "last_name", "email"];

const App = () => {
  const [data, setData] = useState<DataProps[]>([]);

  const getData = async () => {
    try {
      const res = await fetch("src/20-Pagination-prod/MOCK_DATA.json");
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0) {
    return (
      <>
        <div className="text-3xl">No Data to display...</div>
      </>
    );
  }

  return (
    <>
      <Pagination data={data} allFields={dataFields} />
    </>
  );
};

export default App;`;
