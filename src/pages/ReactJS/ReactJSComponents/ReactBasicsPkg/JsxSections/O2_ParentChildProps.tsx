/*


*/
import { MainChildArea } from "../../../../../components";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";
import Question from "./../../../../../components/ui/Question";
import Answer from "./../../../../../components/ui/Answer";
import { JsxHighlight } from "../../../../../components/Highlight";
import { Link } from "react-router-dom";

const O2_ParentChildProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        {/* <p className="my-4 text-lg font-semibold">🧩 Lets look in a situation where </p> */}
        <article>
          Lets look in a situation where I have a parent and child components and :
          <ULdisc>
            <Li>
              In parent component I have <SpanGrey>const [data, setData] = useState([]);</SpanGrey>
            </Li>
            <Li>I pass the props setData to the child</Li>
          </ULdisc>
          <Question>How can I access the data in the parent?</Question>
          <Answer>
            <p>
              To access the data state in your parent component, even after passing <SpanGrey>setData</SpanGrey> to the child component, <br />
              you simply use the data variable directly in the parent. <br />I used this approach when I implement my{" "}
              <Link className="tracking-wider text-blue-500" to={"http://localhost:5173/reactJS/pagination#2.Defaultconfig"}>
                Pagination Code
              </Link>{" "}
              project. (Link )
              <br />
              Here's a breakdown of how it works:
            </p>
            <article className="my-4">
              🔍 Explanation
              <ULdisc>
                <Li>
                  <SpanGrey>setData</SpanGrey> is passed to the child so it can update the parent's data state.
                </Li>
                <Li>The parent still owns the data state, so it can access and render it anytime.</Li>
                <Li>
                  When the child calls <SpanGrey>setData</SpanGrey> , it updates the parent's state, triggering a re-render with the new data.
                </Li>
              </ULdisc>
            </article>
          </Answer>
          <p className="text-lg font-semibold"> ✅ Parent Component</p>
          <JsxHighlight jsxCode={parent}></JsxHighlight>
          <p className="text-lg font-semibold">🧒 Child Component</p>
          <JsxHighlight jsxCode={child}></JsxHighlight>
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};
export default O2_ParentChildProps;

const parent = `import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent setData={setData} />
      
      {/* Accessing and displaying data */}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;`;

const child = `import React from 'react';
import SpanBlue from './../../../../../components/Highlight/SpanBlue';

const ChildComponent = ({ setData }) => {
  const handleClick = () => {
    // Simulate fetching or generating new data
    setData(['Item 1', 'Item 2', 'Item 3']);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Update Data</button>
    </div>
  );
};

export default ChildComponent;`;
