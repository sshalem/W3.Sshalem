import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O6_AuditConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 4: Create AuditConfig class</p>
        We need to define a Component or a Bean (With config class) , to enable the Autining. <br />I prefer the Config class and Bean creation,
        instead of creating a component (ChatGPT shows example with Component class for Auditing) .
        <ULdisc>
          <Li>
            create class <SpanGrey>AuditConfig </SpanGrey>
          </Li>
          <Li>
            annotate it with:
            <ULdisc>
              <Li>
                <SpanGrey>@Configuration</SpanGrey>
              </Li>
              <Li>
                <SpanGrey>@EnableJpaAuditing(auditorAwareRef = "auditorProvider")</SpanGrey>
              </Li>
              <Li>
                create a <SpanGrey>@Bean</SpanGrey> of <SpanGrey>AuditorAwareImpl</SpanGrey>
              </Li>
            </ULdisc>
          </Li>
          <Li>
            <p className="my-2">
              See GitHub projects{" "}
              <Anchor
                description="O1-Audit-Spring-JPA"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
              ></Anchor>{" "}
              or{" "}
              <Anchor
                description="O2-Spring-JPA-Audit-Security"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O2-Spring-JPA-Audit-Security"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={config}></JavaHighlight>
        </ULdisc>
      </article>
      <hr />
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 5: Test JPA Audit App</p>
        <ULdisc>
          <Li>
            <Anchor
              description="GitHub - O1-Audit-Spring-JPA"
              href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
            ></Anchor>
          </Li>
          <Li>
            Open Postman in collection of <strong>10-Auditing</strong>
          </Li>
          <Li>
            Send Post request <strong>createUser</strong> then check DB
          </Li>
          <Li>
            Send Put request <strong>addRoleUpdateUser</strong> then check DB
          </Li>
        </ULdisc>
      </article>
    </MainChildArea>
  );
};

export default O6_AuditConfig;

const config = `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorProvider")
public class AuditConfig {

	@Bean
	AuditorAware<String> auditorProvider() {
		return new AuditorAwareImpl();
	}
}`;
