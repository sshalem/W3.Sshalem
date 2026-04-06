import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_SZ_Test2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">Run and Test</article>
        <ULdisc>
          <Li>
            Before Running the services , add the following Logger Line to each method , this will show the info we want to see
            <JavaHighlight javaCode={_2_} />
          </Li>
          <Li>
            Run project <SpanYellow>O5-C-O-I-E-G-SleuthZipkin</SpanYellow> from git
          </Li>
          <Li>
            Run Zipkin server
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>
            Browse to{" "}
            <a href="http://localhost:9411" className="text-blue-500" target="_blank">
              http://localhost:9411
            </a>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_SZ_Test2718;

const _1_ = `java -jar zipkin-server-3.6.0-exec.jar`;

const _2_ = `LOGGER.info("Customer/Order/Item server port " + webServerAppCtxt.getWebServer().getPort());`;
