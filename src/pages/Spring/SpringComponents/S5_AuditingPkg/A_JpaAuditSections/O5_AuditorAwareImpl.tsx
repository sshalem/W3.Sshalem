/*
/spring/audit/jpa-audit#5.AuditorAwareImplclass
AuditorAwareImpl class --> (SPRING)(Auditing)(Jpa Audit)
*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O5_AuditorAwareImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
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
    </MainChildArea>
  );
};

export default O5_AuditorAwareImpl;

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
