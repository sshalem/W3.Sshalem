import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O6_LazyCascadeDetach = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <article className="my-8">
          <span className="text-xl font-semibold">What CascadeType.DETACH means?</span>
          <ULdisc>
            <Li>
              <strong>"Detach"</strong> means the entity is <strong>removed</strong> from the <strong>persistence context</strong> (the first-level
              cache).
            </Li>
            <Li>
              When you call <strong>entityManager.detach(parent)</strong> on a parent, JPA will also <strong>detach</strong> all its children{" "}
              <strong>if</strong> the relationship has <strong>cascade = CascadeType.DETACH</strong>.
            </Li>
            <Li>
              After detaching:
              <ULdisc>
                <Li>Changes you make won’t be automatically synchronized to the database.</Li>
                <Li>
                  You’d need to call <strong>merge()</strong> or <strong>save</strong> again for updates.
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8">
          <span className="text-xl font-semibold">With JpaRepository</span>
          <div className="my-4">
            Spring Data JPA repositories internally use the <strong>EntityManager</strong>.
          </div>

          <ULdisc>
            <Li>
              If you call <strong>repository.save(parent)</strong>, it eventually does <strong>persist</strong> or <strong>merge</strong> →{" "}
              <SpanRed>not detach</SpanRed>.
            </Li>
            <Li>
              Repositories <SpanRed>do not expose a detach()</SpanRed> method.
            </Li>
            <Li>
              That means <strong>CascadeType.DETACH</strong> will not be triggered automatically when using repositories, because{" "}
              <SpanRed>repository methods don’t call detach</SpanRed>.
            </Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8">
          <span className="text-xl font-semibold">1. Managed entity (attached)</span>
          <div className="my-4">When an entity is inside the persistence context (attached/managed): </div>

          <ULdisc>
            <Li>Any change you make to it is tracked by Hibernate (dirty checking).</Li>
            <Li>At flush/commit, Hibernate automatically generates the SQL to update the DB.</Li>
            <JavaHighlight javaCode={attached_entity}></JavaHighlight>
          </ULdisc>
        </article>

        <article className="my-8">
          <span className="text-xl font-semibold">2. Detached entity</span>
          <div className="my-4">
            When you call <strong>em.detach(entity)</strong> or the persistence context is closed:{" "}
          </div>

          <ULdisc>
            <Li>The entity is no longer tracked.</Li>
            <Li>Changes you make are not recorded.</Li>
            <Li>At commit, Hibernate won’t generate any SQL for it.</Li>
            <JavaHighlight javaCode={de_attached_entity}></JavaHighlight>
          </ULdisc>
        </article>

        <article className="my-8">
          <span className="text-xl font-semibold">3. Re-attaching (merge)</span>
          <div className="my-4">If you want the DB to be updated, you must reattach it with merge():</div>

          <ULdisc>
            <Li>⚠️ Note: merge() returns a new managed instance. The passed object (parent) stays detached.</Li>
            <JavaHighlight javaCode={re_attach}></JavaHighlight>
          </ULdisc>
        </article>
        <hr />

        <article className="my-8">
          ✅ Summary
          <ULdisc>
            <Li>CascadeType.DETACH is supported in JPA.</Li>
            <Li>But JpaRepository itself never calls detach().</Li>
            <Li>To make use of it, you must explicitly call entityManager.detach(entity).</Li>
          </ULdisc>
        </article>
        <hr />
        <article className="my-8">
          ✅ So the rule is
          <ULdisc>
            <Li>Detached entity = just a plain Java object (POJO).</Li>
            <Li>No matter what you do to it, nothing will be flushed to the DB unless you call merge().</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O6_LazyCascadeDetach;

const attached_entity = `Parent parent = em.find(Parent.class, 1L);
parent.setName("new name"); 
// No explicit save needed — will update DB on commit
`;

const de_attached_entity = `Parent parent = em.find(Parent.class, 1L);
em.detach(parent);

parent.setName("changed name"); 
// No effect in DB — Hibernate ignores it
`;

const re_attach = `Parent parent = em.find(Parent.class, 1L);
em.detach(parent);

parent.setName("changed name"); 

em.merge(parent); // now changes will be applied at commit
`;
