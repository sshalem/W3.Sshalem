/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA, SpanGrey } from "../../../../../components/Highlight";
import TableFiveColCompareDeleteById from "../../../../../components/Tables/Table_5ColCompareDeleteById";

const O9_DeleteQueryDataRepositoryMethod = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl font-semibold">🧩 Delete - using Data Repository methods</p>
        </article>
        In this example :
        <ULdisc>
          <Li>
            I will use <SpanGrey>deleteById(...)</SpanGrey> , It's part of Data repository method (No need to write it in
            <SpanGrey>JpaRepository</SpanGrey>)
          </Li>
          <Li>
            Its <SpanGrey>@Transactional</SpanGrey> by default
          </Li>
          <Li>
            In code, I <SpanGrey>deleteById(...)</SpanGrey> then <SpanGrey>throw RuntimeException</SpanGrey>
          </Li>
          <Li>Table below , I tried all several options </Li>
          <Li>
            I checked behavior In :
            <ULdisc>
              <Li>Spring console - To see if Delete SQL executed</Li>
              <Li>Checked DB - To see if row deleted from DB</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <TableFiveColCompareDeleteById />
        <Highlight_JAVA code={code_1}></Highlight_JAVA>
      </section>

      <hr />
      <section className="my-8 text-lg font-semibold">Reorganize later</section>
      <section className="my-8">
        <article className="my-4 text-lg font-semibold">🔍 Why JPQL Delete → One SQL DELETE</article>
        <div>Because this is a bulk delete</div>
        <div>
          Hibernate translates this directly into one SQL statement: <SpanGrey>DELETE FROM user_entity WHERE email = ?</SpanGrey>
        </div>
        <ULdisc>
          <Li>✔ No SELECT</Li>
          <Li>✔ No per-entity delete</Li>
          <Li>✔ Removes all matching rows in a single DB operation</Li>
          <Li>✔ Fast and efficient</Li>
        </ULdisc>
        <Highlight_JAVA code={bulk_delete}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O9_DeleteQueryDataRepositoryMethod;

const bulk_delete = `@Modifying
@Query("DELETE FROM UserEntity u WHERE u.email = :email")
void deleteUserByEmailJPQL(String email);
`;

const code_1 = `@Service
public class UserService {

	public static int current = 1;

	@Autowired
	private UserRepository userRepository;

	public UserEntity createAndDeleteById(UserEntity user) {
		if (currentIdCount > 2) {
			userRepository.deleteById(1L);
			throw new RuntimeException("Check if RollBack from DB performed");
		}
		currentIdCount++;
		return userRepository.save(user);
	}

}`;
