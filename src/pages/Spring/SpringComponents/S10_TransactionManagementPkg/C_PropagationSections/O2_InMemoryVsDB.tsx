/*


*/
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanRed, SpanSky } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_InMemoryVsDB = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      Let's see few concepts before diving into JPA.
      <section>
        <DivDoubleBorder>🔹 1. Spring In-Memory (Java Objects)</DivDoubleBorder>
        <article>
          <ULDecimal>
            <Li>
              This refers to the <strong>Java objects</strong> you create and manipulate in your application code.
            </Li>
            <Li>
              These objects
              <SpanRed>are not yet managed by JPA/Hibernate</SpanRed>
              until you explicitly persist them.
            </Li>
            <Li>
              A data storage approach where objects/data are kept in the system’s <SpanSky>RAM</SpanSky> but managed in a way that it can persist
              across certain operations within an application.
            </Li>
            <Li>
              Example : <br />
              At this point, user is just a regular Java object (POJO), not tracked by JPA.
              <JavaHighlight javaCode={pojo}></JavaHighlight>
            </Li>
          </ULDecimal>
        </article>
        <SpanRed>In-Memory First</SpanRed>
        <ULdisc>
          <Li>
            The application keeps the objects/data in memory for <strong>fast access</strong>.
          </Li>
        </ULdisc>
      </section>
      {/*  */}
      {/*  */}
      <hr />
      <section>
        <DivDoubleBorder>🔹 2. Persistence Context (Managed by EntityManager)</DivDoubleBorder>
        <article>
          <ULdisc>
            <Li>
              This is the <strong>first-level cache</strong> managed by <strong>JPA's EntityManager</strong>. When you persist an entity, it enters
              the <strong>persistence context</strong> and is tracked for changes.
            </Li>
            <Li>
              Key Characteristics:
              <ULdisc>
                <Li>Changes to entities in this context are automatically detected and synchronized with the database during a flush.</Li>
                <Li>Entities are attached (managed).</Li>
                <Li>Avoids unnecessary database queries by caching entities.</Li>
              </ULdisc>
            </Li>
            <Li>
              Example : <br />
              Now user is in the persistence context (saved ,but SQL NOT done yet). <br /> If you change user.setName("Bob"), JPA will detect this and
              update the DB on flush.
              <JavaHighlight javaCode={persist}></JavaHighlight>
            </Li>
          </ULdisc>
        </article>
      </section>
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

const pojo = `User user = new User("sshalem");`;
const persist = `entityManager.persist(user);`;
