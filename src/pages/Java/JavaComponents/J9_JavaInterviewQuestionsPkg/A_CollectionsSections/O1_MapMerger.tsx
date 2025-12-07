/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_MapMerger = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <p>merging two maps is not a trivial task.</p>
          <p>consider the following example :</p>
          <JavaHighlight javaCode={code}></JavaHighlight>
        </article>
        <p className="my-4">
          the result of : <SpanGrey>map1.putAll(map2)</SpanGrey> will result with one value for <strong>"key1"</strong> overriding the other value.
        </p>
        <p className="my-4">
          The task is to build a <strong>generalized</strong> map-merging method. <br />
          The method I will create should accept two maps and <strong>"merging"</strong> behavior. <br />
          For example, I should be able to use the method to merge the above maps with summing behavior (i.e., key1 will hold 70 as a result) <br />
          I cloud also choose to use multiplying behavior (key1 will hold 1000). <br />
          If the map is type : <SpanGrey>{"Map<Integer, String>"} </SpanGrey> the caller may choose String concatenation as the merging bevaiuor,
        </p>
        Implementation notes:
        <ULDecimal>
          <Li>Please make good use of generics (i.e, no hard-coded types like Integer or String)</Li>
          <Li>Please make good use of generics (i.e, no hard-coded types like Integer or String)</Li>
          <Li>Please make good use of generics (i.e, no hard-coded types like Integer or String)</Li>
          <Li>Please make good use of generics (i.e, no hard-coded types like Integer or String)</Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};
export default O1_MapMerger;

const code = `		Map<String, Integer> map1 = new HashMap<>();
		Map<String, Integer> map2 = new HashMap<>();
		map1.put("key1", 20);
		map1.put("key2", 30);
		map2.put("key3", 40);
		map2.put("key1", 50);`;
