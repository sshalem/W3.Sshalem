import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_19 from "../../../../../assets/microservice_19.jpg";

const O1_ELK2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-xl">🧩 Why ELK fits microservices so well</p>
          <ULdisc>
            <Li>Microservices create lots of small, independent services</Li>
            <Li>each generating its own logs.</Li>
            <Li>
              <SpanYellow>ELK stack</SpanYellow> helps centralize Microservices Logging and make sense of all that.
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-xl">🧩 Tutorial </p>
          <ULdisc>
            <Li>
              <a href="https://www.youtube.com/watch?v=n2HHAvpn6Jo" target="_blank" className="tracking-wide text-blue-500">
                https://www.youtube.com/watch?v=n2HHAvpn6Jo
              </a>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          Classic ELK Stack with my microservices (Spring Boot 2.7.18)
          <ULdisc>
            <Li>
              <SpanYellow>Elasticsearch</SpanYellow> - 👉 is a NoSQL database optimized for search and analytics. A fast search engine that stores and
              indexes data so you can query it quickly.
            </Li>
            <Li>
              <SpanYellow>Logstash</SpanYellow> - A pipeline tool that collects, processes, and sends data (like logs) to Elasticsearch.
            </Li>
            <Li>
              <SpanYellow>Kibana</SpanYellow> - A visualization interface where you explore data using dashboards, charts, and graphs.
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p>🔄 How it works together</p>
          <ULdisc>
            <Li>
              <strong>Logstash</strong> collects data from different sources
            </Li>
            <Li>
              Sends it to <strong>Elasticsearch</strong> for storage and indexing
            </Li>
            <Li>
              <strong>Kibana</strong> lets you search and visualize that data
            </Li>
          </ULdisc>
          <IMG img_name={microservice_19}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_ELK2718;
