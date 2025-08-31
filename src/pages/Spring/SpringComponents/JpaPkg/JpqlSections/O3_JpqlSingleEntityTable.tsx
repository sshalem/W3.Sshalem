import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O3_JpqlSingleEntityTable = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>To Query on Single Entity , that has a Single table in Postgresql</div>

        <JavaHighlight javaCode={user_entity}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_JpqlSingleEntityTable;

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
 
    // G/S/toStr
}
    `;
