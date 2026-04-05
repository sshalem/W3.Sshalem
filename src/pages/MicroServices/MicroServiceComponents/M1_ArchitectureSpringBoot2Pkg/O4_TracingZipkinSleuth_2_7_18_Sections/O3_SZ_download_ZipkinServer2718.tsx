import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_SZ_download_ZipkinServer2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">Download Zipkin server</article>
        <ULdisc>
          <Li>
            need to dowload the executable JAR file from{" "}
            <a className="text-blue-500" href="https://zipkin.io/" target="_blank">
              https://zipkin.io/
            </a>
            &nbsp; but server return 500
          </Li>
          <Li>
            chatGPT gave this MAVEN repo to download the latest <SpanYellow>Zipkin server</SpanYellow>
            <a className="text-blue-500" href="https://repo1.maven.org/maven2/io/zipkin/zipkin-server/" target="_blank">
              https://repo1.maven.org/maven2/io/zipkin/zipkin-server/
            </a>
          </Li>
          <Li>
            So , I download latest Zipkin server <SpanYellow>zipkin-server-3.6.0-exec.jar</SpanYellow> (Size 129MB)
          </Li>
          <Li>
            run it as
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_SZ_download_ZipkinServer2718;

const _1_ = `java -jar zipkin-server-3.6.0-exec.jar`;
