/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, Redtext } from "../../../../../components/Highlight";

const O5_PassStatement = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-4 text-2xl">⭐ Pass statement</p>
          <ULdisc>
            <Li>
              <Redtext>if</Redtext> statements cannot be empty, but if you for some reason have an if statement with no content, put in the
              <Redtext>pass</Redtext> statement to avoid getting an error.
            </Li>
            <Li>
              The <Redtext>pass</Redtext> statement is a <Redtext>null</Redtext> operation - nothing happens when it executes. It serves as a
              placeholder.
            </Li>
            <Li>
              A comment is ignored by Python, but pass is an actual statement that gets executed (though it does nothing). You need pass where Python
              expects a statement, not just a comment.
            </Li>
          </ULdisc>
          <PythonHighlight pythonCode={_1_} />
          We can use <Redtext>Pass</Redtext> in a function :
          <PythonHighlight pythonCode={_2_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O5_PassStatement;

const _1_ = `a = 33

if a > 20:
  pass
  
score = 85

if score > 90:
  pass # This is excellent
print("Score processed")`;

const _2_ = `def calculate_discount(price):
  pass # TODO: Implement discount logic

# Function exists but doesn't do anything yet`;
