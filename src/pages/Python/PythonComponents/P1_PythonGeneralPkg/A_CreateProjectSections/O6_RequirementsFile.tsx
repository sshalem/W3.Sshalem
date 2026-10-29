/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanGrey } from "../../../../../components/Highlight";

const O6_RequirementsFile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            Generate <SpanGrey>requirements.txt</SpanGrey> (IMPORTANT)
          </Li>
          <Li>
            🧠 Pro Tip (Best Practice) , After everything works, always create <SpanGrey>requirements.txt</SpanGrey>
            <Highlight_ApplicationProperties code={_1_} />
          </Li>
          <Li>
            ❌ If NO dependency file{" "}
            <ULdisc>
              <Li>This means dependencies are not declared </Li>
              <Li>❌ You must install them manually.</Li>
              <Li>1️⃣ Run the app and see errors</Li>
              <Li>
                2️⃣ When you see:
                <Highlight_ApplicationProperties code={_2_} />
                Install it:
                <Highlight_ApplicationProperties code={_3_} />
              </Li>
              <Li>This way I have to go every module and install it manually (Bad practice)</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_RequirementsFile;

const _1_ = `pip freeze > requirements.txt`;

const _2_ = `ModuleNotFoundError: No module named 'requests'`;

const _3_ = `pip install requests`;
