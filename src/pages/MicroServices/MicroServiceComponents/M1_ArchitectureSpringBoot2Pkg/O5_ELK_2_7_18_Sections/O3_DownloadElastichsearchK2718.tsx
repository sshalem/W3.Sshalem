import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_DownloadElastichsearchK2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Download Elastichsearch</p>
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
              &nbsp; choose <strong>Resources</strong> tab ➡️ then <strong>Downloads</strong> box ➡️ scroll to Elastichsearch and download
            </Li>

            <Li>
              <strong>Option 2: </strong> direct link to download Elastichsearch (490MB){" "}
              <a href="https://www.elastic.co/downloads/elasticsearch" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co/downloads/elasticsearch
              </a>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Config Elastichsearch</p>

          <ULdisc>
            <Li>Since Version 8 and up , security is added</Li>
            <Li>To override it, need to disable it in it config file</Li>
            <Li>go to Elastichsearch folder</Li>
            <Li>
              go to <SpanYellow>config</SpanYellow> folder
            </Li>
            <Li>
              open with editor the file <SpanYellow>elasticsearch.yml</SpanYellow>
            </Li>
            <Li>
              Set to <SpanYellow>false</SpanYellow> the following security features (they were true by default)
              <ApplicationPropertiesHighlight propertiesCode={_1_} />
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Run Elastichsearch</p>
          <ULdisc>
            <Li>
              go to <SpanYellow>bin</SpanYellow> folder
            </Li>
            <Li>Open CMD</Li>
            <Li>
              Run command <SpanYellow>elasticsearch.bat</SpanYellow>
            </Li>
            <Li>
              browse to &nbsp;
              <a href="http://localhost:9200" target="_blank" className="tracking-wide text-blue-500">
                http://localhost:9200
              </a>{" "}
              &nbsp; see if we get a JSON response from Elasticsearch , this way we can tell if its running.
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_DownloadElastichsearchK2718;

const _1_ = `# Enable security features
xpack.security.enabled: false

xpack.security.enrollment.enabled: false

# Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents
xpack.security.http.ssl:
  enabled: false


# Enable encryption and mutual authentication between cluster nodes
xpack.security.transport.ssl:
  enabled: false`;
