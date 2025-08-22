import { Anchor, MainChildArea } from "../../../../components";
import { DivDoubleBorder, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";

const O1_Install = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        I implemented my own <SpanBlue>Pagaination</SpanBlue> + <SpanBlue>Search</SpanBlue> functoinality. <br />
        <ul className="my-4 ml-8 list-disc">
          <li className="my-1">
            Must install <SpanRed>Tailwindcss</SpanRed> and <SpanRed>react-icons</SpanRed> , because I used them in my implementation.
          </li>
          <li className="my-1">
            Code is written in a way , that data will be itterated in the main Compnent where I config it (<strong>See next examples</strong> ), that
            I can style the data as I want
          </li>
          <li className="my-1">
            If I want to re-style the way that Paginatoiin looks , Go inside <SpanGreen>Pagination.tsx</SpanGreen> code re-style it
          </li>
        </ul>
      </section>

      <DivDoubleBorder>Install</DivDoubleBorder>
      <ul className="my-4 ml-8 list-disc">
        <li className="my-1">
          Create <SpanGreen>Pagaination.tsx</SpanGreen> component, in <SpanGreen>components</SpanGreen> folder .
        </li>
        <li className="my-1">
          Copy/Paste the code from{" "}
          <Anchor
            description="Pagination.tsx (from Project 19)"
            href="https://github.com/sshalem/ReactJS/blob/main/08-pagination-sort-items/src/19-pagination-production-no-context/Pagination.tsx"
          ></Anchor>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O1_Install;
