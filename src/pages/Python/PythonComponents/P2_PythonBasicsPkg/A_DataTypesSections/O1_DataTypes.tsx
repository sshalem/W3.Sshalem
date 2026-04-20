import { MainChildArea } from "../../../../../components";
import { Redtext, SpanYellow } from "../../../../../components/Highlight";

const O1_DataTypes = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">Data Types in Python</article>
        <div className="flex">
          <p className="w-64">1. Numeric types :</p>
          <p className="w-64">
            <Redtext>int</Redtext> , <Redtext>float</Redtext> , <Redtext>complex</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-64">2. Text type :</p>
          <p className="w-64">
            <Redtext>str</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-64">3. Boolean type :</p>
          <p className="w-64">
            <Redtext>bool</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-64">4. Sequence types :</p>
          <p className="w-64">
            <Redtext>list</Redtext> , <Redtext>tuple</Redtext> ,
          </p>
        </div>
        <p className="ml-8">
          <SpanYellow>range</SpanYellow> is part of Sequence type I will explain it here
        </p>

        <div className="flex">
          <p className="w-64">5. Mapping type :</p>
          <p className="w-64">
            <Redtext>dict</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-64">6. Set types :</p>
          <p className="w-64">
            <Redtext>set</Redtext> , <Redtext>frozenset</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-64">7. Binary types :</p>
          <p className="w-72">
            <Redtext>bytes</Redtext> , <Redtext>bytearray</Redtext> , <Redtext>memoryview</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-64">8. None types :</p>
          <p className="w-64">
            <Redtext>NoneType</Redtext>
          </p>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O1_DataTypes;
