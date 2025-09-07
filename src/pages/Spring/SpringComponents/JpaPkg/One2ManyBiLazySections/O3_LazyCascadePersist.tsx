import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";

const O3_LazyCascadePersist = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <strong>CascadeType.PERSIST</strong> - means save. When saving the parent, the children will also be saved automatically.
      </div>
      <div>
        In the following sections , I will add each cascade type at a time. <br />I will examine the <strong>Persistent Context</strong> and{" "}
        <strong>DataBase</strong> with and w/o the cascade type.
        <ULDecimal>
          <Li>
            <SpanRed>NO cascade</SpanRed>
          </Li>
          <Li>
            <SpanGreen>{"cascade = {CascadeType.PERSIST}"}</SpanGreen>
          </Li>
        </ULDecimal>
      </div>
      <section></section>
    </MainChildArea>
  );
};

export default O3_LazyCascadePersist;
