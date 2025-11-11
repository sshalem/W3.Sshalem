/*


*/
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanBlue, SpanGreen, SpanRed, SpanSky } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_SaveFlushCommit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        Note: actions as SAVE, UPDATE , DELETE ,must be performed inside a a <SpanRed>Transactional</SpanRed> method. <br />
        <ULdisc>
          <Li>method must be public when perfroming any of these actions (SAVE, UPDATE, DELETE)</Li>
          <Li>
            must annotated method with <SpanGreen>@Transactional</SpanGreen> to keep the session open as long
          </Li>
          <Li></Li>
        </ULdisc>
        <br />I will show , what happens when <SpanBlue>SAVE</SpanBlue> action is perfrom. It is very important to understand since it will give a
        great understanding of creating these sactions.
        <br />
        In addition, In the topic of <SpanGreen>Transaction Management</SpanGreen> it becomes essential
      </div>
      <section>
        <DivDoubleBorder>save() , flush() , commit()</DivDoubleBorder>
        <article>
          <ul className="my-4 ml-8">
            <Li>
              <SpanGreen>save()</SpanGreen>
              <ULdisc>
                <Li>
                  <strong>Purpose</strong>: Register a new or updated entity in the <SpanSky>persistence context</SpanSky> (Hibernate’s first-level
                  cache).
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

export default O3_SaveFlushCommit;

const save_parent = `Parent p = new Parent();
p.setName("John");
parentRepository.save(p);  // registered in persistence context , No SQL necessarily sent yet`;

const flush_parent = `Parent p = new Parent();
p.setName("John");
parentRepository.save(p);  // in-memory
parentRepository.flush();  // SQL INSERT executed now`;

const commit_parent = `@Transactional
public void updateUser(Long id, String newName) {
    User user = userRepo.findById(id).orElseThrow();
    user.setName(newName); // 1️⃣ in memory, Hibernate marks the entity as dirty (changed).

    userRepo.save(user); // 2️⃣ JPA checks if it’s new or existing. If exist → schedule an UPDATE.
    // No SQL executed yet (just staged in persistence context).
    // Still no flush/commit.
 
} 
// 3️⃣ Commit (end of @Transactional method) . 
// (commit happens here automatically) 
// On method exit, Spring calls commit: (Spring ends the transaction. ) 
// But , Before commit, 
//      Hibernate automatically calls flush 
//      and Executes all staged SQL.
// Then commit happens: Changes are permanently stored in DB. 
// TX is closed`;
