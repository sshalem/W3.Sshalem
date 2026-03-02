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
            <Li></Li>
            <Li>this is 100% correct for normal POJO.</Li>
          </ULdisc>
        </article>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O2_PojoHashEquals;

const _1_ = `@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof CustomerEntity)) return false;
    CustomerEntity that = (CustomerEntity) o;
    return Objects.equals(id, that.id);
}

@Override
public int hashCode() {
    return Objects.hash(id);
}`;
