import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O2_SpringJpaAudit = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">🔑 With Spring Data JPA Auditing: What It Can Do</p>
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
          <Li>
            But it <SpanRed>cannot</SpanRed> track <SpanRed>What changed</SpanRed>
          </Li>
        </ULdisc>
        <p className="my-2">
          See GitHub project{" "}
          <Anchor description="O1-Audit-Spring-JPA" href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"></Anchor>
        </p>
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
        <p className="my-4 text-lg font-semibold">🔍 What is AuditorAware?</p>
        <SpanGrey>{"AuditorAware<T>"}</SpanGrey> is an interface provided by Spring Data that allows you to define who is performing an action (the
        <SpanGrey>"auditor"</SpanGrey> ) . <br /> This is typically used to populate fields like:
        <ULdisc>
          <Li>
            <SpanGrey>@CreatedBy</SpanGrey>
          </Li>
          <Li>
            <SpanGrey>@LastModifiedBy</SpanGrey>
          </Li>
        </ULdisc>
        <p className="my-4 mt-8 text-lg font-semibold">🧩 What Does AuditorAwareImpl Do?</p>
        <ULdisc>
          <Li>
            <SpanGrey>AuditorAwareImpl</SpanGrey> is a custom implementation of the <SpanGrey>AuditorAware</SpanGrey> interface.
          </Li>
          <Li>It returns the current user (or system) responsible for creating or modifying an entity.</Li>
        </ULdisc>
        {/*  */}
        <p className="my-4 mt-8 text-lg font-semibold">🛠️ 3 Audit options</p>
        <p>I can Audit 3 scneraios:</p>
        <ULdisc>
          <Li>W/O Spring Security - this way no user is actuallu making the audit</Li>
          <Li>With Spring security - this way the authenticated user will be registered as the Auditor</Li>
          <Li>With Spring security Multiple user types (ADMIN, SUPER-ADMIN, USER)</Li>
        </ULdisc>
        {/*  */}
        <p className="my-4 mt-8 text-lg font-semibold">🏷️ 1. Audit w/o Spring Security</p>
        <ULdisc>
          <Li>
            create class <SpanGrey>AuditorAwareImpl</SpanGrey> that implements <SpanGrey>{"AuditorAware<String>"}</SpanGrey>
          </Li>
          <Li>
            In DB , we will see that on the fields of <SpanGrey>createdBy</SpanGrey> and <SpanGrey>lastModifiedBy</SpanGrey> the message{" "}
            <SpanGrey>"system-user"</SpanGrey>
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
          <JavaHighlight javaCode={audit_aware}></JavaHighlight>
        </ULdisc>
        {/*  */}
        <p className="my-4 mt-8 text-lg font-semibold">🏷️ 2. Audit with Spring Security</p>
        <ULdisc>
          <Li>
            create class <SpanGrey>AuditorAwareImpl</SpanGrey> that implements <SpanGrey>{"AuditorAware<String>"}</SpanGrey>
          </Li>
          <Li>
            In DB , we will see that on the fields of <SpanGrey>createdBy</SpanGrey> and <SpanGrey>lastModifiedBy</SpanGrey> the message{" "}
            <SpanGrey>"system-user"</SpanGrey>
          </Li>

          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="O2-Spring-JPA-Audit-Security"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O2-Spring-JPA-Audit-Security"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={audit_aware_security}></JavaHighlight>
        </ULdisc>
        {/*  */}
        <p className="my-4 mt-8 text-lg font-semibold">🏷️ 3. Audit with Spring Security for Multiple USer types (SUPER-ADMIN, ADMIN, USER)</p>
        <ULdisc>
          <Li>
            create class <SpanGrey>AuditorAwareImpl</SpanGrey> that implements <SpanGrey>{"AuditorAware<String>"}</SpanGrey>
          </Li>
          <Li>
            In DB , we will see that on the fields of <SpanGrey>createdBy</SpanGrey> and <SpanGrey>lastModifiedBy</SpanGrey> the message{" "}
            <SpanGrey>"system-user"</SpanGrey>
          </Li>

          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="e-commerce - /audit/AuditorAwareImpl"
                href="https://github.com/sshalem/FullStack/blob/main/09-E-commerce/e-commerce-backend/src/main/java/com/ecommerce/audit/AuditorAwareImpl.java"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={audit_aware_multiple_users}></JavaHighlight>
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
      <hr />
    </MainChildArea>
  );
};

export default O2_SpringJpaAudit;

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
		return Optional.of("system-user");
	}
}`;

const audit_aware_security = `import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class AuditorAwareImpl implements AuditorAware<String> {

	@Override
	public Optional<String> getCurrentAuditor() {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication == null || !authentication.isAuthenticated()) {
			throw new UsernameNotFoundException("Auditing process " + authentication.getName() + " not found...");
		}

		return Optional.of(authentication.getName());
	}
}`;

const audit_aware_multiple_users = `import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ecommerce.jwt.AdminUserDetails;
import com.ecommerce.jwt.CompanyUserDetails;
import com.ecommerce.jwt.CustomerUserDetails;

public class AuditorAwareImpl implements AuditorAware<String> {

	@Override
	public Optional<String> getCurrentAuditor() {

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication == null || !authentication.isAuthenticated()) {
			throw new UsernameNotFoundException("During Auditing process " + authentication.getName() + " not found...");
		}

		Object principal = authentication.getPrincipal();

		if (principal instanceof AdminUserDetails) {
			AdminUserDetails adminUserDetails = (AdminUserDetails) principal;
			return Optional.of(adminUserDetails.getAdminEntity().getUsername());
		}
		if (principal instanceof CompanyUserDetails) {
			CompanyUserDetails companyUserDetails = (CompanyUserDetails) principal;
			return Optional.of(companyUserDetails.getCompanyEntity().getName());
		}
		if (principal instanceof CustomerUserDetails) {
			CustomerUserDetails customerUserDetails = (CustomerUserDetails) principal;
			return Optional.of(customerUserDetails.getCustomerEntity().getFirstName() + " " + customerUserDetails.getCustomerEntity().getLastName());
		}

		return Optional.of("register");
	}
}`;
