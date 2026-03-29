import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O5_RandomPortTestAPIGateway2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          Up till now , I run :
          <ULdisc>
            <Li>customer and order service with diffrent ports (8001, 8002, 9001, 9002, 9003)</Li>
            <Li>I config the ports by myself manually</Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="my-8 text-xl">✅ Recommendation</p>
          Best practice in microservicesm ,This is the most common production-style setup 🚀
          <ULdisc>
            <Li>
              ✔ Eureka → fixed port <SpanYellow>8761</SpanYellow>
            </Li>
            <Li>
              ✔ API Gateway → fixed port <SpanYellow>5001</SpanYellow>
            </Li>
            <Li>
              ✔ Zipkin → fixed port <SpanYellow>9411</SpanYellow>
            </Li>
            <Li>
              ✔ Microservices → <SpanYellow>server.port=0</SpanYellow>
            </Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="my-8 text-xl">✅ Setup for Random port</p>
          <ULdisc>
            <Li></Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O5_RandomPortTestAPIGateway2718;
