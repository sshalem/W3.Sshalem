/*


*/
import { Anchor, MainChildArea, ULDecimal } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";
import { useMemo } from "react";

const O4_Entity = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderUserEntity = useMemo(() => <JavaHighlight javaCode={user_entity} />, [user_entity]);
  const renderRoleEntity = useMemo(() => <JavaHighlight javaCode={role_entity} />, [role_entity]);
  const renderRefreshEntity = useMemo(() => <JavaHighlight javaCode={refresh_entity} />, [user_entity]);
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨ &nbsp;
            <Anchor
              description="O4-jwt-refresh-token-DB - resources/application.Properties"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/resources"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Entity</p>
        <article>
          I have 3 entities in this project ,
          <ULDecimal>
            <Li>
              UserEntity
              <ULdisc>
                <Li>
                  mapped as <SpanYellow>@ManyToMany</SpanYellow> with RoleEntity
                </Li>
                <Li>
                  mapped as <SpanYellow>@OneToMany</SpanYellow> with RefreshEntity
                </Li>
              </ULdisc>
            </Li>
            <Li>
              RoleEntity
              <ULdisc>
                <Li>
                  mapped as <SpanYellow>@ManyToMany</SpanYellow> with UserEntity
                </Li>
              </ULdisc>
            </Li>
            <Li>
              RefreshEntity
              <ULdisc>
                <Li>
                  mapped as <SpanYellow>@ManyToOne</SpanYellow> with UserEntity
                </Li>
              </ULdisc>
            </Li>
          </ULDecimal>
        </article>
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 UserEntity</p>
        {renderUserEntity}
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 RoleEntity</p>
        {renderRoleEntity}
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 RefreshEntity</p>
        {renderRefreshEntity}
      </section>
    </MainChildArea>
  );
};

export default O4_Entity;

const user_entity = `package com.backend.entity;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "USERS_TB")
public class UserEntity {

	/** Since I use data-xxxx.sql files for DB's 
	 * Thus this is the preffered generator to use with each on:
	 * h2 DB : @GeneratedValue(strategy = GenerationType.IDENTITY)
	 * 
	 * MySql DB : @GeneratedValue(strategy = GenerationType.IDENTITY)
	 * 
	 * With PostGresql DB :     
	 * 	@SequenceGenerator(name = "studentseq", initialValue = 20001, allocationSize = 50)
	 *	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "studentseq")
	 *
	 * if we look in the data.postgres.sql we can see that the id's satrt from 1 for each table
	 * With postgresql , even though i have user id's from 1-10 , when I attempt to create a new record w/o specifiyng the ID
	 * It pulls the value from sequence (1) thus i can get unique violation
	 */
	@Id
	@SequenceGenerator(name = "userseq", initialValue = 20001, allocationSize = 50)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userseq")
	@Column(name = "user_id")	
	private long id;
	private String name;
	private String email;
	private String password;

	@OneToMany(mappedBy = "userEntity", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<RefreshTokenEntity> refreshTokens = new HashSet<>();
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "user_role",
			joinColumns = { @JoinColumn(name = "user_id") }, 
			inverseJoinColumns = { @JoinColumn(name = "role_id") })
	@JsonIgnore
	private Set<RoleEntity> roles = new HashSet<>();

	public UserEntity() {
		super();
	}

	public UserEntity(String name, String email, String password, Set<RoleEntity> roles) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.roles = roles;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<RoleEntity> getRoles() {
		return roles;
	}

	public void setRoles(Set<RoleEntity> roles) {
		this.roles = roles;
	}

	/*********************************************
	 * Helper Methods for Adding/Removing Role
	 *********************************************/

	public void addRole(RoleEntity roleEntity) {
		this.roles.add(roleEntity);
		roleEntity.getUsers().add(this);
	}

	public void removeRole(RoleEntity role) {
		this.roles.remove(role);
		role.getUsers().remove(this);
	}

	/*********************************************************
	 * 	Helper Methods for Adding/Removing refreshTokens
	 *********************************************************/
	public void addRefreshToken(RefreshTokenEntity refreshTokenEntity) {
		if (this.refreshTokens == null) {
			this.refreshTokens = new HashSet<>();
		}
		this.refreshTokens.add(refreshTokenEntity);
		refreshTokenEntity.setUserEntity(this);
	}

	public void removeRefreshToken(RefreshTokenEntity refreshTokenEntity) {
		this.refreshTokens.remove(refreshTokenEntity);
		refreshTokenEntity.setUserEntity(null); // break relationship properly
	}
		
	
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserEntity other = (UserEntity) obj;
		return id == other.id;
	}	
}
`;

