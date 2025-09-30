import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O7_JwtUserDetails = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
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
        <JavaHighlight javaCode={jwt_user_details}></JavaHighlight>
      </section>
      <hr />

      <article>
        {/* <ULdisc>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </ULdisc> */}
      </article>
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
