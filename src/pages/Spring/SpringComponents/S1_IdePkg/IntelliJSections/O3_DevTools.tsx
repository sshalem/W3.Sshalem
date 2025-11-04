/*
/spring/ide/intellij#3.DevTools
O3_DevTools
*/

import { IMG, MainChildArea } from "../../../../../components";
import { SpanBlue, SpanGreen, XmlHighlight } from "../../../../../components/Highlight";
import Intellij_12 from "../../../../../assets/Intellij_12.jpg";
import Intellij_13 from "../../../../../assets/Intellij_13.jpg";

const O3_DevTools = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        how to enable it in <SpanBlue>IntelliJ</SpanBlue> IDEA
      </section>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Add <SpanBlue>DevTools</SpanBlue> Dependency
          <XmlHighlight xmlCode={pom_dev_tools}></XmlHighlight>
        </li>
        <li className="my-1">
          Configure <SpanBlue>IntelliJ</SpanBlue> for Auto-Reload. By default <SpanBlue>IntelliJ</SpanBlue> does not compile automatically, so you
          need to enable it.
        </li>
        <li className="my-1">
          Go to File ➡️ Settings ➡️ Build, Execution, Deployment ➡️ Compiler <br /> <br /> ✅ Select
          <SpanGreen>Build project automatically</SpanGreen>
          <IMG img_name={Intellij_12}></IMG>
        </li>
        <li className="my-1">
          Go to File ➡️ Settings ➡️ Advance Settings ➡️ Compiler section <br />
          <br />✅ Select <SpanGreen>Allow auto-make to start even if developed application is currently running</SpanGreen>
          <IMG img_name={Intellij_13}></IMG>
        </li>
        <li className="my-1"></li>
      </ul>
    </MainChildArea>
  );
};

export default O3_DevTools;

const pom_dev_tools = `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
    <optional>true</optional>
</dependency>
`;
