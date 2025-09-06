import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanTeal } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O4_HibernateSession = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>In Hibernate, a Session is the primary interface used to interact with the database.</div>
        <article>
          <ULdisc>
            <Li>
              <SpanTeal>Definition :</SpanTeal> <br />A <strong>Session</strong> in Hibernate is a lightweight, single-threaded object that represents
              a connection (a unit of work) between the Java application and the database.
            </Li>
            <Li>
              <SpanTeal>Responsibilities :</SpanTeal>
              <ULdisc>
                <Li>
                  It acts as a <strong>bridge</strong> between the application’s objects and database tables.
                </Li>
                <Li>Provides methods to create, read, update, and delete (CRUD) persistent objects.</Li>
                <Li>
                  Manages the <strong>first-level cache</strong> (objects stored in memory during a session).
                </Li>
                <Li>
                  Handles <strong>transactions</strong>, queries (HQL/SQL), and object state transitions (Transient → Persistent → Detached).
                </Li>
              </ULdisc>
            </Li>
            <Li>
              <SpanTeal>Lifecycle :</SpanTeal>
              <ULdisc>
                <Li>A Session is created by a SessionFactory.</Li>
                <Li>Typically opened when you start a unit of work and closed once the work is finished.</Li>
                <Li>It should not be kept open for too long because it holds resources.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
      {/*  */}
      {/*  */}
      {/*  */}
      <hr />
      {/*  */}
      {/*  */}

      <section>
        <DivDoubleBorder>JPA Repository with Hibernate</DivDoubleBorder>
        <div className="mb-8">
          ✅ In short:
          <p className="my-2 ml-8">
            With Spring Boot JPA repositories, you don’t deal with Session directly — but every call goes through one, managed by Spring and
            Hibernate.
          </p>
        </div>
        <section>
          <article className="mt-4">
            <div>
              <SpanTeal> 1. Spring Data JPA and EntityManager</SpanTeal>
            </div>
            <ULdisc>
              <Li>
                In JPA (the standard), the main interface to interact with the database is <strong>EntityManager</strong>.
              </Li>
              <Li>
                When you use <strong>JpaRepository</strong>, Spring injects an EntityManager for you.
              </Li>
              <Li>
                Underneath, <strong>Hibernate implements JPA</strong>, so Spring actually provides a Hibernate-backed <strong>EntityManager</strong>.
              </Li>
            </ULdisc>
          </article>

          <hr />
          {/*  */}
          {/*  */}

          <article className="mt-4">
            <div>
              <SpanTeal>2. EntityManager and Hibernate Session</SpanTeal>
            </div>
            <ULdisc>
              <Li>
                Hibernate’s Session is its <strong>native API</strong>.
              </Li>
              <Li>
                The JPA EntityManager is essentially a <strong>wrapper around the Hibernate Session</strong>.
                <ULdisc>
                  <Li>
                    <strong>entityManager.unwrap(Session.class)</strong> gives you the Hibernate Session.
                  </Li>
                </ULdisc>
              </Li>
              <Li>
                So when you call <strong>userRepository.save(user)</strong>, Spring → JPA → Hibernate → Session → SQL.
              </Li>
            </ULdisc>
          </article>

          <hr />
          {/*  */}
          {/*  */}

          <article className="mt-4">
            <div>
              <SpanTeal>3. Transaction Boundaries</SpanTeal>
            </div>
            <ULdisc>
              <Li>
                In Spring Boot, transactions are usually managed with <strong>@Transactional</strong>.
              </Li>
              <Li>
                Within a transaction:
                <ULdisc>
                  <Li>
                    Spring opens a Hibernate <strong>Session</strong> and binds it to the <strong>current thread</strong>.
                  </Li>
                  <Li>All repository methods inside that transaction share the same Session.</Li>
                  <Li>
                    This enables features like:
                    <ULdisc>
                      <Li>
                        <strong>First-level cache</strong> (entities are fetched once and reused in the session).
                      </Li>
                      <Li>
                        <strong>Dirty checking</strong> (Hibernate tracks entity changes and flushes SQL automatically before commit).
                      </Li>
                    </ULdisc>
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
              <SpanTeal>4. Example</SpanTeal>
            </div>
            <JavaHighlight javaCode={transaction_example}></JavaHighlight>
          </article>

          <hr />
          {/*  */}
          {/*  */}

          <article className="mt-4">
            <div>
              <SpanTeal>5. Key Flow</SpanTeal>
            </div>
            <ULdisc>
              <Li>
                Repository → <strong>EntityManager</strong> → Hibernate <strong>Session</strong> → Database.
              </Li>
              <Li>
                The Session is usually <strong>invisible to us</strong> because Spring manages it.
              </Li>
              <Li>
                But if needed, you can access it by define the <strong>EntityManager</strong> and annotate it with
                <strong>@PersistenceContext</strong>
                <JavaHighlight javaCode={entitymanager}></JavaHighlight>
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

export default O4_HibernateSession;

const transaction_example = `@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void updateUserEmail(Long id, String newEmail) {
        // Behind the scenes: a Hibernate Session is opened & bound
        User user = userRepository.findById(id).orElseThrow();
        
        // Modify entity
        user.setEmail(newEmail);

        // Since we are inside a @TRansactionl method ,
        // No explicit save needed! Hibernate Session will detect change (Dirty Checking)
        // and flush UPDATE SQL before transaction commits.
    }
}`;

const entitymanager = `@PersistenceContext
private EntityManager em;

public void doSomething() {
    Session session = em.unwrap(Session.class);
    // Now you can use Hibernate-specific APIs
}`;
