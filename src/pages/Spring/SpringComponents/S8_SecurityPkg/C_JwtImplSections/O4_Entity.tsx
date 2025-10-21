import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { JavaHighlight } from "../../../../../components/Highlight";

const O4_Entity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring-Security jwt-authorities Spring boot Version v2.6.11 - Entity"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11/src/main/java/com/O2/entity"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Entity</p>
        <article>
          I have 2 entities in this project , which are mapped as <SpanGrey>@ManyToMany</SpanGrey>
          <ULdisc>
            <Li>UserEntity</Li>
            <Li>RoleEntity</Li>
          </ULdisc>
        </article>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 UserEntity</p>
        <JavaHighlight javaCode={user_entity}></JavaHighlight>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 RoleEntity</p>
        <JavaHighlight javaCode={role_entity}></JavaHighlight>
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

export default O4_Entity;

const user_entity = `package com.O2.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "USERS_TB")
public class UserEntity {

	/** Since I use data-xxxx.sql files for DB's 
	 * Thus this is the preffered generator to use with each on:
	 * h2 DB : 
	 * 			@GeneratedValue(strategy = GenerationType.IDENTITY)
	 * 
	 * MySql DB :
	 * 			@GeneratedValue(strategy = GenerationType.IDENTITY)
	 *
	 * With PostGresql DB :     
	 * 				@SequenceGenerator(name = "userseq", initialValue = 20001, allocationSize = 50)
	 *				@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userseq")
	 *
	 *if we look in the data.postgres.sql we can see that the id's start from 1 for each table
	 * With postgresql , even though I have user id's from 1-10 , when I attempt to create a new record w/o specifiyng the ID
	 * It pulls the value from sequence (1) thus I can get unique violation
	 */
	@Id
	@SequenceGenerator(name = "userseq", initialValue = 20001, allocationSize = 50)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userseq")
	@Column(name = "user_id")	
	private long id;
	private String name;
	private String email;
	private String password;

	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "user_role",
			joinColumns = { @JoinColumn(name = "user_id") }, 
			inverseJoinColumns = { @JoinColumn(name = "role_id") })
//	@JsonManagedReference
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

	/**
	 * Helper Methods for Adding/Removing Course
	 */

	public void addRole(RoleEntity roleEntity) {
		this.roles.add(roleEntity);
		roleEntity.getUsers().add(this);
	}

	public void removeRole(RoleEntity role) {
		this.roles.remove(role);
		role.getUsers().remove(this);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((email == null) ? 0 : email.hashCode());
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
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
		UserEntity other = (UserEntity) obj;
		if (email == null) {
			if (other.email != null)
				return false;
		} else if (!email.equals(other.email))
			return false;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		return true;
	}
}`;

const role_entity = `package com.O2.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
}`;
