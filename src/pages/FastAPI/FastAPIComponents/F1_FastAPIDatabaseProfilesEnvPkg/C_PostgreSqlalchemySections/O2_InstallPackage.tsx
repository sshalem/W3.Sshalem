/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O2_InstallPackage = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold"></article>
        <ULdisc>
          <Li>
            <SpanYellow>psycopg[binary]</SpanYellow> is part of the new <SpanYellow>psycopg3</SpanYellow> package and includes optimized precompiled C
            extensions.
          </Li>
          <Li>
            For <SpanYellow>sync</SpanYellow> apps (recommended default)
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            For <SpanYellow>async apps</SpanYellow> (e.g., FastAPI/asyncio)
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </Li>
        </ULdisc>
        It is:
        <ULdisc>
          <Li>✔ Production‑ready</Li>
          <Li>✔ Stable</Li>
          <Li>✔ Supported</Li>
          <Li>✔ Modern</Li>
          <Li>✔ Fast</Li>
          <Li>✔ Compatible with local PostgreSQL installs</Li>
          <Li>✔ Works on Linux/Windows/macOS</Li>
        </ULdisc>
        This is different from <SpanYellow>psycopg2-binary</SpanYellow>, which is <SpanRed>not recommended for production</SpanRed>. <br />
        But <SpanYellow>psycopg[binary] IS recommended</SpanYellow>
      </section>
    </MainChildArea>
  );
};

export default O2_InstallPackage;

const _1_ = `pip install sqlalchemy psycopg[binary]`;

const _2_ = `pip install sqlalchemy[asyncio] psycopg[binary]`;
