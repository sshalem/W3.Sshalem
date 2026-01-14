/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O4_SpringStyleLayeredStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Spring-Style Layered Structure (Also Valid) </article>
        Used often by:
        <ULdisc>
          <Li>Java devs</Li>
          <Li>large teams</Li>
          <Li>long-lived projects</Li>
        </ULdisc>
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O4_SpringStyleLayeredStructure;

const _1_ = `app/
├── api/
├── services/
├── repositories/
├── models/
│   ├── entities/
│   └── schemas/
└── main.py
`;
