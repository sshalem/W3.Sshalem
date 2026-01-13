/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";
import java_lambda_1 from "../../../../../assets/java_lambda_1.jpg";
import java_lambda_2 from "../../../../../assets/java_lambda_2.jpg";
import java_lambda_3 from "../../../../../assets/java_lambda_3.jpg";
import java_lambda_4 from "../../../../../assets/java_lambda_4.jpg";

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
        <ULdisc>
          <Li>Lets see how we did before lambda expression</Li>
          <Li>
            I create a <SpanGrey>FaunctionInterface</SpanGrey> with one method only
          </Li>
          <Li>
            I implement it in <SpanGrey>Calc</SpanGrey> class
          </Li>
          <Li>
            I make Instance , and use the <SpanGrey>adder</SpanGrey> method from Calc class
          </Li>
        </ULdisc>
      </section>
      <JavaHighlight javaCode={_1_} />

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">✅ With lambda Expression </article>
        <ULdisc>
          <Li>
            with lambda expression , we immidiately implement the method of the <SpanGrey>FaunctionInterface</SpanGrey>
          </Li>
        </ULdisc>
      </section>
      <JavaHighlight javaCode={_2_} />

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl">✅ lambda Expression how its done</article>
        Lets see How I get this one line of lambda expression
        <IMG img_name={java_lambda_1}></IMG>
        <ULdisc>
          <Li>remove the text marked in red , including the single curly bracked I marked</Li>
          <Li>and add a right arrow</Li>
          <Li>this is how code looks</Li>
          <IMG img_name={java_lambda_2}></IMG>
          <Li>Since we don't have a massive logic, and It's a one line of code for logic we can narrow down more</Li>
          <Li>remove the two curly brackes + remove the return word</Li>
          <Li>Now we get a One line code</Li>
          <IMG img_name={java_lambda_3}></IMG>
          <Li>
            Since we know we have 2 arguments to the <SpanGrey>FuntionalInterface</SpanGrey> and they are known
          </Li>
          <Li>thus, we can remove the type of the argument</Li>
          <Li>final code narrowed down to a very small code</Li>
          <IMG img_name={java_lambda_4}></IMG>
        </ULdisc>
      </section>
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
}
`;
