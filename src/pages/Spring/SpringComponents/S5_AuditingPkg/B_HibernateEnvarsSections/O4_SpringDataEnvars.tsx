import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O4_SpringDataEnvars = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 With Spring Data JPA Auditing: What It Can Do</p>
        <p className="my-2">
          See GitHub project{" "}
          <Anchor
            description="SPring 2.7.18 spring-data/envers/docs/"
            href="https://docs.spring.io/spring-data/envers/docs/current/reference/html/#core.repository-populators"
          ></Anchor>
        </p>
        <p className="my-2">
          See GitHub project{" "}
          <Anchor
            description="Spring boot 3.5.5 /spring-data/jpa/reference/envers.html"
            href="https://docs.spring.io/spring-data/jpa/reference/envers.html"
          ></Anchor>
        </p>
        You can automatically populate:
        <ULdisc>
          <Li>Spring Docs</Li>
          <Li>
            <SpanGrey>updatedOn</SpanGrey> (timestamp)
          </Li>
          <Li>
            <SpanGrey>createdBy</SpanGrey> (user)
          </Li>
          <Li>
            <SpanGrey>updatedBy</SpanGrey> (user)
          </Li>
          <Li>
            But it <SpanRed>cannot</SpanRed> track <SpanRed>What changed</SpanRed>
          </Li>
        </ULdisc>
      </article>
      <hr />
      {/*  */}
      {/*  */}
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 1: Autitable Class with Audit Fields</p>
        You can automatically populate:
        <ULdisc>
          <Li>
            create an <SpanGrey>Auditable</SpanGrey> class
          </Li>
          <Li>
            Add the Audit fields <strong>createdBy , createdDate , lastModifiedBy , lastModifiedDate</strong>{" "}
          </Li>
          <Li>
            also add <strong>equals</strong> and <strong>hashCode</strong>
          </Li>
          <Li>
            Annotate the class with :
            <ULdisc>
              <Li>
                <SpanGrey>@MappedSuperclass</SpanGrey>
              </Li>
              <Li>
                <SpanGrey>@EntityListeners(AuditingEntityListener.class)</SpanGrey>
              </Li>
            </ULdisc>
            <Li>
              See the fields validation I added ( <SpanGrey>insertable</SpanGrey>, <SpanGrey>nullable</SpanGrey> , <SpanGrey>updatable</SpanGrey>)
            </Li>
          </Li>
          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="O1-Audit-Spring-JPA"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={autidatble}></JavaHighlight>
        </ULdisc>
      </article>
      <hr />
      {/*  */}
      {/*  */}
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 2: Extend Entity class from Autitable</p>

        <ULdisc>
          <Li>Extend the Entity class from Autitable</Li>
          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="O1-Audit-Spring-JPA"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={entity}></JavaHighlight>
        </ULdisc>
      </article>
      <hr />
      {/*  */}
      {/*  */}
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 3: implements AuditorAware</p>
        Create a class to tell Spring who the current user is.
        <ULdisc>
          <Li>
            create class <SpanGrey>AuditorAwareImpl</SpanGrey> that implements <SpanGrey>{"AuditorAware<String>"}</SpanGrey>
          </Li>
          <Li>Since I don't implement Security , thus , there is no need to know who update/change/created any thing in the App</Li>
          <Li>
            Thus, in DB , we will see that on the fields of <SpanGrey>createdBy</SpanGrey> and <SpanGrey>lastModifiedBy</SpanGrey> the message{" "}
            <SpanGrey>"registered by meta-data"</SpanGrey>
          </Li>
          <Li>See using Security in next section 4.</Li>
          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="O1-Audit-Spring-JPA"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={audit_aware}></JavaHighlight>
        </ULdisc>
      </article>
      <hr />
      {/*  */}
      {/*  */}
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
                <SpanGrey>@EnableJpaAuditing</SpanGrey>
              </Li>
              <Li>
                create a <SpanGrey>@Bean</SpanGrey> of <SpanGrey>AuditorAwareImpl</SpanGrey>
              </Li>
            </ULdisc>
          </Li>
          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="O1-Audit-Spring-JPA"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
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
      <hr />
    </MainChildArea>
  );
};

export default O4_SpringDataEnvars;

const autidatble = `import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class Auditable {

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private String createdBy;

    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdDate;

    @LastModifiedBy
    @Column(insertable = false)
    private String lastModifiedBy;

    @LastModifiedDate
    @Column(insertable = false)
    private LocalDateTime lastModifiedDate;

    public Auditable() {
        super();
    }

  // Getters , Setter , hashCode , equals , 
}`;

const entity = `@Entity
@Table(name = "USERS_TB")
public class UserEntity extends Auditable implements Serializable {

    private static final long serialVersionUID = -5199469587304114249L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long pid;
    private String name;
    private String email;
    private String password;
  
  // G, S, toString, hash equals
}
  

@Entity
@Table(name = "ROLES_TB")
public class RoleEntity extends Auditable implements Serializable {

    private static final long serialVersionUID = 4547155074103443567L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String role;
    private long pid;

  // G, S, toString, hash equals
}
`;

const config = `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class AuditConfig {

    @Bean
    AuditorAware<String> auditorProvider() {
        return new AuditorAwareImpl();
    }
}`;

const audit_aware = `import java.util.Optional;
import org.springframework.data.domain.AuditorAware;

public class AuditorAwareImpl implements AuditorAware<String> {

    @Override
    public Optional<String> getCurrentAuditor() {
        return Optional.of("registered by meta-data");
    }
}`;
