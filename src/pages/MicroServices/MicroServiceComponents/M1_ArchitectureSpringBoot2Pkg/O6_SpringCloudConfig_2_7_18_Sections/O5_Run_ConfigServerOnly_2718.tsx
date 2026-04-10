import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O5_Run_ConfigServerOnly_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-xl font-semibold">1️⃣ Run Config Server Only</p>
        <article className="my-8">
          to Verify Git repo is loaded (REAL test) , Lets run the <SpanYellow>Config Server</SpanYellow> <strong>Only</strong> , then:
          <ULdisc>
            <Li>
              Config server exposes configs using this pattern: <SpanYellow>{"http://localhost:8888/{application}/{profile}"}</SpanYellow>
              where{" "}
              <ULdisc>
                <Li>
                  <strong>application</strong> refres to <SpanYellow>spring.application.name=config-server</SpanYellow>
                </Li>
                <Li>
                  from logging we can see{" "}
                  <strong>
                    No active profile set, falling back to 1 default profile: <SpanYellow>"default"</SpanYellow>
                  </strong>
                </Li>
                <Li>
                  Thus, <strong>profile</strong> refers to the running profile of the application which is <SpanYellow>default</SpanYellow>
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="text-xl font-semibold">✅ Verify Git repo is loaded (REAL test)</p>
          <ULdisc>
            <Li>
              Send <strong>GET</strong> request to <SpanYellow>http://localhost:8888/config-server/default</SpanYellow>
            </Li>
            <Li>
              Or , we can browse to localhost{" "}
              <a className="tracking-wider text-blue-500" target="_blank" href="http://localhost:8888/config-server/default">
                http://localhost:8888/config-server/default
              </a>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_Run_ConfigServerOnly_2718;
