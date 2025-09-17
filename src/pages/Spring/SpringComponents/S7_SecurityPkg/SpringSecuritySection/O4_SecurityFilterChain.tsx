import { Anchor, IMG, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import security_4 from "../../../../../assets/security_4.jpg";

const O4_SecurityFilterChain = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <article>
          SecurityFilterChain is used by FilterChainProxy to determine which Spring Security Filter instances should be invoked for the current
          request. The following image shows the role of SecurityFilterChain.
          <ULdisc>
            <Li>
              <Anchor
                description="spring security - SecurityFilterChain"
                href="https://docs.spring.io/spring-security/reference/servlet/architecture.html#servlet-securityfilterchain"
              ></Anchor>
            </Li>
          </ULdisc>
          <IMG img_name={security_4}></IMG>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_SecurityFilterChain;
