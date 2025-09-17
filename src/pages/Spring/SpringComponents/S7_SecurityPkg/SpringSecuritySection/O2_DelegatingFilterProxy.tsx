import { Anchor, IMG, MainChildArea } from "../../../../../components";
import security_1 from "../../../../../assets/security_1.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";

const O2_DelegatingFilterProxy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <article>
          <ULdisc>
            <Li>
              <Anchor
                description="spring security - DelegatingFilterProxy "
                href="https://docs.spring.io/spring-security/reference/servlet/architecture.html#servlet-delegatingfilterproxy"
              ></Anchor>
            </Li>
          </ULdisc>
        </article>
        <article>
          Spring provides a Filter implementation named <strong>DelegatingFilterProxy</strong> that allows bridging between the Servlet container’s
          lifecycle and Spring’s <strong>ApplicationContext</strong>. <br />
          The Servlet container allows registering Filter instances by using its own standards, but it is not aware of Spring-defined Beans. <br />
          You can register <strong>DelegatingFilterProxy</strong> through the standard Servlet container mechanisms but delegate all the work to a
          Spring Bean that implements Filter.
          <br />
          Here is a picture of how <strong>DelegatingFilterProxy</strong> fits into the Filter instances and the <strong>FilterChain</strong>.
        </article>
        <IMG img_name={security_1}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O2_DelegatingFilterProxy;
