/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import Table_2ColCompareSpringVsSQLAlchemy from "../../../../../components/Tables/Table_2ColCompareSpringVsSQLAlchemy";

const O1_SpringVsSqlAlchemy = ({ anchor }: { anchor: string }) => {
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
        <Table_2ColCompareSpringVsSQLAlchemy />
      </section>
    </MainChildArea>
  );
};

export default O1_SpringVsSqlAlchemy;
