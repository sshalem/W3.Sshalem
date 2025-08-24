import { MainChildArea } from "../../../../../components";
import TableCompareTerminology from "../../../../../components/TableCompareTerminology";

const O1_TerminologyCompare = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <TableCompareTerminology></TableCompareTerminology>
    </MainChildArea>
  );
};

export default O1_TerminologyCompare;
