/*


*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O4_ImplementAuditable = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 2: Implement Autitable on Entity class</p>

        <ULdisc>
          <Li>Implement Autitable on Entity class</Li>
          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="O1-Audit-Spring-JPA"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={entity}></JavaHighlight>
        </ULdisc>
      </article>
    </MainChildArea>
  );
};

export default O4_ImplementAuditable;

const entity = `@Entity
@Table(name = "USERS_TB")
public class UserEntity extends Auditable implements Serializable {

	private static final long serialVersionUID = -5199469587304114249L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private long pid;
	private String name;
	private String email;
	private String password;
  
  // G, S, toString, hash equals
}
  

@Entity
@Table(name = "ROLES_TB")
public class RoleEntity extends Auditable implements Serializable {

	private static final long serialVersionUID = 4547155074103443567L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String role;
	private long pid;

  // G, S, toString, hash equals
}
`;
