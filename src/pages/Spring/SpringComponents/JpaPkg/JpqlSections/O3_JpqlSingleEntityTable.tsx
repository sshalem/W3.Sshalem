import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanSky, SpanTeal } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";

const O3_JpqlSingleEntityTable = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          Here I show how to Query on Single Entity , that has a Single table in Postgresql <br />
          <ULDecimal>
            <Li>
              <SpanSky>UserEntity</SpanSky> Class name used with <SpanTeal>JPQL</SpanTeal>
            </Li>
            <Li>
              <SpanSky>USERS_TB</SpanSky> Table name used with <SpanTeal>Native SQL</SpanTeal>
            </Li>
          </ULDecimal>
        </div>

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
