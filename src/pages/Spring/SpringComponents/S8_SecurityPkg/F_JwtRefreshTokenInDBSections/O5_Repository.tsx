/*


*/
import { Anchor, MainChildArea } from "../../../../../components";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import { JavaHighlight } from "../../../../../components/Highlight";
import { useMemo } from "react";

const O5_Repository = ({ anchor }: { anchor: string }) => {
  const renderUserRepository = useMemo(() => <JavaHighlight javaCode={user_repo} />, [user_repo]);
  const renderRoleRepository = useMemo(() => <JavaHighlight javaCode={role_repo} />, [role_repo]);
  const renderRefreshRepository = useMemo(() => <JavaHighlight javaCode={refresh_token_repo} />, [refresh_token_repo]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨ &nbsp;
            <Anchor
              description="O4-jwt-refresh-token-DB - repository"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/java/com/backend/repository"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Entity</p>
        <article>
          I have 3 Repositories in this project
          <ULdisc>
            <Li>UserRepository</Li>
            <Li>RoleRepository</Li>
            <Li>RefreshRepository</Li>
          </ULdisc>
        </article>
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 UserRepository</p>
        {renderUserRepository}
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 RoleRepository</p>
        {renderRoleRepository}
      </section>
      <hr />
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 RefreshRepository</p>
        {renderRefreshRepository}
      </section>
    </MainChildArea>
  );
};

export default O5_Repository;

const user_repo = `package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.backend.entity.RoleEntity;
import com.backend.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

	UserEntity findByEmail(String email);

	List<UserEntity> findByName(String name);

	// Important: fetch join to initialize lazy roles in the same query
	// Always use DISTINCT in the QUERY when doing JOIN FETCH to avoid duplications
	@Query("SELECT DISTINCT ue FROM UserEntity ue LEFT JOIN FETCH ue.roles WHERE ue.email=:email")
	UserEntity findByEmailWithRoles(@Param("email") String email);

	@Query("SELECT ue FROM UserEntity ue JOIN ue.roles AS rl WHERE rl.role=:role")
	List<UserEntity> jpqlFindUsersWithRole(@Param("role") String role);

	@Query("SELECT ur FROM UserEntity user JOIN user.roles AS ur WHERE user.email=:email")
	List<RoleEntity> jpqlFindAllRolesOfUserByEmail(@Param("email") String email);
}`;

const role_repo = `package com.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.backend.entity.RoleEntity;
import com.backend.entity.UserEntity;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {

	RoleEntity findByRole(String role);

	@Query("SELECT re FROM RoleEntity re JOIN re.users AS reuse WHERE reuse.email = ?1")
	List<RoleEntity> jpqlFindRolesOfUserByEmail(String email);

	@Query("SELECT reuse FROM RoleEntity re JOIN re.users AS reuse WHERE re.role=:role")
	List<UserEntity> jpqlFindUsersWithRole(@Param("role") String role);

}
`;

const refresh_token_repo = `package com.backend.repository;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.backend.entity.RefreshTokenEntity;
import com.backend.entity.UserEntity;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshTokenEntity, Long> {

	Optional<RefreshTokenEntity> findByToken(String token);

	void deleteByExpiryDateBefore(Instant currentDate);

	@Modifying
	@Query("DELETE FROM RefreshTokenEntity rte WHERE rte.refTokenUuid=:uuid")
	void deleteByRefTokenUuid(@Param("uuid") UUID uuid);

	@Query("SELECT rteuse FROM RefreshTokenEntity rte JOIN rte.userEntity AS rteuse WHERE rte.token=:token")
	UserEntity findUserByRefreshToken(@Param("token") String token);

	@Query("SELECT rte FROM RefreshTokenEntity rte JOIN rte.userEntity AS rteuse WHERE rteuse.id=:userId")
	RefreshTokenEntity findRefreshTokenEntityByUserId(@Param("userId") long userId);

}`;
