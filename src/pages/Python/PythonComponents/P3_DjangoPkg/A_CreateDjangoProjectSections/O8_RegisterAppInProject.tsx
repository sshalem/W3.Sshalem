/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { ApplicationPropertiesHighlight, JsxHighlight, SpanGrey } from "../../../../../components/Highlight";

const O8_RegisterAppInProject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-8 text-xl font-semibold">⚠️ If you skip this step, Django will ignore the app.</div>
        <ULDecimal>
          <Li>
            Open <SpanGrey>settings.py</SpanGrey> (inside your startproject folder)
          </Li>
          <Li>
            add <SpanGrey>students</SpanGrey> to <SpanGrey>INSTALLED_APPS</SpanGrey> array
          </Li>
          <JsxHighlight jsxCode={_1_} />
          <Li>Verify the app works with command below</Li>
          <Li>If the server starts with no errors → ✅ app created correctly.</Li>
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O8_RegisterAppInProject;

const _1_ = `INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "students",  # ← ADD THIS
]`;

const _2_ = `python manage.py runserver`;
