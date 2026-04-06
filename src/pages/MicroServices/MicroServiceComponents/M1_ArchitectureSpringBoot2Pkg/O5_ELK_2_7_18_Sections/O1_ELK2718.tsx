import { MainChildArea } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_ELK2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          We use <SpanYellow>ELK</SpanYellow> stack to <SpanYellow>Centralize Microservices Logging</SpanYellow>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_ELK2718;
