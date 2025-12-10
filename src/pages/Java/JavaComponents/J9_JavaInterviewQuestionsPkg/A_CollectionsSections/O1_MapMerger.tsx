/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
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
          <ULdisc>
            <Li>
              The task is to build a <strong>generalized</strong> map-merging method.
            </Li>
            <Li>
              The method I will create should accept two maps and <strong>"merging"</strong> behavior.
            </Li>
            <Li>
              For example, I should be able to use the method to merge the above maps with summing behavior (i.e., key1 will hold 70 as a result)
            </Li>
            <Li>I cloud also choose to use multiplying behavior (key1 will hold 1000).</Li>
            <Li>
              If the map is type : <SpanGrey>{"Map<Integer, String>"} </SpanGrey> the caller may choose String concatenation as the merging bevaiuor
            </Li>
          </ULdisc>
        </p>
        Implementation notes:
        <ULDecimal>
          <Li>Please make good use of generics (i.e, no hard-coded types like Integer or String)</Li>
          <Li>It should be efficient (consider cases when one map is much bigger than the other one)</Li>
          <Li>No third parties for thhis task (only standard library)</Li>
          <Li>Java8 lambdas are nice to have, but not a requierment</Li>
        </ULDecimal>
        Bonus part:
        <ULdisc>
          <Li>if we can now merge twomaps, how about merging list of maps.</Li>
          <Li>And , doing in parallel</Li>
          <Li>Design and implement a method to merge a list of maps (I can use java8 streams API)</Li>
          <Li>Note : consider carefully, what can be parallelized and which consditions</Li>
        </ULdisc>
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
