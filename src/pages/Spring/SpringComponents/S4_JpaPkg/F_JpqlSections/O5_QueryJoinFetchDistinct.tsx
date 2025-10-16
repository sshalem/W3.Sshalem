import { Anchor, MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";
import SpanRed from "../../../../../components/Highlight/SpanRed";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import ULDecimal from "../../../../../components/ui/ULDecimal";

const O5_QueryJoinFetchDistinct = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          There are cases where we need to use <SpanGrey>JOIN FETCH</SpanGrey> along with <SpanGrey>DISTINCT</SpanGrey> way to fetch data from DB ,
          becasue:
          <ULdisc>
            <Li>
              When I config entities <SpanGrey>Fetch.LAZY</SpanGrey> I sometimes want to have all data in one shot (Query)
            </Li>
            <Li>It fetches the data from DB in 1 Query (Even though it works on joined tables)</Li>
            <Li>It’s used to eagerly fetch associations (e.g. @OneToMany, @ManyToOne, etc.) in a single query and avoid the N+1 select problem.</Li>
            <Li>
              <SpanGrey>JOIN FETCH</SpanGrey> is a <SpanGrey>JPQL</SpanGrey> feature, <SpanRed>not SQL</SpanRed>
            </Li>
            <Li>🚫 Not valid SQL — databases don’t understand JOIN FETCH.</Li>
          </ULdisc>
        </div>
        <div className="my-8">
          Let's take a look in an example where I have <SpanGrey>Spring-Security</SpanGrey> implemented , with 2 tables mapped{" "}
          <SpanGrey>ManyToMany</SpanGrey> , and configed <SpanGrey>FETCH.LAZY</SpanGrey>
          <ULdisc>
            <Li>
              <SpanGrey>UserEntity</SpanGrey> class , or <SpanGrey>USERS_TB</SpanGrey> table in DB.
            </Li>
            <Li>
              <SpanGrey>RoleEntity</SpanGrey> class , or <SpanGrey>ROLES_TB</SpanGrey> table in DB.
            </Li>
            <Li>
              see GitHub reference code -{" "}
              <Anchor
                description="O2-jwt-authorities-v3-5-6"
                href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6/src/main/java/com/O2/repository/UserRepository.java"
              ></Anchor>
            </Li>
          </ULdisc>
        </div>
        <div></div>
        This is the code of the Class
        <JavaHighlight javaCode={user_entity}></JavaHighlight>
        <article>
          <div className="my-8">
            ✅ Here is a good example why I use <SpanGrey>JOIN FETCH</SpanGrey> with <SpanGrey>DISTINCT</SpanGrey>.
            <ULdisc>
              <Li>
                I Implement <SpanGrey>USER/ROLE</SpanGrey> as <SpanGrey>Many2Many</SpanGrey> with <SpanGrey>FETCH.LAZY</SpanGrey>
              </Li>
              <Li>
                Since I use <SpanGrey>Fetch.LAZY</SpanGrey> Thus, In the method <SpanGrey>loadUserByUsername</SpanGrey> I want to load in user with
                roles (It's needed for the authentication process during Login)
              </Li>
              <Li>
                I could use <SpanGrey>user.getRoles()</SpanGrey> , but it will make extra query for every role the user has. (this is the best way I
                fouund , see Transactionl or JWT sections)
              </Li>
            </ULdisc>
            <JavaHighlight javaCode={jwt_user_details_service}></JavaHighlight>
          </div>
          <DivDoubleBorder>JOIN FETCH Query with DISTINCT</DivDoubleBorder>
          let's see how to query on
          <ULDecimal>
            <Li>Important: fetch join to initialize lazy roles in the same query</Li>
            <Li>Always use DISTINCT in the QUERY when doing JOIN FETCH to avoid duplications</Li>
          </ULDecimal>
          <JavaHighlight javaCode={user_repository}></JavaHighlight>
        </article>
        {/*  */}
      </section>
    </MainChildArea>
  );
};

export default O5_QueryJoinFetchDistinct;

const user_entity = `@Entity
@Table(name = "USERS_TB")
public class UserEntity {

	@Id
	@Column(name = "user_id")	
	private long id;
	private String name;
	private String email;
	private String password;

	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "user_role",
			joinColumns = { @JoinColumn(name = "user_id") }, 
			inverseJoinColumns = { @JoinColumn(name = "role_id") })
	@JsonIgnore
	private Set<RoleEntity> roles = new HashSet<>();
 
    // G/S/toStr
}
    

@Entity
@Table(name = "ROLES_TB")
public class RoleEntity {

	@Id
	@Column(name = "role_id")
	private long id;
	private String role;

	@ManyToMany(mappedBy = "roles", fetch = FetchType.LAZY)
	@JsonIgnore
	private Set<UserEntity> users = new HashSet<>();
}`;

const user_repository = `@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

	// Important: fetch join to initialize lazy roles in the same query
	// Always use DISTINCT in the QUERY when doing JOIN FETCH to avoid duplications
	@Query("SELECT DISTINCT ue FROM UserEntity ue LEFT JOIN FETCH ue.roles WHERE ue.email=:email")
	UserEntity findByEmailWithRoles(@Param("email") String email);
}`;

const jwt_user_details_service = `@Service
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
