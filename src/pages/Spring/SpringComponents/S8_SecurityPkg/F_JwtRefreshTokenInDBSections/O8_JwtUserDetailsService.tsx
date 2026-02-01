/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";
import { useMemo } from "react";

const O8_JwtUserDetailsService = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderJwtUserDetailsService = useMemo(() => <JavaHighlight javaCode={jwt_user_details_service} />, [jwt_user_details_service]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="O4-jwt-refresh-token-DB - JwtUserDetailsService"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/jwt/JwtUserDetailsService.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 JwtUserDetailsService</p>

        <ULdisc>
          <Li>
            This Class Implement <SpanYellow>UserDetailsService</SpanYellow>
          </Li>
          <Li>
            I define it as <SpanYellow>@Service</SpanYellow> so It will be registered in context.
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="font-semibold">
          🔑 <SpanYellow>JwtUserDetailsService</SpanYellow> code
        </p>
        {renderJwtUserDetailsService}
      </section>
    </MainChildArea>
  );
};

export default O8_JwtUserDetailsService;

const jwt_user_details_service = `package com.backend.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.backend.entity.UserEntity;
import com.backend.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		// Important: Since I use Fetch.LAZY
		// Thus, I want to load here user with roles,
		// It's needed for the authentication process during Login
		// See the @Query in repository
		// Because roles are already loaded,
		// Spring Security can safely build GrantedAuthorities without triggering lazy loading outside the session.
		UserEntity userEntity = userRepo.findByEmailWithRoles(email);

		if (userEntity == null)
			throw new UsernameNotFoundException("user Email  :" + email + " not Exist");

		return new JwtUserDetails(userEntity);
	}
}`;
