/*


*/
import { MainChildArea } from "../../../../../components";

const O4_TestModelRegistered = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Run App</div>
        <div>Run the app, and veify table is created in Database</div>
      </section>
    </MainChildArea>
  );
};

export default O4_TestModelRegistered;
