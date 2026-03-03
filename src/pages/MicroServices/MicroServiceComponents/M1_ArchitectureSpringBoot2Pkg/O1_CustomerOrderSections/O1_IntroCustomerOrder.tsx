/*


*/
import { GitHub, GitHubLiAnchor, IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";
import microservice_2 from "../../../../../assets/microservice_2.jpg";

const O1_IntroCustomerOrder = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <GitHub>
          <GitHubLiAnchor
            description="From  : (_3_microservices_2_7_18_JDK17)  --->  O1-customer-order"
            gitLink="https://github.com/sshalem/MicroServices/tree/main/_3_microservices_2_7_18_JDK17/O1-customer-order"
          ></GitHubLiAnchor>
        </GitHub>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md bg-gray-200 p-2">🔹 PHASE 1 — Build Business Services (No Cloud Yet)</span>
        </article>
        <ULdisc>
          <ULdisc>
            <Li>In the architecture, I will create 2 micro-services (2 Spring boot apps)</Li>
            <Li>✅ Step 1 — Create customer-service</Li>
            <Li>✅ Step 2 — Create order-service</Li>
            <Li>
              ✅ Step 3 — Communicate using <SpanYellow>RestTemplate</SpanYellow>
            </Li>
          </ULdisc>
          <Li>
            when Client Sends a HTTP Post Request to add Order (For Example) , the request goes via : <strong>Customer Service</strong> ➡️{" "}
            <strong>Order Service</strong>
          </Li>
        </ULdisc>
        <IMG img_name={microservice_2}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroCustomerOrder;
