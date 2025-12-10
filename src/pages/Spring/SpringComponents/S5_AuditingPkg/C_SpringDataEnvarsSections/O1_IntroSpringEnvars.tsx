/*
/spring/audit/spring-envars-audit#1.Intro
Intro --> (SPRING)(Auditing)(spring envars audit)
*/
import { Anchor, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import TableAuditingCompare from "../../../../../components/Tables/Table_4ColAuditingCompare";

const O1_IntroSpringEnvars = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      {/*  */}
      {/*  */}
      <article className="my-8">
        <p className="my-2">
          In modern applications, auditing plays a crucial role in <SpanGrey>tracking changes made to data over time</SpanGrey>. <br />
          <strong>data auditing</strong> is no longer a luxury — it’s a necessity. <br />
          <br />
          There are <strong> 3 ways</strong> to add Auditing to application, <br />
          sound similar but serve different levels of auditing detail and use cases.
          <ULDecimal>
            <Li>
              ✅ <SpanGrey>Spring Data JPA Auditing</SpanGrey>
            </Li>
            <Li>
              ✅ <SpanGrey>Hibernate Envers</SpanGrey>
            </Li>
            <Li>
              ✅ <SpanGrey>Spring Data Envers</SpanGrey>
            </Li>
          </ULDecimal>
        </p>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <p className="my-2">
            <Anchor
              description="Spring Data JPA Auditing - Java Techie "
              href="https://www.youtube.com/watch?v=Pc7Une_5rMs&list=PLVz2XdJiJQxxdOhu-xmEUYDzY_Pz8cRGa&ab_channel=JavaTechie"
            ></Anchor>{" "}
            - Spring JPA Auditing Intro JavaTechie
          </p>
          <p className="my-2">
            <Anchor description="Spring Data Envers - JavaTechie" href="https://www.youtube.com/watch?v=W1Rtn28lHU8"></Anchor> - Spring Data Envers
            JavaTechie
          </p>
          <p>
            <Anchor
              description="Auditing - Spring JPA, Hibernate Envar "
              href="https://saigontechnology.com/blog/auditing-with-spring-data-jpa-a-comprehensive-guide/"
            ></Anchor>{" "}
            - Auditing article - Spring JPA, Hibernate Envar
          </p>
          <div className="my-8">
            I used Spring JPA Auditing in{" "}
            <Anchor
              description="e-commerce"
              href="https://github.com/sshalem/FullStack/tree/main/09-E-commerce/e-commerce-backend/src/main/java/com/ecommerce/audit"
            ></Anchor>{" "}
            project , where I have multiple users (ADMIN, COMPANY, CUSTOMER) , thus I config it accordingly (Use this for multiple type of users).
          </div>
        </article>
      </article>
      <TableAuditingCompare></TableAuditingCompare>

      {/*  */}
      {/*  */}
    </MainChildArea>
  );
};

export default O1_IntroSpringEnvars;
