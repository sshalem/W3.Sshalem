/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, PythonHighlight } from "../../../../../components/Highlight";

const O1_LambdaAnonymosFunctions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-xl">lambda (anonymous functions)</article>
        <ULdisc>
          <Li>A lambda expression in Python is a small, anonymous function defined in a single line.</Li>
          <Li>No function name</Li>
          <Li>One expression only (no statements like if/for/while blocks)</Li>
          <Li>Automatically returns the result</Li>
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
        <hr />
        <div className="my-8 font-semibold">❌ Code without lambda</div>

        <ULdisc>
          <Li>We have a function with one line only that perfoms add operation </Li>
          <Li>I call the function , then print it</Li>
          <PythonHighlight pythonCode={_2_} />
        </ULdisc>

        <hr />
        <div className="my-8 font-semibold">✅ Code With lambda</div>

        <ULdisc>
          <Li>I don't need a function with one line</Li>
          <Li>with lambda expression, I implement write away the expression I want </Li>
          <Li>(Unlike in java where I must have a Functionl Interface , before I can use it with lambda)</Li>
          <PythonHighlight pythonCode={_3_} />
          Java Comparison (Since I Know Spring Boot 😉)
          <JavaHighlight javaCode={_4_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_LambdaAnonymosFunctions;

const _1_ = `lambda arguments: expression`;

const _2_ = `def add(x, y):
    return x + y


print(add(9, 5))`;

const _3_ = `add = lambda a, b: a + b
print(add(9, 5))`;

const _4_ = `@FunctionalInterface
interface Adder {
	int add(int valX, int valY);
}


Adder adder = (valX, valY) -> valX + valY;
System.out.println(adder.add(5, 10));
`;
