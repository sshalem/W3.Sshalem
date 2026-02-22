/*


*/
import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import java_lambda_1 from "../../../../../assets/java_lambda_1.jpg";
import java_lambda_2 from "../../../../../assets/java_lambda_2.jpg";
import java_lambda_3 from "../../../../../assets/java_lambda_3.jpg";
import java_lambda_4 from "../../../../../assets/java_lambda_4.jpg";

const O3_LambdaExpressionCreation = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">✅ lambda Expression how its done</article>
        Lets see How I get this one line of lambda expression
        <IMG img_name={java_lambda_1}></IMG>
        <div className="text-xl font-semibold underline">Step 1</div>
        <ULdisc>
          <Li>remove the text marked in red , including the single curly bracked I marked</Li>
          <Li>and add a right arrow</Li>
          <Li>this is how code looks on the right</Li>
          <IMG img_name={java_lambda_2}></IMG>
        </ULdisc>
        <div className="text-xl font-semibold underline">Step 2</div>
        <ULdisc>
          <Li>Since we don't have a massive logic, and It's a one line of code for logic we can narrow down more</Li>
          <Li>remove the two curly brackes + remove the return word</Li>
          <Li>Now we get a One line code (code the right )</Li>
          <IMG img_name={java_lambda_3}></IMG>
        </ULdisc>
        <div className="text-xl font-semibold underline">Step 3</div>
        <ULdisc>
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
export default O3_LambdaExpressionCreation;
