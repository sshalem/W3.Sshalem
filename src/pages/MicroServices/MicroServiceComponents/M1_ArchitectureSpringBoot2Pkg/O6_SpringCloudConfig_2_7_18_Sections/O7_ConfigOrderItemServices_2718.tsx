import { IMG, Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow, XmlHighlight } from "../../../../../components/Highlight";
import microservice_27 from "../../../../../assets/microservice_27.jpg";

const O7_ConfigOrderItemServices_2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="text-xl font-semibold">Config Order/Item services with Cloud Config Server</p>
        <article className="my-8">
          Repeat same steps in previous section :
          <ULdisc>
            <Li>WEB dependency (Already added)</Li>
            <Li>Actuator dependency (Already added)</Li>
            <Li>Devtools dependency (Already added, Only during devcelopment , on production remove it)</Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-xl font-semibold">
            1️⃣ Add <SpanYellow>Spring Cloud config Client</SpanYellow> dependency
          </p>
          <ULdisc>
            <Li>Add the following dependency to EACH microservice</Li>
          </ULdisc>
          <XmlHighlight xmlCode={_1_} />
        </article>
        <article className="my-8">
          <p className="text-xl font-semibold">2️⃣ Create ITEM-SERVICE / ORDER-SERVICE properties on Config Storage on Git</p>
          <ULdisc>
            <Li>Config git for ITEM-SERVICE and ORDER-SERVICE (same as in section 6)</Li>
          </ULdisc>
        </article>
        <article className="my-8">
          <p className="text-xl font-semibold"> 3️⃣ Move ITEM-SERVICE / ORDER-SERVICE properties to GIT</p>
          <ULdisc>
            <Li>Copy/paste the relevent properties to Git repo, same actions as done in section 6.</Li>
            <Li>
              This is what is looks now
              <IMG img_name={microservice_27}></IMG>
            </Li>
          </ULdisc>
        </article>

        <article className="my-8">
          <p className="my-8 text-xl font-semibold"> 4️⃣ How it works internally</p>
          When <SpanYellow>application.properties</SpanYellow> of <SpanYellow>customer-service</SpanYellow> runs with profile , it checks the profile
          which is
          <SpanYellow>h2</SpanYellow>, then <SpanYellow>Config Server</SpanYellow> loads:
          <ULdisc>
            <Li>1️⃣ CUSTOMER-SERVICE.properties</Li>
            <Li>2️⃣ CUSTOMER-SERVICE-h2.properties</Li>
          </ULdisc>
          same process goes for <SpanYellow>ORDER-SRVICE</SpanYellow> and <SpanYellow>ITEM-SRVICE</SpanYellow>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O7_ConfigOrderItemServices_2718;

const _1_ = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>`;
