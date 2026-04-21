/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O0_Range = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">range()</article>
        <ULdisc>
          <Li>
            The built-in <SpanYellow>range()</SpanYellow> function returns an immutable sequence of numbers, commonly used for{" "}
            <Redtext>looping</Redtext> a specific number of times.
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">Creating ranges</article>
        <ULdisc>
          <Li>
            The <SpanYellow>range()</SpanYellow> function can be called with 1, 2, or 3 arguments, using this syntax:
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">
          Call range() With <Redtext>One</Redtext> Argument
        </article>
        <ULdisc>
          <Li>
            If the range function is called with only <SpanYellow>one</SpanYellow> argument, the argument represents the <SpanYellow>stop</SpanYellow>
            value.
          </Li>
          <Li>
            The <SpanYellow>start</SpanYellow> argument is optional, and if not provided, it defaults to 0.
          </Li>
          <Li>
            <Redtext>range(10)</Redtext> returns a sequence of each number from 0 to 9. (The start argument, 0 is inclusive, and the stop argument, 10
            is exclusive).
          </Li>
          <PythonHighlight pythonCode={_2_} />
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">
          Call range() With <Redtext>Two</Redtext> Arguments
        </article>
        <ULdisc>
          <Li>
            If the range function is called with two arguments,
            <ULdisc>
              <Li>
                the first argument represents the <Redtext>start</Redtext> value
              </Li>
              <Li>
                and the second argument represents the <Redtext>stop</Redtext> value.
              </Li>
            </ULdisc>
            <PythonHighlight pythonCode={_3_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">
          Call range() With <Redtext>Three</Redtext> Arguments
        </article>
        <ULdisc>
          <Li>
            If the range function is called with three arguments, the third argument represents the <Redtext>step</Redtext> value.
          </Li>
          <Li>The step value means the difference between each number in the sequence</Li>
          <Li>It is optional, and if not provided, it defaults to 1.</Li>
          <Li>
            <Redtext>range(3, 10, 2)</Redtext> returns a sequence of each number from 3 to 9, with a step of 2:
            <PythonHighlight pythonCode={_4_} />
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">Using range()</article>
        <ULdisc>
          <Li>
            If the range function is called with three arguments, the third argument represents the <Redtext>step</Redtext> value.
          </Li>
          <Li>The step value means the difference between each number in the sequence</Li>
          <Li>It is optional, and if not provided, it defaults to 1.</Li>
          <Li>
            <Redtext>range(3, 10, 2)</Redtext> returns a sequence of each number from 3 to 9, with a step of 2:
            <PythonHighlight pythonCode={_5_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O0_Range;

const _1_ = `range(start, stop, step)`;

const _2_ = `x = range(10)`;

const _3_ = `x = range(3, 10)`;

const _4_ = `x = range(3, 10, 2)`;

const _5_ = `# Iterate over each value in a range:
for i in range(10):
  print(i)
  
# Increment the sequence with 3 (default is 1):
for x in range(2, 30, 3):
  print(x)
  
# Convert different ranges to lists:
print(list(range(5)))
print(list(range(1, 6)))
print(list(range(5, 20, 3)))

# Extract a subsequence from a range:
r = range(10)
print(r[2])
print(r[:3])

# Test if the numbers 6 and 7 are present in a range:
r = range(0, 10, 2)
print(6 in r)
print(7 in r)

# Get the length of a range:
r = range(0, 10, 2)
print(len(r))
`;
