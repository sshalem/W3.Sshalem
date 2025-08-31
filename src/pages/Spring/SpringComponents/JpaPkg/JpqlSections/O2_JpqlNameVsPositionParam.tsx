import { MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "./../../../../../components/ui/ULdisc";

const O2_JpqlNameVsPositionParam = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>Here’s a clear comparison between JPQL queries using Named Parameters vs Positioned Parameters:</section>
      <div className="my-4">
        🔹 Named Parameters
        <div className="ml-8">
          <ULdisc>
            <Li>Use named placeholders prefixed with a colon (:).</Li>
            <Li>Easier to read and maintain.</Li>
            <Li>Order doesn’t matter.</Li>
          </ULdisc>
        </div>
      </div>

      <div className="mt-8">
        🔸 Positioned Parameters
        <div className="ml-8">
          <ULdisc>
            <Li>Use question marks (?) followed by a position index.</Li>
            <Li>Parameters must be set in the correct order.</Li>
            <Li>Less readable, but sometimes used for dynamic queries.</Li>
          </ULdisc>
        </div>
      </div>

      {/* <TableJPQLParameterComparison></TableJPQLParameterComparison> */}
    </MainChildArea>
  );
};

export default O2_JpqlNameVsPositionParam;
