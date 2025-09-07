import { Anchor, Answer, IMG, MainChildArea, Question } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanGreen, SpanRed, SpanSky } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import jpa_01 from "../../../../../assets/jpa_01.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import { Link } from "react-router-dom";

const O3_LazyCascadePersist = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <strong>CascadeType.PERSIST</strong> - means save. When saving the parent, the children will also be saved automatically.
      </div>
      <div>
        In the following sections , I will add each cascade type at a time. <br />I will examine the <strong>Persistent Context</strong> and{" "}
        <strong>DataBase</strong> with and w/o the cascade type.
        <ULDecimal>
          <Li>
            <SpanRed>NO cascade</SpanRed>
          </Li>
          <Li>
            <SpanGreen>{"cascade = {CascadeType.PERSIST}"}</SpanGreen>
          </Li>
        </ULDecimal>
      </div>
      <section>
        <DivDoubleBorder>UserEntity w/o Cascade</DivDoubleBorder>
        <article>
          <ULDecimal>
            <Li>
              Setup UserEntity w/o Cascade
              <JavaHighlight javaCode={no_cascade}></JavaHighlight>
            </Li>
            <Li>
              <Anchor
                description="see Git Hub - OneToMany Bi-direc Lazy "
                href="https://github.com/sshalem/Spring-Boot/tree/main/02-JPA/02-One2Many-Bi-Fetch-Lazy"
              ></Anchor>
            </Li>{" "}
            <Li>Open Postman</Li>
            <Li>Select 02-Spring-JPA → oneToMany → Users API</Li>
            <Li>
              send a PUT request of <SpanSky>addRoleUpdateUser</SpanSky>
              <IMG img_name={jpa_01}></IMG>
            </Li>
            <Li>
              This method updates the password of the user , and add new role to User. <br />
              <SpanRed>Note</SpanRed> - I return <SpanGreen>ENTITY</SpanGreen> NOT <SpanRed>DTO</SpanRed> ,let's see what happens.
              <JavaHighlight javaCode={add_role_to_user}></JavaHighlight>
            </Li>
            <Li>Lets examine Hibernate SQL query and DataBase</Li>
          </ULDecimal>
        </article>

        <article className="my-8">let's examine the behabior</article>
        <ULdisc>
          <Li>
            Hibernate SQL - <SpanGreen>as Expected</SpanGreen> , only <strong>update</strong> to user executed, there is <SpanRed>no insert</SpanRed>{" "}
            to role_tb, . <br />
            Since there is no <strong>CASCADE PERSIST</strong> enables
            <JavaHighlight javaCode={hibernate_no_cascade}></JavaHighlight>
          </Li>
          <Li>
            DataBase - <SpanGreen>as Expected</SpanGreen> , only User updated , no Role added to user{" "}
          </Li>
          <Li>
            Response from Controller - <SpanRed>Not Expected</SpanRed> Even though I use Fetch Lazy, when I return the <strong>UserEntity</strong> it
            also retrun all roles for it. <br />I expected to have only <strong>UserEntity</strong> back to client in postman , and not User + Roles
            <Question>
              <div className="text-lg font-semibold">Why this happens?</div>
            </Question>
            <Answer>
              <Link to={"#3_1_DTOvsEntity"}>
                <span className="text-blue-500">see section 3.1 DTO vs Entity resposne </span>
              </Link>
            </Answer>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O3_LazyCascadePersist;

const no_cascade = `	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY, orphanRemoval = true)
	@JsonManagedReference
	private Set<RoleEntity> roles;`;

const add_role_to_user = `	@Override
	@Transactional
	public UserEntity addRoleUpdateUser(long userPid, UserEntity userEntity) {
		UserEntity _userDB = userRepository.findByPid(userPid);
		if (_userDB == null)
			throw new ResourceNotFoundException("Not found User with userPid = " + userPid);

		_userDB.setPassword(userEntity.getPassword());
		userEntity.getRoles().forEach(role -> {
		     role.setPid(userPid);
         _userDB.addRole(role);
    });

		return userRepository.save(_userDB);
	}`;

const hibernate_no_cascade = `Hibernate: update users_tb set email=?, name=?, password=?, pid=? where id=?`;
