/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGrey } from "../../../../../components/Highlight";

const O0_IntroFunctions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>All functions in python return None by default, unless , we define return ourselves.</Li>
          <Li>
            This function below doesn't return anything thus, if we print it it will show None.
            <PythonHighlight pythonCode={_1_} />
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Argumnets vs Parameters</article>
        From a function's perspective:
        <ULdisc>
          <Li>
            <SpanGrey>parameter</SpanGrey> - is the variable listed inside the parentheses in the function definition.
          </Li>
          <Li>
            <SpanGrey>argument</SpanGrey> - is the value that is sent to the function when it is called.
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Passing Arguments</article>
        Argument is what we pass when we call the function
        <PythonHighlight pythonCode={_2_} />
      </section>

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Default Parameter Value</article>
        <PythonHighlight pythonCode={_3_} />
      </section>

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Passing a List as an Argument</article>
        <PythonHighlight pythonCode={_4_} />
      </section>

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Return Values</article>
        <PythonHighlight pythonCode={_5_} />
      </section>

      <hr />
      <section className="my-8">
        <article className="my-4 text-xl font-semibold">Recursion with python</article>
        <PythonHighlight pythonCode={_6_} />
      </section>
    </MainChildArea>
  );
};
export default O0_IntroFunctions;

const _1_ = `def my_function():
  print("Hello from a function")

my_function()
print(my_function())

result:
Hello from a function
Hello from a function
None`;

const _2_ = `def my_function(fname):
  print(fname + " Refsnes")
my_function("Emil")`;

const _3_ = `def my_function(country = "Norway"):
  print("I am from " + country)
my_function()`;

const _4_ = `def my_function(food):
  for i in food:
    print(i)

fruits = ["apple", "banana", "cherry"]
my_function(fruits)`;

const _5_ = `def my_function(x):
  return 5 * x
print(my_function(3))`;

const _6_ = `def powerNumer(number, power):
    if power == 0 or power == 1:
        return number
    return powerNumer(number, power-1) * number

print(powerNumer(2, 5))`;

// const _1_ = ``;
// const _1_ = ``;
