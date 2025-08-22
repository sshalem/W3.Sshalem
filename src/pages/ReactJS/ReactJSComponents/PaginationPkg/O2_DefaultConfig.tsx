import { MainChildArea } from "../../../../components";
import { DivDoubleBorder, JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";

const O2_DefaultConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        This is default implementation , with minimum configuration , which gives only pagination. <br />
        thus,
        <ul className="my-4 ml-8 list-disc">
          <li className="my-1">
            we <SpanRed>MUST</SpanRed> know the <SpanGreen>fields</SpanGreen> of the objects
          </li>
          <li className="my-1">
            In this example : <SpanBlue>id</SpanBlue>
            <SpanBlue>first_name</SpanBlue>, <SpanBlue>last_name</SpanBlue>, <SpanBlue>email</SpanBlue>
          </li>
          <li className="my-1">
            <strong>Note : </strong>Pagination Code is written in <SpanRed>TypeScript</SpanRed>
          </li>
        </ul>
        <DivDoubleBorder>Basic Config usage</DivDoubleBorder>
        <ul className="my-4 ml-8 list-decimal">
          <li className="my-1">
            define the fields of a single object
            <JsxHighlight jsxCode={fields}></JsxHighlight>
          </li>
          <li className="my-1">
            define the type of the Single Object , since I iterate it in my code
            <JsxHighlight jsxCode={itemProps}></JsxHighlight>
          </li>
          <li className="my-1">
            define 3 useState (These are a Must for code to work)
            <JsxHighlight jsxCode={use_state}></JsxHighlight>
          </li>
          <li className="my-1">
            Config Pagination Component
            <JsxHighlight jsxCode={config_pagination}></JsxHighlight>
          </li>
          <li className="my-1">fetch data , setItems with raw JSON data (see full code)</li>
          <li className="my-1">Iterate data and display</li>
        </ul>
        <div className="my-2">
          See <SpanGreen>Full code</SpanGreen>
          <JsxHighlight jsxCode={use_pagination}></JsxHighlight>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O2_DefaultConfig;

const fields = `// [1] - define the fields of a single object
const itemFields = ["id", "first_name", "last_name", "email"];`;

const itemProps = `type ItemProp = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};`;

const use_state = `  // [3] - define 3 useState (These are a Must for code to work)
  const [items, setItems] = useState<ItemProp[]>([]);
  const [dataChunk, setDataChunk] = useState<ItemProp[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);`;

const config_pagination = `{!isLoading && (
        <Pagination 
          data={items}
          allFields={itemFields}
          setDataChunk={setDataChunk}
        />        
      )}`;

const use_pagination = `import { useEffect, useState } from "react";
import Pagination from "./Pagination";

// [2] - define the type of the Single Object , since I iterate it in my code,
//       I prepare to have the right type, Instead of 'any'
type ItemProp = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

// [1] - define the fields of a single object
const itemFields = ["id", "first_name", "last_name", "email"];

const Test = () => {
  // [3] - define 3 useState (These are a Must for code to work)
  const [items, setItems] = useState<ItemProp[]>([]);
  const [dataChunk, setDataChunk] = useState<ItemProp[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  // [4] fetch data , setItems with raw JSON data
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch("src/19-pagination-production-no-context/MOCK_DATA.json");
      const jsonData = await res.json();
      setItems(jsonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (items.length === 0) {
    return (
      <>
        <div className="text-3xl">No Data to display...</div>
      </>
    );
  }

  return (
    <>       
      {/* Start -[5] - Config Pagination Component */}
      {!isLoading && (
        <Pagination 
          data={items}
          allFields={itemFields}
          setDataChunk={setDataChunk}
        />        
      )}

      {/* Start - [6] - Iterate data and display */}
      {!isLoading && (
        <div className="mx-auto grid w-7/12 grid-cols-2 py-2">
          {/* Start - Iterate dataChunk */}
          {dataChunk.map((itemProp: ItemProp, index: number) => {
            const { id, first_name, last_name, email } = itemProp;
            return (
              <div key={index}>
                {id} , {first_name} , {last_name} , {email}
              </div>
            );
          })}
        </div>
      )}
      {/* End - display the data */}
    </>
  );
};

export default Test;`;
