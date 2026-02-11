/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_Database_Py = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold"></article>
        <ULdisc>
          <Li>
            create <SpanYellow>database.py</SpanYellow> file
          </Li>
          <Li>
            this <SpanYellow>config.py</SpanYellow> will have
            <ULdisc>
              <Li>
                Database engine (same as Spring boot <SpanYellow> DataSource + Dialect + Connection Pool + Execution Layer</SpanYellow> )
                <ULdisc>
                  <Li>Execution (in Python you execute via Engine/Connection; in Java you’d use JdbcTemplate or Hibernate)</Li>
                </ULdisc>
              </Li>
              <Li>
                Session ORM unit of work (same as Spring boot <SpanYellow>EntityManager (EntityManagerFactory)</SpanYellow>)
                <ULdisc>
                  <Li>Session (SQLAlchemy ORM) ≈ EntityManager</Li>
                </ULdisc>
              </Li>
              <Li>
                Base (DeclarativeBase) A shared ORM base class and mapper registry + metadata
                <ULdisc>
                  <Li>In Spring boot , JPA entity system managed by the EntityManagerFactory; entities are POJOs annotated with @Entity.</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </Li>
          {/* <PythonHighlight pythonCode={_1_} /> */}
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_Database_Py;

const _1_ = `app/
├── main.py                    # like SpringBootApplication
│
├── core
│   ├── __init__.py
│   ├── config.py              # application.properties / application.yml
│   └── database.py            # DataSource + EntityManagerFactory`;