const role_entity = `package com.backend.entity;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "ROLES_TB")
public class RoleEntity {

	
	/** Since I use data-xxxx.sql files for DB's 
	 * Thus this is the preffered generator to use with each on:
	 * h2 DB : 
	 * 			@GeneratedValue(strategy = GenerationType.IDENTITY)
	 * 
	 * MySql DB :
	 * 			@GeneratedValue(strategy = GenerationType.IDENTITY)
	 * 
	 * PostGresql DB:
	 * 			
	 *
	 * With PostGresql DB :     
	 * 				@SequenceGenerator(name = "studentseq", initialValue = 20001, allocationSize = 50)
	 *				@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "studentseq")
	 *
	 *if we look in the data.postgres.sql we can see that the id's satrt from 1 for each table
	 * With postgresql , even though i have user id's from 1-10 , when I attempt to create a new record w/o specifiyng the ID
	 * It pulls the value from sequence (1) thus i can get unique violation
	 */
	@Id
	@SequenceGenerator(name = "roleseq", initialValue = 20001, allocationSize = 50)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "roleseq")
	@Column(name = "role_id")
	private long id;
	private String role;

	@ManyToMany(mappedBy = "roles", fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<UserEntity> users = new HashSet<>();

	public RoleEntity() {
		super();
	}

	public RoleEntity(String role) {
		super();
		this.role = role;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Set<UserEntity> getUsers() {
		return users;
	}

	public void setUsers(Set<UserEntity> users) {
		this.users = users;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + ((role == null) ? 0 : role.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RoleEntity other = (RoleEntity) obj;
		if (id != other.id)
			return false;
		if (role == null) {
			if (other.role != null)
				return false;
		} else if (!role.equals(other.role))
			return false;
		return true;
	}
}
`;

const refresh_entity = `package com.backend.entity;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "REFRESH_TOKENS_TB")
public class RefreshTokenEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

//	@Column(columnDefinition = "uuid", nullable = false)	
	private UUID refTokenUuid;

	@Column(nullable = false, unique = true)
	private String token;

	@Column(nullable = false)
	private Instant createdAt;

	@Column(nullable = false)
	private Instant expiryDate;

	private boolean revoked;
	private int rotate;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false) // I set nullable = false since child cannot exist w/o parent
	@JsonIgnore
	private UserEntity userEntity;

	public RefreshTokenEntity() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public UUID getRefTokenUuid() {
		return refTokenUuid;
	}

	public void setRefTokenUuid(UUID refTokenUuid) {
		this.refTokenUuid = refTokenUuid;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public Instant getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Instant createdAt) {
		this.createdAt = createdAt;
	}

	public Instant getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(Instant expiryDate) {
		this.expiryDate = expiryDate;
	}

	public boolean isRevoked() {
		return revoked;
	}

	public void setRevoked(boolean revoked) {
		this.revoked = revoked;
	}

	public int getRotate() {
		return rotate;
	}

	public void setRotate(int rotate) {
		this.rotate = rotate;
	}

	public UserEntity getUserEntity() {
		return userEntity;
	}

	public void setUserEntity(UserEntity userEntity) {
		this.userEntity = userEntity;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RefreshTokenEntity other = (RefreshTokenEntity) obj;
		return id == other.id;
	}

}`;
