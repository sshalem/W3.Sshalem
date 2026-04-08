import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_DownloadKibana2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Download Kibana</p>
          <ULdisc>
            <Li>
              tutorial link{" "}
              <a href="https://www.youtube.com/watch?v=n2HHAvpn6Jo" target="_blank" className="tracking-wide text-blue-500">
                https://www.youtube.com/watch?v=n2HHAvpn6Jo
              </a>
            </Li>
            <Li>
              <strong>Option 1 : </strong>go to{" "}
              <a href="https://www.elastic.co" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co
              </a>{" "}
              &nbsp; choose <strong>Resources</strong> tab ➡️ then <strong>Downloads</strong> box ➡️ scroll to Kibana and download
            </Li>

            <Li>
              <strong>Option 2: </strong> direct link to download Kibana (420MB){" "}
              <a href="https://www.elastic.co/downloads/kibana" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co/downloads/kibana
              </a>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Config Kibana</p>

          <ULdisc>
            <Li>Since Version 8 and up , security is added</Li>
            <Li>To override it, need to disable it in it config file</Li>
            <Li>go to Kibana folder</Li>
            <Li>
              go to <SpanYellow>config</SpanYellow> folder
            </Li>
            <Li>
              open with editor the file <SpanYellow>elasticsearch.yml</SpanYellow>
            </Li>
            <Li>
              Set to <SpanYellow>false</SpanYellow> the following security feature
              <ApplicationPropertiesHighlight propertiesCode={_1_} />
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Run Kibana</p>
          <ULdisc>
            <Li>
              go to <SpanYellow>bin</SpanYellow> folder
            </Li>
            <Li>Open CMD</Li>
            <Li>
              Run command <SpanYellow>kibana.bat</SpanYellow>
            </Li>
            <Li>
              browse to &nbsp;
              <a href="http://localhost:5601" target="_blank" className="tracking-wide text-blue-500">
                http://localhost:5601
              </a>{" "}
              &nbsp; see if Kibana UI is opened.
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_DownloadKibana2718;

const _1_ = `# Enable the following features.
server.port: 5601

server.host: "localhost"

# verify its false to diasable it
server.ssl.enabled: false

# The URLs of the Elasticsearch instances to use for all your queries.
elasticsearch.hosts: ["http://localhost:9200"]

# To disregard the validity of SSL certificates, change this setting's value to 'none'.
elasticsearch.ssl.verificationMode: none`;
