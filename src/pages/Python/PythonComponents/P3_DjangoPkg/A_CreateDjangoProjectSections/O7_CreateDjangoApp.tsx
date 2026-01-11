/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_20 from "../../../../../assets/python_20.jpg";

const O7_CreateDjangoApp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">
          Create Django <SpanGrey>app</SpanGrey> with CLI
        </div>
        <ULDecimal>
          <Li>
            Open Terminal and verify <SpanGrey>(.venv)</SpanGrey> enviroment.
          </Li>
          <Li>
            Create new <SpanGrey>app</SpanGrey> with command below
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            A subfolder named <SpanGrey>students</SpanGrey> created , which contains the following files/folder:
            <ULdisc>
              <Li>
                <SpanGrey>migrations</SpanGrey> folder
              </Li>
              <Li>
                <SpanGrey>__init__.py</SpanGrey> : an empty file that tells Python that this folder is a Python package.
              </Li>
              <Li>
                <SpanGrey>admin.py</SpanGrey> :
              </Li>
              <Li>
                <SpanGrey>apps.py</SpanGrey> :
              </Li>
              <Li>
                <SpanGrey>models.py</SpanGrey> :
              </Li>
              <Li>
                <SpanGrey>tests.py</SpanGrey> :
              </Li>
              <Li>
                <SpanGrey>views.py</SpanGrey> :
              </Li>
            </ULdisc>
          </Li>
          <Li>
            This is how project structure looks
            <IMG img_name={python_20}></IMG>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O7_CreateDjangoApp;

const _1_ = `python manage.py startapp students`;
