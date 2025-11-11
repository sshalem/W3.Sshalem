/*


*/
import { useMemo } from "react";
import { Anchor, MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O7_JwtUserDetails = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderJwtUserDetails = useMemo(() => <JavaHighlight javaCode={jwt_user_details} />, [jwt_user_details]);
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot Version v2.6.11 - JwtUserDetails"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11/src/main/java/com/O2/jwt/JwtUserDetails.java"
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
              <SpanGrey>isAccountNonExpired()</SpanGrey> - set to true , handle by <SpanGrey>AccountExpiredException</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>isAccountNonLocked()</SpanGrey> - set to true, handle by <SpanGrey>LockedException</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>isCredentialsNonExpired()</SpanGrey> - set to true, handle by <SpanGrey>CredentialsExpiredException</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>isEnabled()</SpanGrey> - set to true , handle by <SpanGrey>DisabledException</SpanGrey>
            </Li>
          </ULdisc>
        </article>
        {renderJwtUserDetails}
      </section>
    </MainChildArea>
  );
};

export default O7_JwtUserDetails;

const jwt_user_details = `package com.O2.jwt;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import com.O2.entity.UserEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.O2.entity.RoleEntity;

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
