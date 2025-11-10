/*
/spring/jpa/one2many-bi-lazy#2.SetupEntities
Setup Entities --> (SPRING)(JPA)(OneToMany (Bi Lazy))
*/
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanGreen, SpanRed, SpanSky, SpanTeal } from "../../../../../components/Highlight";

const O2_SetupEntityO2M = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        Here I will show the best practice for setting up a Bi-Directional <SpanSky>OneToMany</SpanSky> mapping.
      </section>
      {/*  */}
      <DivDoubleBorder>UserEntity - Parent Entity</DivDoubleBorder>
      ➡️ If <SpanRed>orphanRemoval = true</SpanRed>, this will issue a DELETE for that user in the DB. <br />
      ➡️ If <SpanGreen>orphanRemoval = false</SpanGreen>, it will only break the relationship (Best practice , set user_id to NULL if{" "}
      <SpanTeal>nullable</SpanTeal> ).
      <JavaHighlight javaCode={user_entity}></JavaHighlight>
      {/*  */}
      <DivDoubleBorder>RoleEntity - Child Entity</DivDoubleBorder>
      <JavaHighlight javaCode={role_entity}></JavaHighlight>
    </MainChildArea>
  );
};

export default O2_SetupEntityO2M;

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
	
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
  @JsonManagedReference   // ✅ Handles forward part of the relation
	private Set<RoleEntity> roles = new HashSet<>();

	// Default Constructor , Getters / Setters
	
	public void addRole(RoleEntity role) {
		if (this.roles == null) {
			this.roles = new HashSet<>();
		}
		this.roles.add(role);
		role.setUser(this);
	}

	public void removeRole(RoleEntity role) {
		this.roles.remove(role);
		role.setUser(null); // break relationship properly
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
	@JoinColumn(name = "user_id" ,nullable = true)
	@JsonBackReference   // ✅ Prevents recursion
	private UserEntity user;
}`;
