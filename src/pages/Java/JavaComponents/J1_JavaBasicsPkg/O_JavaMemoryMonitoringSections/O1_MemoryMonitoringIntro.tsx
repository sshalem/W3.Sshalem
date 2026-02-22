/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_MemoryMonitoringIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">✅ Memory Monitoring </article>
        Monitoring becomes very important because:
        <ULdisc>
          <Li>Detect Memory Leaks. Even with GC, memory leaks can happen (e.g., static references, unclosed resources, large caches).</Li>
          <Li>Prevent OOM (OutOfMemoryError) </Li>
          <Li>
            Performance Optimization, High memory usage increases:
            <ULdisc>
              <Li>GC pauses</Li>
              <Li>CPU usage</Li>
              <Li>Response time</Li>
            </ULdisc>
          </Li>
          <Li>Capacity Planning</Li>
        </ULdisc>
        <hr />
        <article className="my-8 text-xl">🔹 Common Java Memory Monitoring Tools </article>
        <ULdisc>
          <Li>VisualVM – Free JVM monitoring & profiling</Li>
          <Li>JConsole – Built-in with JDK</Li>
          <Li>Java Mission Control – Advanced monitoring</Li>
          <Li>Prometheus + Grafana – Production-grade monitoring</Li>
          <Li>New Relic – Enterprise APM</Li>
        </ULdisc>
        <hr />
        <article className="my-8 text-xl">
          {" "}
          ✅ Why <SpanYellow>Spring Boot Memory Monitoring</SpanYellow> Is Important{" "}
        </article>
        <ULdisc>
          <Li>Run 24/7</Li>
          <Li>Use embedded servers (like Tomcat)</Li>
          <Li>Handle REST APIs</Li>
          <Li>Connect to databases</Li>
          <Li>Use caches</Li>
          <Li>Run inside Docker/Kubernetes</Li>
        </ULdisc>
        Common problems:
        <ULdisc>
          <Li>Memory leaks (static collections, cache misuse)</Li>
          <Li>High heap usage</Li>
          <Li>GC pauses</Li>
          <Li>
            OOM <SpanYellow>OutOfMemoryError</SpanYellow>
          </Li>
          <Li>Container memory limit crashes</Li>
        </ULdisc>
        🔹 Best Way to Monitor Spring Boot Memory
        <ULdisc>
          <Li>
            Use Spring Boot <SpanYellow>Actuator</SpanYellow> (First Step)
          </Li>
          <Li>
            Production-Grade Monitoring Setup (Recommended) <SpanYellow>Prometheus</SpanYellow> , or <SpanYellow>Grafana</SpanYellow>
          </Li>
          <Li>
            For Local Debugging / Leak Investigation , <SpanYellow>VisualVM</SpanYellow> , <SpanYellow>Java Mission Control</SpanYellow>
            <ULdisc>
              These help inspect:
              <Li>Heap usage</Li>
              <Li>Threads</Li>
              <Li>GC activity</Li>
              <Li>Memory leaks</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_MemoryMonitoringIntro;
