/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_JpaEntityHashEquals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <p className="my-8 text-xl">🎯 ✅ For JPA Entity (CustomerEntity) </p>
          <div>
            If I am using:
            <ULdisc>
              <Li>Hibernate , Spring Data JPA , Spring Boot</Li>
              <Li>
                then, 👉 <strong>equals()</strong> and <strong>hashCode()</strong> should use{" "}
                <SpanYellow>
                  <strong>ONLY id</strong>
                </SpanYellow>
              </Li>
              <Li>
                Because:
                <ULdisc>
                  <Li>ID defines database identity</Li>
                  <Li>Other fields are mutable</Li>
                  <Li>Hibernate relies on identity by ID</Li>
                  <Li>✔ Correct ✔ Stable ✔ Production-safe</Li>
                </ULdisc>
              </Li>
              <Li>
                💡 In 90% of Backend Microservices
                <ULdisc>
                  <Li>Entity → ID only</Li>
                  <Li>DTO → ID only</Li>
                  <Li>Value objects (like Address, Email) → all fields</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </div>
        </article>
        <hr />
        <p className="my-8 text-xl font-semibold">
          <SpanYellow>Implementation</SpanYellow>
        </p>
        If:
        <ULdisc>
          <Li>
            <SpanYellow>id</SpanYellow> is <SpanYellow>primitive long</SpanYellow>
          </Li>
          <Li>ID is manually assigned</Li>
          <Li>ID never changes</Li>
          <Li>You never rely on entity inside hash-based collections before ID is set</Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
        <p className="my-8 text-xl font-semibold">
          <SpanYellow>equals() , hashCode()</SpanYellow> version :
        </p>
        <JavaHighlight javaCode={_2_} />
        <hr />
        <p className="my-8 text-2xl font-semibold">
          <u>If id is Object Long (and not primitive long)</u>
        </p>
        <p className="my-10">
          Safe JPA Entity Pattern if <SpanYellow>id</SpanYellow> is <SpanYellow>Object Long</SpanYellow> (and not{" "}
          <SpanYellow>primitive long</SpanYellow> )
        </p>
        <ULdisc>
          <Li>
            <SpanYellow>id</SpanYellow> is the Object <SpanYellow>Long</SpanYellow>
          </Li>
          <Li>Two new entities (id null) are NOT equal</Li>
          <Li>hashCode never changes</Li>
          <Li>
            Safe for <SpanYellow>Hibernate proxies</SpanYellow>
          </Li>
          <Li>Safe in collections</Li>
          <Li>
            In hashcode I return <SpanYellow> getClass().hashCode()</SpanYellow> , ensures hashCode() is stable for collections
          </Li>
        </ULdisc>
        <p className="my-8 text-xl font-semibold">
          <SpanYellow>equals() , hashCode()</SpanYellow> version :
        </p>
        <JavaHighlight javaCode={_3_} />
      </section>
    </MainChildArea>
  );
};

export default O2_JpaEntityHashEquals;

const _1_ = `@Entity
@Table(name = "customer_tb")
public class CustomerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}`;

const _2_ = `@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof CustomerEntity that)) return false;
    return id == that.id;  // primitive comparison
}

@Override
public int hashCode() {
    return Long.hashCode(id);  // primitive hashCode
}`;

const _3_ = `@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof CustomerEntity that)) return false;
    return id != null && id.equals(that.id);
}

@Override
public int hashCode() {
    return getClass().hashCode();
}`;
