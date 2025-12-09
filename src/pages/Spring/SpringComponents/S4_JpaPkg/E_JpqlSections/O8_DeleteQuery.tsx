import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import TableFiveColCompareDeleteByEmail from "../../../../../components/Tables/TableFiveColCompareDeleteByEmail";
import TableFiveColCompareDeleteById from "../../../../../components/Tables/TableFiveColCompareDeleteById";

const O8_DeleteQuery = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>Here I will show the best practice to delete Entity /Entities from DB.</div>
        <ULdisc>
          <Li>
            Spring Data repository methods like <SpanGrey>deleteById(...)</SpanGrey>, <SpanGrey>save(...)</SpanGrey>,{" "}
            <SpanGrey>findById(...)</SpanGrey> etc., are <SpanGrey>Transactional</SpanGrey> behind the scenes.
          </Li>
          <Li>
            Spring Data automatically applies <SpanGrey>@Transactional</SpanGrey> behavior to CRUD methods in the repository interfaces that extend
          </Li>
          <Li>
            ✔ <SpanGrey>Write</SpanGrey> operations (save, delete, deleteById, etc.) → run inside a <SpanGrey>Transaction</SpanGrey>
          </Li>
          <Li>
            ✔ <SpanGrey>Read-only</SpanGrey> operations (findById, findAll, etc.) → run inside a transaction marked{" "}
            <SpanGrey>@Transactional(readOnly = true)</SpanGrey>
          </Li>
        </ULdisc>
        <p className="my-4 inline-block rounded-md bg-red-600 p-2 font-semibold text-white">Important Note :</p>
        <ULdisc>
          <Li>
            Service-level <SpanGrey>@Transactional</SpanGrey> overrides behavior
          </Li>
          <Li>
            If I annotate a service method with <SpanGrey>@Transactional</SpanGrey> , the <SpanGrey>outer</SpanGrey> transaction overrides the{" "}
            <SpanGrey>Inner</SpanGrey>
            transaction
          </Li>
          <Li>This way , the service layer now controls commit/rollback behavior.</Li>
          <Li>Example : </Li>
        </ULdisc>
        <JavaHighlight javaCode={override_tranactional}></JavaHighlight>
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
        <JavaHighlight javaCode={bulk_delete}></JavaHighlight>
      </section>

      <section className="my-8">
        <article className="my-4 text-lg font-semibold">🔍 Why deleteByEmail → SELECT + Multiple DELETEs</article>
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

      <hr />
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg font-semibold">🧩 1. Delete - using Data Repository methods</p>
        </article>
        In this example I delete : <br />
        <ULdisc>
          <Li>using Data Repository methods (Derived Method)</Li>
          <Li>
            No <SpanGrey>@Transactional</SpanGrey> annotation on service method
          </Li>
          <Li>SQL of delete executed</Li>
          <Li>Row deleted from DB</Li>
          <Li>
            Why Row deleted from DB if method i Service Layer is NOT annotated with <SpanRed>@Transactionl</SpanRed> ?
            <ULdisc>
              <Li>
                Spring Data repository methods like deleteById(...), save(...), findById(...), etc., are <SpanGrey>Transactional</SpanGrey> behind the
                scenes.
              </Li>
              <Li>
                Spring Data automatically applies <SpanGrey>@Transactional</SpanGrey> behavior to CRUD methods in the repository interfaces that
                extend
              </Li>
              <Li>
                ✔ <SpanGrey>Write</SpanGrey> operations (save, delete, deleteById, etc.) → run inside a <SpanGrey>Transaction</SpanGrey>
              </Li>
              <Li>
                ✔ <SpanGrey>Read-only</SpanGrey> operations (findById, findAll, etc.) → run inside a transaction marked{" "}
                <SpanGrey>@Transactional(readOnly = true)</SpanGrey>
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={code_1}></JavaHighlight>
        <TableFiveColCompareDeleteById />
      </section>

      <hr />
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg font-semibold">🧩 1. Delete - using Derived Method</p>
        </article>
        Best way to implement the delete and w.o rollBack when RuntimeException is thrown : <br />
        <ULdisc>
          <Li>Derived Method that uses the Email field</Li>
          <Li>
            Do NOT annotated repository method with <SpanGrey>@Transactinoal</SpanGrey>
          </Li>
          <Li>
            Annoted the service layer with <SpanGrey>@Transactinoal</SpanGrey>
          </Li>
          <Li>
            add metaData of <SpanGrey>@Transactional(noRollbackFor = RuntimeException.class)</SpanGrey>
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={derived_delete_by_email}></JavaHighlight>
        <TableFiveColCompareDeleteByEmail />
      </section>
    </MainChildArea>
  );
};

export default O8_DeleteQuery;

const bulk_delete = `@Modifying
@Query("DELETE FROM UserEntity u WHERE u.email = :email")
void deleteUserByEmailJPQL(String email);
`;

const derived_delete = `SELECT * FROM user_entity WHERE email = ?
DELETE FROM user_entity WHERE id = ?
DELETE FROM user_entity WHERE id = ?
...
`;

const override_tranactional = `@Transactional
public void doSomething() {
    userRepository.deleteById(1L);
    throw new RuntimeException(); // Rollback entire transaction
}`;

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
