/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";
import TableFiveColCompareDeleteJPQL from "../../../../../components/Tables/Table_5ColCompareDeleteJPQL";

const O11_DeleteQueryJPQLMethod = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl font-semibold">🧩 Delete - using JPQL method</p>
        </article>
        In this example :
        <ULdisc>
          <Li>
            I will use JPQL to <SpanGrey>deleteUserByEmailJPQL(...)</SpanGrey> in Repository
          </Li>
          <Li>
            <SpanGrey>@Query</SpanGrey> - for JPQL , I need to add the <SpanGrey>@Query</SpanGrey> annotaion
          </Li>
          <Li>
            <SpanGrey>@Modifying</SpanGrey> - Since it's a delete operations , I need to add <SpanGrey>@Modifying</SpanGrey>
          </Li>
          <JavaHighlight javaCode={repo_delete_jpql}></JavaHighlight>
          <Li>
            In Service layer , I call <SpanGrey>deleteUserByEmailJPQL(...)</SpanGrey> then <SpanGrey>throw RuntimeException</SpanGrey>
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
        <br />
        According Table, Best way to Implement the delete , so noRollback to occur, even If I throw RuntimeException : <br />
        <ULdisc>
          <Li>
            Do NOT ❌ annotated repository method with <SpanGrey>@Transactinoal</SpanGrey>
          </Li>
          <Li>
            Annoted ✅ the service layer with <SpanGrey>@Transactinoal</SpanGrey>
          </Li>
          <Li>
            add metaData of <SpanGrey>@Transactional(noRollbackFor = RuntimeException.class)</SpanGrey>
          </Li>
        </ULdisc>
        <hr />
        <section className="my-8">
          <article className="my-4 text-lg font-semibold">
            🔍 Why JPQL <SpanGrey>deleteUserByEmailJPQL(...)</SpanGrey> → Executes only One SQL DELETE Query
          </article>
          <ULdisc>
            <Li>The JPQL delete is different than the Derived Method delete</Li>
            <Li>Because this is a bulk delete</Li>
            <Li>
              Hibernate translates this directly into one SQL statement: <SpanGrey>DELETE FROM user_entity WHERE email = ?</SpanGrey>
            </Li>
          </ULdisc>

          <JavaHighlight javaCode={bulk_delete}></JavaHighlight>
          <ULdisc>
            <Li>✔ No SELECT</Li>
            <Li>✔ No per-entity delete</Li>
            <Li>✔ Removes all matching rows in a single DB operation</Li>
            <Li>✔ Fast and efficient</Li>
          </ULdisc>
        </section>
        <TableFiveColCompareDeleteJPQL />
        <JavaHighlight javaCode={derived_delete_by_email}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O11_DeleteQueryJPQLMethod;

const bulk_delete = `@Modifying
@Query("DELETE FROM UserEntity u WHERE u.email = :email")
void deleteUserByEmailJPQL(String email);
`;

const repo_delete_jpql = `	@Modifying
	@Query("DELETE FROM UserEntity u WHERE u.email = :email")
	void deleteUserByEmailJPQL(@Param("email") String email);`;

const derived_delete_by_email = `package com.delete.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.delete.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

  @Modifying
	@Query("DELETE FROM UserEntity u WHERE u.email = :email")
	void deleteUserByEmailJPQL(@Param("email") String email);
}




package com.delete.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.delete.entity.UserEntity;
import com.delete.repository.UserRepository;

@Service
public class UserService {

	public static int currentIdCount = 1;
	public static int currentEmailCount = 1;

	@Autowired
	private UserRepository userRepository;

	@Transactional(noRollbackFor = RuntimeException.class)
	public UserEntity createAndDeleteByEmailJPQL(UserEntity user) {
		if (currentEmailCount > 2) {
			userRepository.deleteUserByEmailJPQL(user.getEmail());
			throw new RuntimeException("Check if RollBack from DB performed");
		}
		currentEmailCount++;
		return userRepository.save(user);
	}

}`;
