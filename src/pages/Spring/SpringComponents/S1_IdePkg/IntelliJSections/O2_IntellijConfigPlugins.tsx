import { Anchor, IMG, MainChildArea } from "../../../../../components";
import { DivDoubleBorder } from "../../../../../components/Highlight";
import Intellij_1 from "../../../../../assets/Intellij_1.jpg";
import Intellij_2 from "../../../../../assets/Intellij_2.jpg";
import Intellij_3 from "../../../../../assets/Intellij_3.jpg";
import Intellij_4 from "../../../../../assets/Intellij_4.jpg";
import Intellij_5 from "../../../../../assets/Intellij_5.jpg";
import Intellij_6 from "../../../../../assets/Intellij_6.jpg";
import Intellij_7 from "../../../../../assets/Intellij_7.jpg";
import Intellij_8 from "../../../../../assets/Intellij_8.jpg";
import Intellij_9 from "../../../../../assets/Intellij_9.jpg";
import Intellij_10 from "../../../../../assets/Intellij_10.jpg";
import Intellij_11 from "../../../../../assets/Intellij_11.jpg";

const O2_IntellijConfigPlugins = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <DivDoubleBorder>Plugins to install</DivDoubleBorder>
      </section>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          VScode theme <IMG img_name={Intellij_1}></IMG>
        </li>

        <li className="my-1">
          wl Spring Assistant<IMG img_name={Intellij_2}></IMG>
        </li>
        <li className="my-1">
          sequenceDiagram <IMG img_name={Intellij_3}></IMG>
        </li>
      </ul>
      <section>
        <DivDoubleBorder>Config IntelliJ Appearance and Fonts</DivDoubleBorder>
      </section>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Use the following appearance <IMG img_name={Intellij_4}></IMG>
        </li>

        <li className="my-1">
          Use the following font <IMG img_name={Intellij_5}></IMG>
        </li>
      </ul>
      <section>
        <DivDoubleBorder>Enable /Disable usage</DivDoubleBorder>
      </section>
      <div>
        In IntelliJ we have this annoying usage. <br />
        <IMG img_name={Intellij_6}></IMG>
        To Enable/Disable it do the following (see link{" "}
        <Anchor
          description="how-to-hide-code-usage"
          href="https://medium.com/@life-is-short-so-enjoy-it/intellij-idea-how-to-hide-code-usage-f1b2340773a2"
        ></Anchor>{" "}
        )
      </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">Go to “settings”</li>
        <li className="my-1">Search “code vision”</li>
        <li className="my-1">Go under Editor ➡️ Inlay Hints</li>
        <li className="my-1">Under “Code vision”, uncheck “Usages” option.</li>
      </ul>
      <IMG img_name={Intellij_7}></IMG>
      <section>
        <DivDoubleBorder>Reformat on save</DivDoubleBorder>
        Reformat on save select the following check box:
        <IMG img_name={Intellij_8}></IMG>
      </section>

      <section>
        <DivDoubleBorder>Reformat 1 line method code</DivDoubleBorder>
        Reformat code , so methods with 1 line will appear fully (And not as one line code): <br />
        ➡️ deselect the "One-line methods"
        <IMG img_name={Intellij_9}></IMG>
      </section>

      <section>
        <DivDoubleBorder>Reformat the blank lines as follows:</DivDoubleBorder>

        <IMG img_name={Intellij_10}></IMG>
        <IMG img_name={Intellij_11}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O2_IntellijConfigPlugins;
