/*


*/
import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanGrey } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O3_Jdk21Install = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      ✅ Install JDK 21 on Ubuntu 22.04 (recommended) Installed JDK packages.
      <br />
      <br />
      <SpanGreen>Note</SpanGreen> : <SpanGrey>sudo apt update</SpanGrey> refreshes your system's local list of available software packages and their
      versions from online repositories, acting like a catalog update;
      <br />
      <LinuxHighlight bashCode={jdk_install}></LinuxHighlight>
      <div>
        Some <SpanGrey>Ubuntu 22.04</SpanGrey> images don’t include JDK 21 by default yet.
      </div>
      <div>If openjdk-21-jdk not found (rare case) , Then install JDK 21 using the Temurin (Adoptium) repo (See chatGPT or Copilot)</div>
    </MainChildArea>
  );
};
export default O3_Jdk21Install;

const jdk_install = `java -version 
sudo apt update
sudo apt install openjdk-21-jdk
java -version`;
