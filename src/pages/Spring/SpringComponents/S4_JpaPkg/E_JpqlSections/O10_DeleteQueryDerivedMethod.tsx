/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";
import TableFiveColCompareDeleteByEmail from "../../../../../components/Tables/TableFiveColCompareDeleteByEmail";

const O10_DeleteQueryDerivedMethod = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-2xl font-semibold">🧩 Delete - using Derived Method</p>
        </article>
        In this example :
        <ULdisc>
          <Li>
            I will use <SpanGrey>deleteByEmail(...)</SpanGrey> , It's Derived Method , Thus, I need to write it in
            <SpanGrey>Repository</SpanGrey>
          </Li>
          <Li>
            In Service layer , I call <SpanGrey>deleteByEmail(...)</SpanGrey> then <SpanGrey>throw RuntimeException</SpanGrey>
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
        <section className="my-8">
          <article className="my-4 text-lg font-semibold">
            🔍 Why derived method deleteByEmail → executes SELECT query + Multiple DELETEs queries
          </article>
          <div>The Derived Method delete , different then The JPQL delete</div>
          <div>This is a derived method from Spring Data JPA.</div>
          <div>Spring resolves it as:</div>
          <ULdisc>
            <Li>1️⃣ First, SELECT rows to delete → so it can load entities </Li>
            <Li>2️⃣ Then Hibernate performs one DELETE per entity</Li>
            <Li>SQL log example:</Li>
            <JavaHighlight javaCode={derived_delete}></JavaHighlight>
            <Li>
              This allows:
              <ULdisc>
                <Li>Entity listeners (@PreRemove, @PostRemove)</Li>
                <Li>Cascades (@OneToMany, etc.)</Li>
                <Li>Version checking (optimistic locking)</Li>
                <Li>
                  But, it is <SpanGrey>slower and does multiple SQL operations</SpanGrey>.
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </section>
        <TableFiveColCompareDeleteByEmail />
        <JavaHighlight javaCode={derived_delete_by_email}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O10_DeleteQueryDerivedMethod;

const derived_delete = `SELECT * FROM user_entity WHERE email = ?
DELETE FROM user_entity WHERE id = ?
DELETE FROM user_entity WHERE id = ?
...
`;

const derived_delete_by_email = `package com.delete.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.delete.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
  void deleteByEmail(String email);
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
	public UserEntity createAndDeleteByEmailDerivedMethod(UserEntity user) {
		if (currentEmailCount > 2) {
			userRepository.deleteByEmail(user.getEmail());
			throw new RuntimeException("Check if RollBack from DB performed");
		}
		currentEmailCount++;
		return userRepository.save(user);
	}

}`;
