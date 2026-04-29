import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";
import microservice_28 from "../../../../../assets/microservice_28.jpg";
import microservice_29 from "../../../../../assets/microservice_29.jpg";
import microservice_30 from "../../../../../assets/microservice_30.jpg";
import microservice_31 from "../../../../../assets/microservice_31.jpg";

const O4_SZ_download_ZipkinServer2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">🚵‍♀️ How to Download Zipkin server</article>
        <ULdisc>
          {" "}
          <Li>
            Direct link to download the latest <Redtext>Zipkin server 3.6.1</Redtext>{" "}
            <a className="text-blue-500" href="https://repo1.maven.org/maven2/io/zipkin/zipkin-server/3.6.1/" target="_blank">
              https://repo1.maven.org/maven2/io/zipkin/zipkin-server/3.6.1/
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

        <article className="my-8 text-xl font-semibold">⭐ How to get the direct download link</article>
        <ULdisc>
          <Li>
            go to{" "}
            <a className="tracking-wider text-blue-500 underline" href="https://zipkin.io/" target="_blank">
              https://zipkin.io/
            </a>
          </Li>
          <Li>
            Click On Home ➡️ Under title <Redtext>Where to go next</Redtext> click on the link{" "}
            <a href="https://github.com/openzipkin/zipkin/" target="_blank" className="tracking-wider text-blue-500 underline">
              openzipkin/zipkin
            </a>{" "}
            , it will redirect to <Redtext>GIT</Redtext> page of zipkin
            <IMG img_name={microservice_29}></IMG>
          </Li>
          <Li>
            In the Git page , scroll to title <Redtext>Quick-Start</Redtext> and click on the{" "}
            <a
              href="https://central.sonatype.com/search?q=zipkin&namespace=io.zipkin&name=zipkin-server&sort=published"
              target="_blank"
              className="tracking-wider text-blue-500 underline"
            >
              latest released server
            </a>
            <IMG img_name={microservice_30}></IMG>
          </Li>
          <Li>
            It redirects to{" "}
            <a
              href="https://central.sonatype.com/search?q=zipkin&namespace=io.zipkin&name=zipkin-server&sort=published"
              target="_blank"
              className="tracking-wider text-blue-500 underline"
            >
              maven central repository
            </a>
          </Li>
          <Li>
            click on Zipkin-Server
            <IMG img_name={microservice_28}></IMG>
          </Li>
          <Li>
            click on <Redtext>versions</Redtext> ➡️ select version <Redtext>3.6.1</Redtext> ➡️ click on <Redtext>Browse</Redtext>
            <IMG img_name={microservice_31}></IMG>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_SZ_download_ZipkinServer2718;

const _1_ = `java -jar zipkin-server-3.6.0-exec.jar`;
