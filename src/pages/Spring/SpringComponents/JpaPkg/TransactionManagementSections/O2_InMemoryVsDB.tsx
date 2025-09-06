import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, SpanRed, SpanSky } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_InMemoryVsDB = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Let's see few concepts before diving into JPA.
      <section>
        <DivDoubleBorder>Spring In-Memory (also called Persistent Context)</DivDoubleBorder>
        <article>
          <ULDecimal>
            <Li>
              <strong>Definition</strong>
              <div>
                A data storage approach where objects/data are kept in the system’s <SpanSky>RAM</SpanSky> but managed in a way that it can persist
                across certain operations within an application. Often used in ORMs (Object-Relational Mappers) like Hibernate, or in frameworks like
                Entity Framework.
              </div>
            </Li>
            <Li>
              <strong>Characteristics</strong>
              <ULdisc>
                <Li>
                  <strong>Fast access:</strong> Reading/writing from memory is much quicker than disk I/O.
                </Li>
                <Li>
                  <strong>Scoped lifetime:</strong> Often tied to a session, unit of work, or application instance.
                </Li>
                <Li>
                  <strong>Persistence behavior:</strong> Changes to objects may be tracked automatically (dirty checking) and only flushed to the
                  database when requested.
                </Li>
                <Li>
                  <strong>Volatility:</strong> Data is lost if the application stops unless explicitly synchronized to a database.
                </Li>
                <Li>
                  Examples:
                  <ULdisc>
                    <Li>Hibernate Session context</Li>
                    <Li>Entity Framework DbContext</Li>
                    <Li>Redis in-memory store (if persistence is optional)</Li>
                  </ULdisc>
                </Li>
              </ULdisc>
            </Li>
          </ULDecimal>
        </article>
      </section>
      <SpanRed>In-Memory First</SpanRed>
      <ULdisc>
        <Li>
          The application keeps the objects/data in memory for <strong>fast access</strong>.
        </Li>
        <Li>
          Example: Hibernate <strong>Session</strong> holds your entity objects in memory.
        </Li>
        <Li>
          You can read, modify, or delete objects directly in memory <strong>without touching the DB immediately</strong>.
        </Li>
      </ULdisc>
      {/*  */}
      {/*  */}
      <hr />
      {/*  */}
      {/*  */}
      <section>
        <DivDoubleBorder>Database (DB)</DivDoubleBorder>
        <article>
          <ULDecimal>
            <Li>
              <strong>Definition</strong>
              <div>A durable storage system, usually on disk or SSD, that stores structured data and ensures long-term persistence.</div>
            </Li>
            <Li>
              <strong>Characteristics</strong>
              <ULdisc>
                <Li>
                  <strong>Durable:</strong> Data persists even if the application crashes or server restarts.
                </Li>
                <Li>
                  <strong>Supports queries:</strong> Usually comes with query languages (SQL/NoSQL APIs).
                </Li>
                <Li>
                  <strong>Concurrency & Transactions:</strong> Manages multiple users/threads with <strong>ACID</strong> guarantees (Atomicity,
                  Consistency, Isolation, Durability).
                </Li>
                <Li>
                  <strong>Slower than memory:</strong> Disk I/O is slower than RAM access, though optimizations like caching exist.
                </Li>
                <Li>
                  Examples:
                  <ULdisc>
                    <Li>Relational DB: MySQL, PostgreSQL, Oracle</Li>
                    <Li>NoSQL DB: MongoDB, Cassandra</Li>
                  </ULdisc>
                </Li>
              </ULdisc>
            </Li>
          </ULDecimal>
        </article>
      </section>
      <SpanRed>Optional Persistence</SpanRed>
      <ULdisc>
        <Li>
          <strong>“Optional persistence”</strong> means that changes in memory <strong>don’t automatically go to the database</strong> until you
          explicitly request it.
        </Li>
        <Li>
          This allows <strong>batching changes, reducing database I/O</strong>, and <strong>tracking object states</strong>.
        </Li>
        <Li>
          You can read, modify, or delete objects directly in memory <strong>without touching the DB immediately</strong>.
        </Li>
      </ULdisc>
      <SpanRed>In JPA terms</SpanRed>
      <ULdisc>
        <Li>
          Objects in memory are in the <strong>persistent context (first-level cache)</strong>.
        </Li>
        <Li>
          When you call:
          <ULdisc>
            <Li>
              <strong>flush()</strong> → changes in memory are pushed to the database without committing the transaction.
            </Li>
            <Li>
              <strong>commit()</strong> → changes are saved permanently.
            </Li>
          </ULdisc>
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};

export default O2_InMemoryVsDB;
