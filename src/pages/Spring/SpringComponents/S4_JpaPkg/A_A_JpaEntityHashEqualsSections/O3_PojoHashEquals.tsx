/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_PojoHashEquals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <p className="my-8 text-xl">🎯 ✅ For Plain POJO (Customer) </p>
          <div>
            Now here is the key point , 👉 A plain POJO has <strong>no ORM rules</strong> So the decision depends on what it represents.
          </div>
        </article>
        <article className="my-8">
          <ULdisc>
            <Li>
              <p className="text-xl">
                <SpanYellow>Case A </SpanYellow> — It represents the <strong>SAME real-world customer</strong>
              </p>
              <ULdisc>
                <Li>
                  If <strong>Customer</strong> is just a <strong>DTO copy of the entity</strong>:
                </Li>
                <Li>Use ID only for equals() and hashCode().</Li>
                <Li>✔ This is the most common case in microservices.</Li>
              </ULdisc>
            </Li>
            <Li>
              <p className="text-xl">
                <SpanYellow>Case B</SpanYellow> — It represents DATA equality (value comparison)
              </p>
              <ULdisc>
                <Li>
                  If two objects should be equal <strong>only when all fields match</strong> , Then use all fields.
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
        <hr />
        <p className="my-8 text-xl font-semibold">
          <SpanYellow>POJO Class :</SpanYellow>
        </p>
        <JavaHighlight javaCode={_1_} />
        <p className="my-8 text-xl font-semibold">
          <SpanYellow>equals() , hashCode()</SpanYellow> version :
        </p>
        <ULdisc>
          <Li>
            I used <SpanYellow>instanceof</SpanYellow> instead of <SpanYellow>getClass()</SpanYellow>
          </Li>
          <Li>
            I add the line <SpanYellow> if (this == obj) return true</SpanYellow> , which IntelliJ did not add it , But Spring boot Did add it
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={_2_} />
      </section>
    </MainChildArea>
  );
};

export default O3_PojoHashEquals;

const _1_ = `public class Customer {    
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}`;

const _2_ = `    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true; // I add this line (Spring boot implementation is better than IntelliJ)
        if (!(obj instanceof Customer other)) return false;
        return id == other.id &&
                Objects.equals(email, other.email) &&
                Objects.equals(firstName, other.firstName) &&
                Objects.equals(lastName, other.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, email);
    }`;
