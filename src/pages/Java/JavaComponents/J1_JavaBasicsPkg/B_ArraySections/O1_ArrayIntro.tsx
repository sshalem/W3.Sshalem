/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_ArrayIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-xl font-semibold">An array in Java :</p>
          <ULdisc>
            <Li>is a container object that holds a fixed number of values of a single data type.</Li>
            <Li>Arrays are stored in contiguous memory locations and are indexed starting from 0.</Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">🌍 Important Properties</p>
          <ULdisc>
            <Li>
              Arrays are <SpanYellow>fixed in size</SpanYellow>
            </Li>
            <Li>
              Stored in <SpanYellow>heap memory</SpanYellow>
            </Li>
            <Li>
              Have a built-in property : <SpanYellow>length</SpanYellow>
            </Li>
          </ULdisc>
        </article>

        <hr />
        <article className="my-8">
          <p className="text-lg">1️⃣ Declaring an Array</p>
          <JavaHighlight javaCode={_1_} />
        </article>
        <hr />
        <article className="my-8">
          <p className="text-lg">2️⃣ Creating an Array</p>
          <ULdisc>
            <Li>You must allocate memory using new.</Li>
            <Li>This creates an array that can store 5 integers.</Li>
          </ULdisc>
          <JavaHighlight javaCode={_2_} />
        </article>
        <hr />
        <article className="my-8">
          <p className="text-lg">3️⃣ Initializing an Array</p>
          <ULdisc>
            <Li>
              Method 1: Using new keyword
              <JavaHighlight javaCode={_3_} />
            </Li>
            <Li>
              Method 2: Direct Initialization
              <JavaHighlight javaCode={_4_} />
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_ArrayIntro;

const _1_ = `dataType[] arrayName;

int[] numbers;`;

const _2_ = `int[] numbers;
numbers = new int[5];

// Declare and Create in 1 line
int[] numbers = new int[5];`;

const _3_ = `int[] numbers = new int[3];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;`;

const _4_ = `int[] numbers = {10, 20, 30};`;
