import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O5_TextStr = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <SpanYellow>Numeric Types</SpanYellow> Used to store numbers.
        <article className="my-8">
          <p className="my-4 text-2xl">🔍 int</p>
          <p>
            Int (or integer), is a whole number, <SpanYellow>positive</SpanYellow> or <SpanYellow>negative</SpanYellow>, without decimals, of
            unlimited length.
          </p>
          <PythonHighlight pythonCode={_1_} />
        </article>
        {/*  */}
        <article className="my-8">
          <p className="my-4 text-2xl">🔍 Float</p>
          <ULdisc>
            <Li>Float, or "floating point number" is a number, positive or negative, containing one or more decimals.</Li>
            <Li>Float can also be scientific numbers with an "e" to indicate the power of 10.</Li>
          </ULdisc>
          <PythonHighlight pythonCode={_2_} />
        </article>
        {/*  */}
        <article className="my-8">
          <p className="my-4 text-2xl">🔍 Complex</p>
          <ULdisc>
            <Li>Float, or "floating point number" is a number, positive or negative, containing one or more decimals.</Li>
            <Li>Float can also be scientific numbers with an "e" to indicate the power of 10.</Li>
          </ULdisc>
          <PythonHighlight pythonCode={_3_} />
        </article>
        {/*  */}
        <article className="my-8">
          <p className="my-4 text-2xl">🔍 Type Conversion</p>
          <ULdisc>
            <Li>
              We can convert from one type to another with the <Redtext>int()</Redtext>, <Redtext>float()</Redtext>, and <Redtext>complex()</Redtext>
              methods:
            </Li>
          </ULdisc>
          <PythonHighlight pythonCode={_4_} />
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_TextStr;

const _1_ = `x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))`;

const _2_ = `u = 1.10
v = 1.0
w = -35.59
x = 35e3
y = 12E4
z = -87.7e100

print(type(u))
print(type(v))
print(type(w))
print(type(x))
print(type(y))
print(type(z))`;

const _3_ = `x = 3+5j
y = 5j
z = -5j

print(type(x))
print(type(y))
print(type(z))`;

const _4_ = `x = 1    # int
y = 2.8  # float
z = 1j   # complex

#convert from int to float:
a = float(x)

#convert from float to int:
b = int(y)

#convert from int to complex:
c = complex(x)

print(a)
print(b)
print(c)

print(type(a))
print(type(b))
print(type(c))`;
