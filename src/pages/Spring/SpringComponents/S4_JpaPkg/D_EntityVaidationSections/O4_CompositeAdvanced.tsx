import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanTeal } from "../../../../../components/Highlight";

const O4_CompositeAdvanced = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULdisc>
        <Li>
          <SpanTeal>@Digits(integer=, fraction=)</SpanTeal> → Number of integer/fractional digits.
        </Li>
        <Li>
          <SpanTeal>@AssertTrue</SpanTeal> → Boolean must be true.
        </Li>
        <Li>
          <SpanTeal>@AssertFalse</SpanTeal> → Boolean must be false.
        </Li>
        <Li>
          <SpanTeal>@Valid</SpanTeal> → @Valid is crucial for nested objects. Used on nested objects or collections to cascade validation.
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};

export default O4_CompositeAdvanced;
