import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanSky, SpanTeal } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";
import SpanRed from "../../../../../components/Highlight/SpanRed";

const O4_QueryJoinedEntityTable = ({ anchor }: { anchor: string }) => {
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
        This is the code of the Class
        <JavaHighlight javaCode={user_entity}></JavaHighlight>
        <article>
          <DivDoubleBorder>Query 1 parameter on Single Entity</DivDoubleBorder>
          let's see how to query on
          <ULdisc>
            <Li>Single Entity</Li>
            <Li>1 parameter only</Li>
          </ULdisc>
          <SpanSky>Named Parameter</SpanSky>
          <JavaHighlight javaCode={id_named_param}></JavaHighlight>
          <SpanSky>Position Parameter</SpanSky>
          <JavaHighlight javaCode={id_position_param}></JavaHighlight>
          <SpanSky>Native SQL</SpanSky>
          <br />
          <SpanRed>(Always use Named Parameter with Native SQL) </SpanRed>
          <JavaHighlight javaCode={id_native_query}></JavaHighlight>
        </article>
        <article>
          <DivDoubleBorder>Query 2 parameters on Single Entity</DivDoubleBorder>
          let's see how to query on
          <ULdisc>
            <Li>Single Entity</Li>
            <Li>2 parameters</Li>
          </ULdisc>
          <SpanSky>Named Parameter</SpanSky>
          <JavaHighlight javaCode={id_name_named_param}></JavaHighlight>
          <SpanSky>Position Parameter</SpanSky> - is related to the position of the value in the query. <br />I prefer to use Named Parameters. From
          now on , I will show Only 2 options
          <ULdisc>
            <Li>Named Parameters</Li>
            <Li>Native SQL query</Li>
          </ULdisc>
          <JavaHighlight javaCode={id_name_position_param}></JavaHighlight>
          <SpanSky>Native SQL</SpanSky>
          <br />
          <SpanRed>(Always use Named Parameter with Native SQL) </SpanRed>
          <JavaHighlight javaCode={id_name_native_query}></JavaHighlight>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_QueryJoinedEntityTable;

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
}`;

const id_named_param = `@Query("SELECT user from UserEntity user WHERE user.id=:id")
UserEntity findById(@Param("id") long id);`;

const id_position_param = `@Query("SELECT user from UserEntity user WHERE user.id = ?1")
UserEntity findById(long id);`;

const id_native_query = `@Query(value = "SELECT * FROM USERS_TB WHERE id=:id", nativeQuery = true)
UserEntity findById(@Param("id") long id);`;

// --------------------
// 2 parameters
// --------------------
const id_name_named_param = `@Query("SELECT user from UserEntity user WHERE user.id=:id AND user.name=:name")
UserEntity jpqlFindByIdAndName(@Param("id") long id, @Param("name") String name);`;

const id_name_position_param = `@Query("SELECT user from UserEntity user WHERE user.id = ?1 AND user.name = ?2")
UserEntity posFindByIdAndName(@Param("id") long id, @Param("name") String name);`;

const id_name_native_query = `@Query(value = "SELECT * FROM USERS_TB WHERE id=:id AND name=:name", nativeQuery = true)
UserEntity nativeFindByIdAndName(@Param("id") long id, @Param("name") String name);`;
