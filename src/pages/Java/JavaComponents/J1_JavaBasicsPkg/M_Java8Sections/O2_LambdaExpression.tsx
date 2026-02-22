/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_LambdaExpression = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">✅ Functional interfaces </article>
        <ULdisc>
          <Li>
            Java lambda functions can be only used with <SpanGrey>functional interfaces</SpanGrey> (Functional Interface have only one method).
          </Li>
          <Li>
            SO to make it more simple
            <ULdisc>
              <Li>Instead of , Creating a class and implementing a Functional Interface in the class</Li>
              <Li>with Lambda expression I can Implement immidiatly.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">❌ Without lambda Expression </article>
        Lets see how we did before lambda expression
        <ULDecimal>
          <Li>
            I create a <SpanGrey>FaunctionInterface</SpanGrey> with one method only
          </Li>
          <Li>
            I implement it in <SpanGrey>Calc</SpanGrey> class
          </Li>
          <Li>
            I make Instance , and use the <SpanGrey>adder</SpanGrey> method from Calc class
          </Li>
        </ULDecimal>
      </section>
      <JavaHighlight javaCode={_1_} />

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">✅ With lambda Expression </article>
        <ULdisc>
          <Li>
            with lambda expression , I immidiately implement the method of the <SpanGrey>FaunctionInterface</SpanGrey> with one line of code
          </Li>
        </ULdisc>
      </section>
      <JavaHighlight javaCode={_2_} />
    </MainChildArea>
  );
};
export default O2_LambdaExpression;

const _1_ = `@FunctionalInterface
interface Adder {
	int add(int valX, int valY);
}


public class Calc implements Adder {
	@Override
	public int add(int x, int y) {
		return x + y;
	}
}


public class MainDemo {
	public static void main(String[] args) {
		Calc calc = new Calc();
		calc.add(5, 10);
	}
}`;

const _2_ = `@FunctionalInterface
interface Adder {
	int add(int valX, int valY);
}
  

public class MainDemo {
	public static void main(String[] args) {

		Adder adder = (valX, valY) -> valX + valY;

		int sum = adder.add(5, 10);
		System.out.println(sum);

	}
}`;
