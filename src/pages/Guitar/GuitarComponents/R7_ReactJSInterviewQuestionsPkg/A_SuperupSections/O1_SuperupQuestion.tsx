import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O1_SuperupQuestion = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">ReactJS Exercise</article>
        <div>
          Create a simple salary execution application using the data found in <SpanGrey>MOCK_DATA.json</SpanGrey> (attached) with the following
          functionality.
        </div>
        <div className="my-4">
          <p>
            <strong>Listing of all employees</strong>
          </p>
          Via the list the user should be able to:
          <ULDecimal>
            <Li>Sort data</Li>
            <Li>View them in pages</Li>
            <Li>Select all or individual rows</Li>
          </ULDecimal>
        </div>
        <div className="my-4">
          <p>
            <strong>Perform salary transactions</strong>
          </p>
          With the selected employees the user should be able to:
          <ULDecimal>
            <Li>Execute payments</Li>
            <Li>See the payment status for each employee</Li>
            <Li>Cancel executed payments</Li>
          </ULDecimal>
        </div>
        The code should be uploaded in a git repository and a clone link should be sent as a response.
      </section>
    </MainChildArea>
  );
};

export default O1_SuperupQuestion;
