import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O5_TextStr = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <SpanYellow>Strings</SpanYellow> in python are surrounded by either
        <ULdisc>
          <Li>
            <Redtext>single</Redtext> quotation marks
          </Li>
          <Li>
            or <Redtext>double</Redtext> quotation marks
          </Li>
          <Li>
            <Redtext>'hello'</Redtext> is the same as <Redtext>"hello"</Redtext>
          </Li>
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
        <article className="my-8">
          <p className="my-4 text-2xl">🔍 Quotes Inside Quotes</p>
          <p>You can use quotes inside a string, as long as they don't match the quotes surrounding the string:</p>
          <PythonHighlight pythonCode={_2_} />
        </article>
        {/*  */}
        <article className="my-8">
          <p className="my-4 text-2xl">🔍 F-String</p>
          <ULdisc>
            <Li>we cannot combine strings and numbers like this, we can only concatanate str with str</Li>
            <Li>
              But we can combine strings and numbers by using <SpanYellow>f-strings</SpanYellow> or the <Redtext>format()</Redtext> method!
              <PythonHighlight pythonCode={_3_} />
            </Li>
            <Li>
              <SpanYellow>f-strings</SpanYellow> was introduced in <Redtext>Python 3.6</Redtext>, and is now the preferred way of formatting strings.
            </Li>
            <Li>
              To specify a string as an <SpanYellow>f-string</SpanYellow>, simply put an <Redtext>f</Redtext> in front of the string literal, and add
              curly brackets <Redtext>{}</Redtext> as placeholders for variables and other operations.
              <PythonHighlight pythonCode={_4_} />
            </Li>
          </ULdisc>
        </article>
        {/*  */}
      </section>
    </MainChildArea>
  );
};

export default O5_TextStr;

const _1_ = `print("Hello")
print('Hello')`;

const _2_ = `print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')`;

const _3_ = `age = 36
# This will produce an error:
# because age is int , and cannot be concatenated with str
txt = "My name is John, I am " + age
print(txt)`;

const _4_ = `age = 36
txt1 = f"My name is John, I am {age}"

price = 59
txt2 = f"The price is {price} dollars"

price = 59
txt3 = f"The price is {price:.2f} dollars"

txt4 = f"The price is {20 * 59} dollars"
print()`;
