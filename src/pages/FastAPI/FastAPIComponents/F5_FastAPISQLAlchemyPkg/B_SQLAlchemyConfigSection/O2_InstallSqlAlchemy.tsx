/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_InstallSqlAlchemy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Install SQLAlchemy</article>
        open terminal and install SQLAlchecmy:
        <ULdisc>
          <Li>
            <SpanYellow>pydantic-settings</SpanYellow> - for used for config + .env
          </Li>
        </ULdisc>
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O2_InstallSqlAlchemy;

const _1_ = `pip install sqlalchemy
pip install pydantic-settings`;
