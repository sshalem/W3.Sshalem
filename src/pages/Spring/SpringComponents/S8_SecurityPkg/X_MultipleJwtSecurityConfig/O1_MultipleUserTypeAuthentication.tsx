import { Anchor, MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_MultipleUserTypeAuthentication = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Multiple user type authentication/authorization </p>
        <p>With multiple User type authentication , we can use different type of users.</p>
        <p>example :</p>
        <ULdisc>
          <Li>assume we have an Admin and a Customer , or Company</Li>
          <Li>Each one of them has a different fields in them (For instance Customer has Id, credit card ,etc... , Company has</Li>
          <Li>Thus, we cannot have one UserDetailsService</Li>
          <Li>In this tutorial I will show how to implement it</Li>
          <Li>
            <Anchor description="" href=""></Anchor>
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Links </p>
        <ULdisc>
          <Li>
            <Anchor
              description="Authentication-Authorization With Multiple User Type In Spring Boot"
              href="https://medium.com/@muhammedkalabasi/authentication-authorization-with-multiple-user-type-in-spring-boot-169320c685e9"
            ></Anchor>
          </Li>
          <Li>
            <Anchor
              description="Multiple Users Authentication using Spring Security on a SpringBoot API"
              href="https://medium.com/@ahmedkamal200427/multiple-users-authentication-using-spring-security-on-a-springboot-api-d823b57424e7"
            ></Anchor>
          </Li>
          <Li>
            <Anchor
              description="How to use multiple UserDetails implementations for login: Spring Security and Spring Boot"
              href="https://stackoverflow.com/questions/76479689/how-to-use-multiple-userdetails-implementations-for-login-spring-security-and-s"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_MultipleUserTypeAuthentication;
