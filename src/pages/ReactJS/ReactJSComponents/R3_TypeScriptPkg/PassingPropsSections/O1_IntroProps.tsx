/*


*/
import { MainChildArea } from "../../../../../components";

const O1_IntroProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-xl">✅ Passing Props to a Child Component in React + TypeScript</p>
        <div>
          Here’s a clean and practical explanation of how to pass props to a child component in React using TypeScript, with examples for both simple
          types and more complex interfaces.
        </div>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroProps;
