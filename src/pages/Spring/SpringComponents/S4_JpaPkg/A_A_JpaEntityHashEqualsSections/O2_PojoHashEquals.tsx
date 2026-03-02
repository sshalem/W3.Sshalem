/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O2_PojoHashEquals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <p>🎯 For a normal POJO , General Java Rule (Not JPA Specific) :</p>
          <ULdisc>
            <Li>👉 If it represents pure data without identity → use all fields</Li>
            <Li>Value Object = identity defined by attributes</Li>
            <Li>this is 100% correct for normal POJO.</Li>
          </ULdisc>
        </article>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O2_PojoHashEquals;

const _1_ = `public class Customer {    
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}`;

const _2_ = `@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Customer)) return false;
    Customer that = (Customer) o;
    return Objects.equals(id, that.id);
}

@Override
public int hashCode() {
    return Objects.hash(id);
}`;
