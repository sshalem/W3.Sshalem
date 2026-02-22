/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";

const O1_IO_Questions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li> Difference between InputStream and Reader?</Li>
          <Li>What is buffering?</Li>
          <Li>What is serialization?</Li>
          <Li>IO vs NIO?</Li>
          <Li>What is try-with-resources?</Li>
          <Li>What happens if you don’t close a stream?</Li>
        </ULdisc>
        <p className="my-8 text-xl font-semibold">⚡ Check with ChatGPT the following:</p>
        <ULDecimal>
          <Li>📘 Java IO Interview Questions (advanced)</Li>
          <Li>📊 IO class hierarchy diagram</Li>
          <Li>🚀 Real production patterns</Li>
          <Li>🔥 IO performance tuning guide</Li>
          <Li>📁 How file upload works internally in Spring Boot</Li>
        </ULDecimal>

        <p className="my-8 text-xl font-semibold">⚡ Check question with Next Level:</p>
        <ULDecimal>
          <Li>💎 20 tricky IO interview coding questions</Li>
          <Li>📊 Blocking vs Non-Blocking deep dive</Li>
          <Li>🚀 How Netty uses NIO internally</Li>
          <Li>🔥 IO in Linux kernel explained</Li>
          <Li>📁 File upload architecture for enterprise apps</Li>
          <Li>🧠 IO + Garbage Collection interactions</Li>
        </ULDecimal>

        <p className="my-8 text-xl font-semibold">⚡ Since you work with Spring Boot & backend:</p>
        <ULDecimal>
          <Li>🔥 10 System Design IO Questions</Li>
          <Li>📦 How Kafka uses zero-copy</Li>
          <Li>🌐 How Netty works internally</Li>
          <Li>🧠 File upload architecture for enterprise</Li>
          <Li>💾 Deep dive: JVM + OS IO interaction</Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};
export default O1_IO_Questions;
