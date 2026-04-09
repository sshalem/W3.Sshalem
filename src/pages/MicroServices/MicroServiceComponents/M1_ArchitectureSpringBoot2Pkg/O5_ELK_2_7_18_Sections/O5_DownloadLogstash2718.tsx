import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";
import microservice_22 from "../../../../../assets/microservice_22.jpg";

const O5_DownloadLogstash2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="my-8 text-xl">🧩 Download Logstash</p>
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
              &nbsp; choose <strong>Resources</strong> tab ➡️ then <strong>Downloads</strong> box ➡️ scroll to Logstash and download
            </Li>

            <Li>
              <strong>Option 2: </strong> direct link to download Logstash (450MB){" "}
              <a href="https://www.elastic.co/downloads/logstash" target="_blank" className="tracking-wide text-blue-500">
                https://www.elastic.co/downloads/logstash
              </a>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Config Logstash</p>

          <ULdisc>
            <Li>
              <strong>Step 1 : create log files</strong>{" "}
              <ULdisc>
                <Li>Logstash reads files, thus, we must create to each service a log file.</Li>
                <Li>
                  Create log file to each service I want to log, this will create log files with this format{" "}
                  <SpanYellow>logs/customer-serives.log</SpanYellow> , in a shared <SpanYellow>logs</SpanYellow> folder , where all logs will be
                  written (see I added 1 dot with slash)
                  <ApplicationPropertiesHighlight propertiesCode={_1_} />
                </Li>
                <Li>
                  Once app runs all logs will be in same folder
                  <IMG img_name={microservice_22}></IMG>
                </Li>
              </ULdisc>
            </Li>
            <Li>
              <strong>Step 2 : Create Logstash config file</strong>{" "}
              <ULdisc>
                <Li>With Logstash config file we tell :</Li>
                <ULdisc>
                  <Li>where logs are</Li>
                  <Li>where to send them</Li>
                  <Li>
                    Create <SpanYellow>logstash.conf</SpanYellow> that takes all log files ( <SpanYellow>*.log</SpanYellow> ) from the path where id
                    resides
                  </Li>
                  <Li>
                    The pattern of the conf gile is <SpanYellow>input</SpanYellow> curly brackets , <SpanYellow>filter</SpanYellow> curly brackets,{" "}
                    <SpanYellow>output</SpanYellow> curly brackets, but here I don't use the filter (Check ChatGPT how to use it)
                    <ApplicationPropertiesHighlight propertiesCode={_2_} />
                  </Li>
                </ULdisc>
              </ULdisc>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-2xl">🧩 Run Logstash</p>
          <ULdisc>
            <Li>
              go to <SpanYellow>bin</SpanYellow> folder
            </Li>
            <Li>Open CMD</Li>
            <Li>
              Run command <ApplicationPropertiesHighlight propertiesCode={_3_} />
            </Li>
            <Li>
              browse to &nbsp;
              <a href="http://localhost:9600" target="_blank" className="tracking-wide text-blue-500">
                http://localhost:9600
              </a>{" "}
              &nbsp; see if Logstash is running
            </Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_DownloadLogstash2718;

const _1_ = `# ONE shared logs folder , create this for each service
logging.file.name=./logs/CUSTOMER-SERVICE.log

logging.file.name=./logs/ORDER-SERVICE.log

logging.file.name=./logs/ITEM-SERVICE.log

logging.file.name=./logs/API-GATEWAY.log`;

const _2_ = `input {
  file {
    path => "D:/_Software/_micro-services/MicroServices/_3_microservices_2_7_18_JDK17/O6-C-O-I-E-G-SK-ELK/logs/*.log"
    start_position => "beginning"   
  }
}

output {
  elasticsearch {
    hosts => ["http://localhost:9200"]
  }
  stdout { codec => rubydebug }
}`;

const _3_ = `logstash -f config/logstash.conf`;
