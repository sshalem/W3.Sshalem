import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O3_DownloadLogstash2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-xl">🧩 Download Logstash</p>
          <ULdisc>
            <Li>
              <strong>Option 1 : </strong>go to{" "}
              <a href="https://www.elastic.co" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co
              </a>{" "}
              &nbsp; choose <strong>Resources</strong> tab ➡️ then <strong>Downloads</strong> box ➡️ scroll to Logstash and download
            </Li>

            <Li>
              <strong>Option 2: </strong> direct link to download Logstash (450MB)
              <a href="https://www.elastic.co/downloads/logstash" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co/downloads/logstash
              </a>
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O3_DownloadLogstash2718;
