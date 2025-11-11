/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O4_PhantomRead = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <p className="my-6 text-xl font-semibold">🔑 Isolation : Data anomalies</p>
        <article>
          <div className="mt-4">
            There three classic <SpanGrey>data anomalies</SpanGrey> that can occur in DB transactions under different <SpanGrey>isolation</SpanGrey>
            levels. <br />
            These are fundamental concepts in transaction management and concurrency control — especially important when tuning Spring Boot
            applications for data consistency and performance. See more data in section{" "}
            <Anchor description="isolation" href="/spring/transaction-management/isolation"></Anchor>
            <ULdisc>
              <Li>👉 Dirty Reads</Li>
              <Li>👉 Non-Repeatable Reads</Li>
              <Li>👉 Phantom Reads</Li>
            </ULdisc>
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_PhantomRead;
