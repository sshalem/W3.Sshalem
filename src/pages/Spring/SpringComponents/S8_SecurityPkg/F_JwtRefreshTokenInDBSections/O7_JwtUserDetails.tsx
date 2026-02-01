/*


*/
import { useMemo } from "react";
import { Anchor, MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O7_JwtUserDetails = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderJwtUserDetails = useMemo(() => <JavaHighlight javaCode={jwt_user_details} />, [jwt_user_details]);
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="O4-jwt-refresh-token-DB - JwtUserDetails"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/jwt/JwtUserDetails.java"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 JwtUserDetails</p>
        Implementation of JwtUserDetails which Implements UserDetails.
        <article>
          see that there are 4 methods that are form UserDetails that I set by default to be hardcoded.
          <ULdisc>
            <Li>
              <SpanYellow>isAccountNonExpired()</SpanYellow> - set to true , handle by <SpanYellow>AccountExpiredException</SpanYellow>
            </Li>
            <Li>
              <SpanYellow>isAccountNonLocked()</SpanYellow> - set to true, handle by <SpanYellow>LockedException</SpanYellow>
            </Li>
            <Li>
              <SpanYellow>isCredentialsNonExpired()</SpanYellow> - set to true, handle by <SpanYellow>CredentialsExpiredException</SpanYellow>
            </Li>
            <Li>
              <SpanYellow>isEnabled()</SpanYellow> - set to true , handle by <SpanYellow>DisabledException</SpanYellow>
            </Li>
          </ULdisc>
        </article>
        {renderJwtUserDetails}
      </section>
    </MainChildArea>
  );
};

export default O7_JwtUserDetails;

const jwt_user_details = `package com.backend.jwt;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.backend.entity.RoleEntity;
import com.backend.entity.UserEntity;

public class JwtUserDetails implements UserDetails {

	private static final long serialVersionUID = -1689702881017645097L;
	private UserEntity userEntity;

	public JwtUserDetails(UserEntity userEntity) {
		super();
		this.userEntity = userEntity;
	}

	public UserEntity getUser() {
		return userEntity;
	}

	public void setUser(UserEntity userEntity) {
		this.userEntity = userEntity;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

		Set<SimpleGrantedAuthority> roles = new HashSet<>();

		Set<RoleEntity> rolesFromDB = userEntity.getRoles();

		rolesFromDB.forEach(role -> {
			SimpleGrantedAuthority grantedAuthority = new SimpleGrantedAuthority("ROLE_" + role.getRole());
			roles.add(grantedAuthority);
		});

		return roles;
	}

	@Override
	public String getPassword() {
		return this.userEntity.getPassword();
	}

	@Override
	public String getUsername() {
		return this.userEntity.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

}`;
