/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O2_LocalStorage = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">Store/Read data</article>
        <ULdisc>
          <Li>to Store data , same code as store to SessionStorage</Li>
          <Li>to Read data , also same code as to Read from SessionStorage</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_LocalStorage;
