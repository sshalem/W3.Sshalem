import { MainChildArea } from "../../../../../components";
import TableCompareOrphanVsCascadeRemove from "../../../../../components/Tables/TableCompareOrphanVsCascadeRemove";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O8_OrphanRemoval = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="text-xl font-semibold">What is orphanRemoval?</div>
      <ULdisc>
        <Li>
          <strong>orphanRemoval = true</strong> automatically deletes child entities when they are removed from the parent collection.
        </Li>
        <Li>Without it, removing a child from the parent collection does not delete it from the database; it only breaks the association.</Li>
        <Li>Think of it as automatic cleanup for “orphaned” children.</Li>
      </ULdisc>
      <TableCompareOrphanVsCascadeRemove></TableCompareOrphanVsCascadeRemove>
    </MainChildArea>
  );
};

export default O8_OrphanRemoval;
