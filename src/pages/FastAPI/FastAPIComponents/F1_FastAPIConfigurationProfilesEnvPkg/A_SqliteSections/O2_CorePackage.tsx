/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_CorePackage = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold"></article>
        <ULdisc>
          <Li>
            create <SpanYellow>Core</SpanYellow> package
          </Li>
          <Li>
            create <SpanYellow>database.py</SpanYellow> file
          </Li>
          <Li>
            create <SpanYellow>config.py</SpanYellow> file
          </Li>
          <PythonHighlight pythonCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_CorePackage;

const _1_ = `app/
├── main.py                    # like SpringBootApplication
│
├── core
│   ├── __init__.py
│   ├── config.py              # application.properties / application.yml
│   └── database.py            # DataSource + EntityManagerFactory`;
