import { Li, MainChildArea, ULdisc } from "../../../../../components";
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
              <ULdisc>
                <Li>
                  username : <SpanYellow>sshalem</SpanYellow>
                </Li>
                <Li>
                  password : need to be a <SpanYellow>generated token</SpanYellow> (Not my Git login password) Generate Token workaround link
                </Li>
                <Li>GitHub asks for a Personal Token value here (and not the actual GitHub password)</Li>
              </ULdisc>
            </Li>
            <Li>
              Steps : How to create Personal Access Token (new GitHub UI)
              <ULdisc>
                <Li>
                  1️⃣ Go to main GitHub page {"->"}{" "}
                  <strong>Settings (on the Pink Avatar Icon) of my User account (Not the Repository Settings)</strong> {"->"}{" "}
                  <strong>Developer Settings</strong> {"->"} <strong>personal access tokens</strong>
                </Li>
                <Li>
                  2️⃣ On <strong>Personal access tokens</strong> Click: 👉 <SpanYellow>Tokens (classic)</SpanYellow> (simpler for Spring Config Server)
                </Li>
                <Li>
                  3️⃣ Generate new token , then , <SpanYellow>Generate new token (classic)</SpanYellow>
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
                <Li>
                  I set the following password
                  <ApplicationPropertiesHighlight propertiesCode={_1_} />
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_Create_CS_GitRepo_2718;

const _1_ = `spring.cloud.config.server.git.password=Zaq1zaq1zaq1`;
