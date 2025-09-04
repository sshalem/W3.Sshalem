import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanGreen } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_SaveFlushCommit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <DivDoubleBorder>save() , flush() , commit()</DivDoubleBorder>
        <article>
          <ul className="my-4 ml-8">
            <Li>
              <SpanGreen>save()</SpanGreen>
              <ULdisc>
                <Li>
                  <strong>Purpose</strong>: Register a new or updated entity in the persistence context.
                </Li>
                <Li>
                  <strong>Behavior</strong>:
                  <ULdisc>
                    <Li>The entity becomes managed.</Li>
                    <Li>
                      Hibernate tracks changes for <strong>dirty checking</strong>
                    </Li>
                    <Li>No SQL is guaranteed immediately; SQL may be delayed until flush or commit.</Li>
                  </ULdisc>
                </Li>
                <Li>
                  <strong>Usage</strong>
                  <JavaHighlight javaCode={save_parent}></JavaHighlight>
                </Li>
              </ULdisc>
            </Li>

            <Li>
              <SpanGreen>flush()</SpanGreen>
              <ULdisc>
                <Li>
                  <strong>Purpose</strong> : Force Hibernate to synchronize the in-memory state with the database immediately.
                </Li>
                <Li>
                  <strong>Behavior</strong>:
                  <ULdisc>
                    <Li>Executes INSERT, UPDATE, DELETE for all managed entities in the current persistence context.</Li>
                    <Li>Does not commit the transaction — changes can still be rolled back.</Li>
                  </ULdisc>
                </Li>
                <Li>
                  <strong>Usage</strong>
                  <JavaHighlight javaCode={flush_parent}></JavaHighlight>
                </Li>
              </ULdisc>
            </Li>

            <Li>
              <SpanGreen>commit()</SpanGreen>
              <ULdisc>
                <Li>
                  <strong>Purpose</strong> : Finalize the transaction.
                </Li>
                <Li>
                  <strong>Behavior</strong>:
                  <ULdisc>
                    <Li>Automatically triggers a flush() if not done already.</Li>
                    <Li>Makes all changes permanent in the database.</Li>
                    <Li>After commit, changes cannot be rolled back.</Li>
                  </ULdisc>
                </Li>
                <Li>
                  <strong>Usage</strong>
                  <JavaHighlight javaCode={commit_parent}></JavaHighlight>
                </Li>
              </ULdisc>
            </Li>
          </ul>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_SaveFlushCommit;

const save_parent = `Parent p = new Parent();
p.setName("John");
parentRepository.save(p);  // registered in persistence context , No SQL necessarily sent yet`;

const flush_parent = `Parent p = new Parent();
p.setName("John");
parentRepository.save(p);  // in-memory
parentRepository.flush();  // SQL INSERT executed now`;

const commit_parent = `@Transactional
public void demo() {
    Parent p = new Parent();
    p.setName("John");
    parentRepository.save(p);  // in memory
    // flush optional
} // transaction commits here automatically`;
