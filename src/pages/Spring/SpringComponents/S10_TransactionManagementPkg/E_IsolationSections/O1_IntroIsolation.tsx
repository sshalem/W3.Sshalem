import { Anchor, MainChildArea } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import TableIsolationLevelCompare from "../../../../../components/Tables/TableIsolationLevelCompare";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroIsolation = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <strong>JavaTechie </strong>Video Links
      </div>
      <ULdisc>
        <Li>
          <Anchor description="Spring Transaction Management : End-to-End Guide" href="https://www.youtube.com/watch?v=REXALUYxDIs" />
        </Li>
        <Li>
          <Anchor description="video - 1" href="https://www.youtube.com/watch?v=q6SidSElNbI" />
        </Li>
        <Li>
          <Anchor description="Isolation " href="https://www.youtube.com/watch?v=a9z9x4bxmK4" />
        </Li>
        <Li>
          <Anchor description="Propagation" href="https://www.youtube.com/watch?v=NKuo8hyIwgQ" />
        </Li>
        <Li>
          <Anchor description="How Spring @Transactional Works Internally" href="https://www.youtube.com/watch?v=eWl8G7NDKqo" />
        </Li>
      </ULdisc>

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
      <TableIsolationLevelCompare></TableIsolationLevelCompare>
    </MainChildArea>
  );
};

export default O1_IntroIsolation;
