import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey, SpanTeal } from "../../../../../components/Highlight";

const O5_SpringTxMngmnt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          <strong>Transaction management</strong> in Spring is the mechanism by which Spring ensures that a group of database operations are executed
          as a <strong>single unit of work</strong> — meaning all succeed or all fail.
        </div>
        <p className="my-6 text-xl font-semibold">🔑 Key Concepts</p>
      </section>
      {/*  */}
      {/*  */}
      {/*  */}
      <hr />
      {/*  */}
      {/*  */}

      <section>
        <section>
          <article className="mt-4">
            <div>
              <SpanTeal> 1. Transaction</SpanTeal>
            </div>
            <ULdisc>
              <Li>A logical unit of work that can include one or more database operations (queries, inserts, updates, deletes).</Li>
              <Li>
                Guarantees <SpanGrey>ACID</SpanGrey> properties:
                <ULdisc>
                  <Li>
                    <strong>A</strong>tomicity: All or nothing.
                  </Li>
                  <Li>
                    <strong>C</strong>onsistency: Keeps DB valid.
                  </Li>
                  <Li>
                    <strong>I</strong>solation: Transactions don’t interfere incorrectly.
                  </Li>
                  <Li>
                    <strong>D</strong>urability: Once committed, data is saved.
                  </Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </article>

          <hr />
          {/*  */}
          {/*  */}

          <article className="mt-4">
            <div>
              <SpanTeal>2. Spring’s Role</SpanTeal>
            </div>
            <ULdisc>
              <Li>
                Spring provides a declarative way (with <strong>@Transactional</strong>) to define where transactions start and end.
              </Li>
              <Li>
                Spring automatically:
                <ULdisc>
                  <Li>Begins a transaction before your method runs.</Li>
                  <Li>Commits the transaction if the method finishes normally.</Li>
                  <Li>Rolls back the transaction if an exception occurs.</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </article>

          <hr />
          {/*  */}
          {/*  */}

          <article className="mt-4">
            <div>
              <SpanTeal>3. How It Works</SpanTeal>
            </div>
            <ULdisc>
              <Li>
                You annotate your service-layer methods with <strong>@Transactional</strong>.
              </Li>
              <Li>
                Under the hood:
                <ULdisc>
                  <Li>
                    Spring creates a <strong>proxy</strong> around your class.
                  </Li>
                  <Li>The proxy starts/commits/rolls back a transaction around your method execution.</Li>
                  <Li>The actual DB work is done by Hibernate (or JPA) within that transaction.</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </article>

          <hr />
          {/*  */}
          {/*  */}
        </section>
      </section>
    </MainChildArea>
  );
};

export default O5_SpringTxMngmnt;
