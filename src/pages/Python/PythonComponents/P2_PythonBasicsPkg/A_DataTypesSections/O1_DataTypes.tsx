import { Link } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { Redtext } from "../../../../../components/Highlight";

const O1_DataTypes = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">Data Types in Python</article>
        <div className="flex">
          <p className="w-48">1. Numeric types :</p>
          <p className="w-auto">
            <Redtext>int</Redtext> , <Redtext>float</Redtext> , <Redtext>complex</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-48">2. Text type :</p>
          <p className="w-auto">
            <Redtext>str</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-48">3. Boolean type :</p>
          <p className="w-auto">
            <Redtext>bool</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-48">4. Sequence type</p>
          <p className="w-auto">
            <Redtext>range</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-48">5. Binary types :</p>
          <p className="w-auto">
            <Redtext>bytes</Redtext> , <Redtext>bytearray</Redtext> , <Redtext>memoryview</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-48">6. None types :</p>
          <p className="w-auto">
            <Redtext>NoneType</Redtext>
          </p>
        </div>

        <article className="my-8">
          The other Data Types in Python explained in Section
          <Link to={"/python/data-structure"} className="mx-2 text-blue-500 underline">
            Data Structure
          </Link>
        </article>

        <div className="flex">
          <p className="w-48">7. Sequence types :</p>
          <p className="w-auto">
            <Redtext>list</Redtext> , <Redtext>tuple</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-48">8. Mapping type :</p>
          <p className="w-auto">
            <Redtext>dict</Redtext>
          </p>
        </div>

        <div className="flex">
          <p className="w-48">9. Set types :</p>
          <p className="w-auto">
            <Redtext>set</Redtext> , <Redtext>frozenset</Redtext>
          </p>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O1_DataTypes;
