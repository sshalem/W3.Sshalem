/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_16 from "../../../../../assets/python_16.jpg";

const O3_SetupDjangoProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">
          Setup the Django <SpanGrey>project</SpanGrey> with CLI
        </div>
        <ULDecimal>
          <Li>
            Open Terminal and verify <SpanGrey>(.venv)</SpanGrey> enviroment.
          </Li>
          <Li>
            Create new <SpanGrey>project</SpanGrey> with command below (the dot is part of the command)
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            This <SpanGrey>startproject</SpanGrey> command assumes (by use of <SpanGrey>.</SpanGrey> at the end) that the current folder is your
            project folder, and creates the following within it.
          </Li>
          <Li>
            A subfolder named <SpanGrey>academic</SpanGrey> , which contains the following files:
            <ULdisc>
              <Li>
                <SpanGrey>__init__.py</SpanGrey> : an empty file that tells Python that this folder is a Python package.
              </Li>
              <Li>
                <SpanGrey>asgi.py</SpanGrey> : an entry point for ASGI-compatible web servers to serve your project. You typically leave this file
                as-is.
              </Li>
              <Li>
                <SpanGrey>settings.py</SpanGrey> : contains settings for Django project, which you modify in the course of developing a web app.
              </Li>
              <Li>
                <SpanGrey>urls.py</SpanGrey> : contains a table of contents for the Django project, which you also modify in the course of
                development.
              </Li>
              <Li>
                <SpanGrey>wsgi.py</SpanGrey> : an entry point for WSGI-compatible web servers to serve your project. You typically leave this file
                as-is as it provides the hooks for production web servers.
              </Li>
            </ULdisc>
          </Li>
          <Li>
            This is how project structure looks
            <IMG img_name={python_16}></IMG>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O3_SetupDjangoProject;

const _1_ = `django-admin startproject academic .`;
