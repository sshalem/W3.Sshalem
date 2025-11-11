/*


*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O5_TransactionMngmnt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          Spring Boot <strong>Transaction management</strong> is a mechanism that ensures data consistency and integrity when performing multiple
          database operations.
          <br />
          It allows a group of operations to execute as a <strong>single unit of work</strong> — either all succeed or all fail (rolled back).
        </div>
      </section>
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

export default O5_TransactionMngmnt;
