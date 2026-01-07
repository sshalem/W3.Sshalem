/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";
import python_17 from "../../../../../assets/python_17.jpg";
import python_18 from "../../../../../assets/python_18.jpg";

const O4_RunDjangoProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">Run Django Project for first time</div>
        <ULDecimal>
          <Li>AT this point, After the project is created , We can run the project.</Li>
          <Li>
            Why to run it at this point for first time?
            <ULdisc>
              <Li>I want to show what message we get at this point, when we run the app</Li>
            </ULdisc>
          </Li>
          <Li>let’s run the project at this moment (Before any app created)</Li>
          <Li>
            <SpanGrey>manage.py</SpanGrey> is kind of a wrapper around <SpanGrey>django-admin</SpanGrey> which makes things easier
          </Li>
          <Li>
            run the following command :
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            Three things to notice :
            <ULdisc>
              <Li>
                a file name <SpanGrey>db.sqlite3</SpanGrey> created when we run the project for dirst time
                <IMG img_name={python_18}></IMG>
              </Li>
              <Li>
                we also can see that we need to run command <SpanGrey>python manage.py migrate</SpanGrey> (See next section)
              </Li>
              <Li>
                We can browse to url of{" "}
                <a className="text-blue-600" href="http://127.0.0.1:8000/">
                  http://127.0.0.1:8000/
                </a>{" "}
                and it will open browser on the ADMIN page that django provides by default.
              </Li>
            </ULdisc>
          </Li>
        </ULDecimal>
        <IMG img_name={python_17}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O4_RunDjangoProject;

const _1_ = `python manage.py runserver`;
