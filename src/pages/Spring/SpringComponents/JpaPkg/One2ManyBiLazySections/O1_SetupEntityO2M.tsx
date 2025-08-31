import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanSky } from "../../../../../components/Highlight";

const O1_SetupEntityO2M = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        Here I will show the best practice for setting up a Bi-Directional <SpanSky>OneToMany</SpanSky> mapping.
      </section>

      <div>UserEntity - Parent Entity</div>
      <JavaHighlight javaCode={user_entity}></JavaHighlight>
      <div>RoleEntity - Child Entity</div>
      <JavaHighlight javaCode={role_entity}></JavaHighlight>
    </MainChildArea>
  );
};

export default O1_SetupEntityO2M;

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
