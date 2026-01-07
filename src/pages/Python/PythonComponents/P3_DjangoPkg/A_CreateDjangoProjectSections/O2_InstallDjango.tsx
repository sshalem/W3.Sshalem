/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_15 from "../../../../../assets/python_15.jpg";

const O2_InstallDjango = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Install the Django with CLI</div>
        <ULDecimal>
          <Li>
            Open Terminal and verify <SpanGrey>(.venv)</SpanGrey> enviroment.
          </Li>
          <Li>
            Install Django
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            Check installed packages <SpanGrey>asgiref , Django, sqlparse, tzdata </SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </Li>
          <Li>
            Project structure , inside <SpanGrey>Scripts</SpanGrey> we can see django scripts (like <strong>django-admin</strong> )
            <IMG img_name={python_15}></IMG>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O2_InstallDjango;

const _1_ = `pip install django`;
const _2_ = `pip freeze`;
