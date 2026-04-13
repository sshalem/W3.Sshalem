/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O1_Dictionary = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>
          <SpanGrey>dictionary</SpanGrey> ? What it is ?
        </div>
        <ULdisc>
          <Li>
            <SpanGrey>dictionary</SpanGrey> — is a built-in data structure used to store data in key–value pairs
            <SpanGrey>Python dict = Java Map (especially HashMap)</SpanGrey>
          </Li>
          <Li>
            Since I'm coming from Java/Spring background, I can think:
            <ULdisc>
              <Li>dict → like HashMap </Li>
              <Li>list → like ArrayList</Li>
              <Li>set → like HashSet</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <div className="my-4 text-lg font-semibold">📌 Key features</div>
        <ULdisc>
          <Li>Stores data as key: value pairs</Li>
          <Li>Keys must be unique</Li>
          <Li>Keys are usually strings, numbers, or tuples</Li>
          <Li>Values can be any data type</Li>
          <Li>Dictionaries are mutable (you can change them)</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_Dictionary;
