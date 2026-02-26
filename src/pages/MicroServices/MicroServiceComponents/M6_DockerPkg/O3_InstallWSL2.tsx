/*


*/
import { MainChildArea } from "../../../../components";
import ULDecimal from "../../../../components/ui/ULDecimal";
import Li from "../../../../components/ui/Li";
import { DivDoubleBorder, SpanBlue, SpanGreen, SpanRed, SpanSky } from "../../../../components/Highlight";

const O3_InstallWSL2 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        Docker needs a Linux kernel In order to run, because it was designed for Linux containers (using cgroups, namespaces, etc.).
        <br />
        Windows itself <SpanRed>doesn’t have a native Linux kernel</SpanRed>. <br />
        WSL2 provides a real Linux kernel inside Windows → which lets Docker run Linux containers natively. <br />
        Docker can run on Windows 11 through <SpanBlue>WSL2</SpanBlue>. <br />
        Hence, we need to install <SpanBlue>WSL2</SpanBlue>. <br />
      </div>

      <DivDoubleBorder>What is WSL2</DivDoubleBorder>

      <section>
        <SpanSky>WSL2</SpanSky> ( <strong>W</strong>indows <strong>S</strong>ubsystem for <strong>L</strong>inux <strong>2</strong> ) is a feature in
        Windows 10/11 that lets you run a <SpanSky>real Linux environment inside Windows</SpanSky>, without needing a separate virtual machine or
        dual-boot. <br />
        It's basically <SpanSky>Linux running inside Windows</SpanSky> — but in a lightweight, integrated way.
        <div className="my-8">
          <p>✅ In short: </p>
          <p className="ml-8">
            <SpanGreen>WSL2</SpanGreen> = A real Linux kernel running inside Windows → so you can use Linux apps and tools as if you were on a Linux
            machine.
          </p>
        </div>
      </section>

      <section className="my-4 font-semibold">🔹What you can do with WSL2?</section>
      <ULDecimal>
        <Li>Install a Linux distribution (Ubuntu, Debian, etc.) from the Microsoft Store.</Li>
        <Li>Run Linux commands and tools (e.g., apt, grep, ssh, vim) directly in Windows.</Li>
        <Li>Run Linux-based apps like Docker, Kafka, PostgreSQL, Redis, etc.</Li>
        <Li>Access Linux files from Windows (\\wsl$\Ubuntu\home\...).</Li>
        <Li>Access Windows files from Linux (/mnt/c/Users/...).</Li>
      </ULDecimal>

      <section className="mt-8 font-semibold">🔹Why developers use WSL2?</section>
      <ULDecimal>
        <Li>
          <strong>Docker & Containers</strong> → Needs a Linux kernel → WSL2 provides it.
        </Li>
        <Li>
          <strong>Run Linux tools natively</strong> → No need for a separate VM.
        </Li>
        <Li>
          <strong>Lightweight & fast</strong> → Uses fewer resources than VirtualBox/VMware.
        </Li>
        <Li>
          <strong>Tight Windows integration</strong> → You can mix Windows + Linux workflows easily.
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default O3_InstallWSL2;
