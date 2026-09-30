/*


*/
import { MainChildArea } from "../../../../../components";
import { Redtext } from "../../../../../components/Highlight";

const O8_8_ClassLock = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <Redtext>Class lock</Redtext> → see section 8.3. <Redtext>static synchronized</Redtext> method.
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_8_ClassLock;
