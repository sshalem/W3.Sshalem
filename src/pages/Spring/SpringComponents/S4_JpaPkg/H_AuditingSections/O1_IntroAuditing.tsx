import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O1_IntroAuditing = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      JPA Auditing Intro JavaTechie{" - "}
      <Anchor
        description="Spring Data JPA Auditing - Java Techie "
        href="https://www.youtube.com/watch?v=Pc7Une_5rMs&list=PLVz2XdJiJQxxdOhu-xmEUYDzY_Pz8cRGa&ab_channel=JavaTechie"
      ></Anchor>
      <div className="my-8">
        Auditing in Spring Boot (with Spring Data JPA) is a powerful way to automatically track entity changes — such as when a row was created or
        updated, and by whom. <br />I used it in my{" "}
        <Anchor
          description="e-commerce"
          href="https://github.com/sshalem/FullStack/tree/main/09-E-commerce/e-commerce-backend/src/main/java/com/ecommerce/audit"
        ></Anchor>{" "}
        project , where I have multiple users (ADMIN, COMPANY, CUSTOMER) , thus I config it accordingly (Use this for multiple mtype of users).
      </div>
      <hr />
      {/*  */}
      {/*  */}
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 Spring Data JPA Auditing: What It Can Do</p>
        You can automatically populate:
        <ULdisc>
          <Li>
            <SpanGrey>createdAt</SpanGrey> (timestamp)
          </Li>
          <Li>
            <SpanGrey>updatedOn</SpanGrey> (timestamp)
          </Li>
          <Li>
            <SpanGrey>createdBy</SpanGrey> (user)
          </Li>
          <Li>
            <SpanGrey>updatedBy</SpanGrey> (user)
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
          <Li>Add the Audit fields</Li>
          <Li>
            also add <SpanGrey>equals</SpanGrey> and <SpanGrey>hashCode</SpanGrey>
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
              See the fileds validation I added ( <SpanGrey>insertable</SpanGrey>, <SpanGrey>nullable</SpanGrey> , <SpanGrey>updatable</SpanGrey>)
            </Li>
          </Li>
          <JavaHighlight javaCode={autidatble}></JavaHighlight>
        </ULdisc>
      </article>
      <hr />
      {/*  */}
      {/*  */}
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 2: Extend Entity class from Autitable</p>
        Extend the Entity class from Autitable
        <ULdisc>
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
          <Li>
            Why I define <SpanGrey>String</SpanGrey> in <SpanGrey>{"AuditorAware<String>"}</SpanGrey>? Maybe I can do somthing else ? Is it because
            the username is a string in my security implementation? I think it is because I use Spring security with user name as String
          </Li>
          <Li>What if I don't use security , how to implement it?</Li>
          <Li>See ChatGPT how to implement w/o using Security</Li>

          <JavaHighlight javaCode={config}></JavaHighlight>
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
          <JavaHighlight javaCode={config}></JavaHighlight>
        </ULdisc>
      </article>
      <hr />
      {/*  */}
      {/*  */}
    </MainChildArea>
  );
};

export default O1_IntroAuditing;

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
@Table(name = "CUSTOMERS")
public class CustomerEntity extends Auditable {

	@Id
	private long id;
	private UUID customerUUID;
	private String firstName;
	private String lastName;
	private String phone;
	private String email;
	private String password;
  
  // G, S, toString, hash equals
}`;

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
