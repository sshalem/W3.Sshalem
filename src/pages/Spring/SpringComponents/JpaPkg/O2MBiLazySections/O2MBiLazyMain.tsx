import React from "react";

const O2MBiLazyMain = () => {
  return <div></div>;
};

export default O2MBiLazyMain;

const user_entity = `@Entity
@Table(name = "USERS_TB")
public class UserEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private long pid;
	private String name;
	private String email;
	private String password;
	
  @OneToMany(
      mappedBy = "user",             // field in RoleEntity
      cascade = CascadeType.ALL,     // Cascade operations
      orphanRemoval = true,          // Remove roles if removed from list
      fetch = FetchType.LAZY         // Load roles lazily
  )
  @JsonManagedReference   // ✅ Handles forward part of the relation
	private Set<RoleEntity> roles = new HashSet<>();

	// Default Constructor , Getters / Setters
	// toString: don't add the associated entity in the toString method This will cause ERROR
	
	public void addRole(RoleEntity role) {
		if (this.roles == null) {
			this.roles = new HashSet<>();
		}
		this.roles.add(role);
		role.setUser(this);
	}

	public void removeRole(RoleEntity role) {
		this.roles.remove(role);
		// role.setUser(null);
	}`;

const role_entity = `@Entity
@Table(name = "ROLES_TB")
public class RoleEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String role;
	private long pid;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	@JsonBackReference   // ✅ Prevents recursion
	private UserEntity user;
}`;
