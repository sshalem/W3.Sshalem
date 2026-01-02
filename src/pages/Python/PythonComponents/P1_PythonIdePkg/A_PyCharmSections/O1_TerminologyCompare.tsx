/*
/spring/ide/intellij#1.Terminologycompare
Terminology compare --> (SPRING)(IDE's)(IntelliJ)
*/

import { MainChildArea } from "../../../../../components";
import TableCompareTerminology from "../../../../../components/Tables/Table_2ColCompareTerminology";

const O1_TerminologyCompare = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <TableCompareTerminology></TableCompareTerminology>
    </MainChildArea>
  );
};

export default O1_TerminologyCompare;
