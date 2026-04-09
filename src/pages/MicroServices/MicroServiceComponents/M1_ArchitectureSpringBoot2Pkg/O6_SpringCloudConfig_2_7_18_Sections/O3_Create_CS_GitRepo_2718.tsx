import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_Create_CS_GitRepo_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          I will be using GIT repository to store Config
          <ULdisc>
            <Li>
              I Created git repository{" "}
              <a className="tracking-wider text-blue-500" target="_blank" href="https://github.com/sshalem/config-server-2-7-18">
                https://github.com/sshalem/config-server-2-7-18
              </a>
            </Li>
            <Li>
              Since the Repository is <SpanYellow>Private</SpanYellow>, thus, I am going to need following features to add to{" "}
              <SpanYellow>Spring Cloud Config Server</SpanYellow>
              <ULDecimal>
                <Li>git repo url</Li>
                <Li>username</Li>
                <Li>password (not my git hub password, but a generete token)</Li>
              </ULDecimal>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8 text-xl font-semibold">🌍 Steps : How to create Personal Access Token (new GitHub UI)</article>
        <ULdisc>
          <Li>
            <ULdisc>
              <Li>
                1️⃣ Go to main GitHub page {"->"} <strong>Settings (on the Pink Avatar Icon) of my User account (Not the Repository Settings)</strong>{" "}
                {"->"} <strong>Developer Settings</strong> {"->"} <strong>personal access tokens</strong>
              </Li>
              <Li>
                2️⃣ On <strong>Personal access tokens</strong> Click: 👉 <SpanYellow>Tokens (classic)</SpanYellow> (simpler for Spring Config Server)
              </Li>
              <Li>
                3️⃣ On the top right there is a drop down button <strong>Generate new token</strong> with 2 options
                <ULdisc>
                  <Li>
                    choose <SpanYellow>Generate new token (classic)</SpanYellow>
                  </Li>
                </ULdisc>
              </Li>
              <Li>
                4️⃣ Set the following:
                <ULdisc>
                  <Li>
                    Note: <strong>spring-config-server</strong>
                  </Li>
                  <Li>
                    Expiration: <strong>no expiration</strong>
                  </Li>
                  <Li>
                    Scopes: <strong>✔ repo</strong>
                  </Li>
                </ULdisc>
              </Li>
              <Li>5️⃣ Generate token</Li>
              <Li>⚠️ Copy it immediately — GitHub shows it only once.</Li>
              <Li>
                Then use in application.properties
                <ApplicationPropertiesHighlight propertiesCode={_1_} />
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_Create_CS_GitRepo_2718;

const _1_ = `spring.cloud.config.server.git.uri=https://github.com/sshalem/config-server-2-7-18
spring.cloud.config.server.git.username=sshalem
spring.cloud.config.server.git.password=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`;
