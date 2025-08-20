import { MainChildArea } from "../../../../../components";
import { SpanGreen } from "../../../../../components/Highlight";

const O1_Install = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        I implemented my own Pagaination + Search functoinality. <br />
        <ul className="my-4 ml-8 list-disc">
          <li className="my-1">
            <SpanGreen>App.tsx</SpanGreen> - In App.tsx (can be any file name), I show how to config it , thats the only thing the Engineer will have
            to do
          </li>
          <li className="my-1">
            <SpanGreen>Pagination.tsx</SpanGreen> - this is the implementation of the Pagination + Search (form Coder side , it is just a block box)
          </li>
        </ul>
      </section>
    </MainChildArea>
  );
};

export default O1_Install;
