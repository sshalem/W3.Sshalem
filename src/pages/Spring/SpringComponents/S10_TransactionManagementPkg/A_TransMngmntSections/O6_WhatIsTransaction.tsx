import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGreen, SpanGrey } from "../../../../../components/Highlight";

const O6_WhatIsTransaction = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <p className="my-6 text-xl font-semibold">🔑 What Is a Transaction</p>
        <article>
          <div className="mt-4">
            <ULdisc>
              <Li>A logical unit of work that can include one or more database operations (queries, inserts, updates, deletes).</Li>
              <Li>
                Guarantees <SpanGreen>ACID</SpanGreen> properties , and A transaction must follow the <SpanGreen>ACID</SpanGreen> properties:
                <ULdisc>
                  <Li>
                    <SpanGrey>
                      <strong>A</strong>tomicity
                    </SpanGrey>
                    : A transaction should be treated as a single unit of operation, which means either the entire sequence of operations is
                    successful or unsuccessful
                  </Li>
                  <Li>
                    <SpanGrey>
                      <strong>C</strong>onsistency
                    </SpanGrey>
                    : The DB remains in a consistent state before and after the transaction.
                  </Li>
                  <Li>
                    <SpanGrey>
                      <strong>I</strong>solation
                    </SpanGrey>
                    : Transactions do not affect each other’s intermediate states. There may be many transaction processing with the same data set at
                    the same time. Each transaction should be isolated from others to prevent data corruption.
                  </Li>
                  <Li>
                    <SpanGrey>
                      <strong>D</strong>urability
                    </SpanGrey>
                    : Once committed, the changes are permanent.
                  </Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </div>
        </article>
      </section>
      {/*  */}
      {/*  */}

      <section>
        <p className="my-6 text-xl font-semibold">🔑 Spring’s Role</p>
        <article>
          <div className="mt-4">
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
          </div>
        </article>
      </section>

      {/*  */}
      {/*  */}

      <section>
        <p className="my-6 text-xl font-semibold">🔑 How It Works</p>
        <article>
          <div className="mt-4">
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
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O6_WhatIsTransaction;
