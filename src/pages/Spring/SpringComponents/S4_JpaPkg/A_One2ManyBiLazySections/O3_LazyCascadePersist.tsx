import { Anchor, Answer, IMG, Li, MainChildArea, Question, ULDecimal, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, JsxHighlight, SpanGreen, SpanRed, SpanSky } from "../../../../../components/Highlight";
import jpa_01 from "../../../../../assets/jpa_01.jpg";
import { Link } from "react-router-dom";

const O3_LazyCascadePersist = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <strong>CascadeType.PERSIST</strong> - means save. When saving the parent, the children will also be saved automatically.
      </div>
      <div>
        it only propagates when <SpanGreen>SQL insert</SpanGreen> queries are executed (<SpanRed>Not UPDATE</SpanRed> etc...)
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
        <DivDoubleBorder>
          UserEntity <SpanRed>w/o</SpanRed> CascadeType.PERSIST
        </DivDoubleBorder>
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
              send a POST request of <SpanSky>createUserWithRoles</SpanSky>
              <IMG img_name={jpa_01}></IMG>
            </Li>
            <Li>
              The Request I sent , Includes new User with 2 Roles. <br />
              <JsxHighlight jsxCode={user_role_json}></JsxHighlight>
              <SpanRed>Note</SpanRed> - I return <SpanGreen>ENTITY</SpanGreen> NOT <SpanRed>DTO</SpanRed> ,let's see what happens.
              <JavaHighlight javaCode={create_user_with_roles}></JavaHighlight>
              controller code
              <JavaHighlight javaCode={controller_no_dto}></JavaHighlight>
            </Li>
            <Li>Lets examine Hibernate SQL query and DataBase</Li>
          </ULDecimal>
        </article>

        <article className="my-8">let's examine the behabior</article>
        <ULdisc>
          <Li>
            Hibernate SQL - <SpanGreen>as Expected</SpanGreen> , only <strong>insert</strong> to user executed, there is <SpanRed>no insert</SpanRed>{" "}
            to role_tb, . <br />
            Since there is no <strong>CASCADE PERSIST</strong>
            <JavaHighlight javaCode={hibernate_no_cascade}></JavaHighlight>
          </Li>
          <Li>
            DataBase - <SpanGreen>as Expected</SpanGreen> , only User updated , no Role added to user{" "}
          </Li>
          <Li>
            Response from Controller - <SpanRed>Not Expected</SpanRed> Even though I use <strong>Fetch Lazy</strong>, when I return the{" "}
            <strong>UserEntity</strong> it also retruns all roles for it. <br />I expect to have only <strong>UserEntity</strong> back to client in
            postman , and not User + Roles
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

      {/*  */}
      {/*  */}

      <section>
        <DivDoubleBorder>
          UserEntity <SpanGreen>CascadeType.PERSIST</SpanGreen> Cascade
        </DivDoubleBorder>
        <article>
          <ULDecimal>
            <Li>
              Setup UserEntity with <SpanSky>CascadeType.PERSIST</SpanSky>
              <JavaHighlight javaCode={with_cascade}></JavaHighlight>
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
              send a POST request of <SpanSky>createUserWithRoles</SpanSky>
              <IMG img_name={jpa_01}></IMG>
            </Li>
            <Li>
              The Request I sent , Includes new User with 2 Roles. <br />
              <JsxHighlight jsxCode={user_role_json}></JsxHighlight>
              <SpanRed>Note</SpanRed> - Now I will return <SpanGreen>DTO</SpanGreen> ,w'll see that Only User DTO retrurns.
              <JavaHighlight javaCode={create_user_with_roles}></JavaHighlight>
              controller code with DTO response
              <JavaHighlight javaCode={controller_with__dto}></JavaHighlight>
            </Li>
            <Li>Lets examine Hibernate SQL query and DataBase</Li>
          </ULDecimal>
        </article>

        <article className="my-8">let's examine the behavior</article>
        <ULdisc>
          <Li>
            Hibernate SQL - <SpanGreen>as Expected</SpanGreen> , 3 SQL <strong>insert</strong> queries . <br />
            Since <strong>CASCADE PERSIST</strong> enabled, thus PERSIST action (SAVE) was perfomed on parent and on Child.
            <JavaHighlight javaCode={hibernate_cascade_persist}></JavaHighlight>
          </Li>
          <Li>
            DataBase - <SpanGreen>as Expected</SpanGreen> we see new row for user , and 2 new rows for roles
          </Li>
          <Li>
            Response from Controller - <SpanGreen>as Expected</SpanGreen> , I retrun DTO thus , only the User returned w/o it's roles.
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

const create_user_with_roles = `	@Override
	public UserEntity createUserWithRoles(UserEntity userEntity) {
		LOGGER.info("method : createUserWithRoles(UserEntity userEntity)");
        return userRepository.save(userEntity);
	}`;

const controller_no_dto = `	@PostMapping("/createUserWithRoles")
	public ResponseEntity<?> createUserWithRoles(@RequestBody UserEntity userEntity) {
		return new ResponseEntity<Object>(userServiceImpl.createUserWithRoles(userEntity), null, HttpStatus.CREATED);
	}`;

const controller_with__dto = `	@PostMapping("/createUserWithRoles")
	public ResponseEntity<?> createUserWithRoles(@RequestBody UserEntity userEntity) {
		UserDto returnedValue = new UserDto();
		UserEntity user = userServiceImpl.createUserWithRoles(userEntity);
		BeanUtils.copyProperties(user,returnedValue);
		return new ResponseEntity<Object>(returnedValue, null, HttpStatus.CREATED);
	}
`;

const hibernate_no_cascade = `Hibernate: insert into users_tb (email, name, password, pid) values (?, ?, ?, ?)`;

//
const with_cascade = `    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST, fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference
    private Set<RoleEntity> roles;`;

const hibernate_cascade_persist = `Hibernate: insert into users_tb (email, name, password, pid) values (?, ?, ?, ?)
Hibernate: insert into roles_tb (pid, role, user_id) values (?, ?, ?)
Hibernate: insert into roles_tb (pid, role, user_id) values (?, ?, ?)
`;

const user_role_json = `{
    "pid": 5555,
    "name": "Ariel shalem",
    "email": "ariel.shalem@gmail.com",
    "password": "102030" ,
    "roles": [
        {            
            "role": "CEO",
            "pid": 5555
        },
        {           
            "role": "SUPER-ADMIN",
            "pid": 5555
        }       
    ]
}`;
