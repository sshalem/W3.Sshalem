import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";

const O7_TestApp = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 5: Test JPA Audit App</p>
        <ULdisc>
          <Li>
            <Anchor
              description="GitHub - O1-Audit-Spring-JPA"
              href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
            ></Anchor>
          </Li>
          <Li>
            Open Postman in collection of <strong>10-Auditing</strong>
          </Li>
          <Li>
            Send Post request <strong>createUser</strong> then check DB
          </Li>
          <Li>
            Send Put request <strong>addRoleUpdateUser</strong> then check DB
          </Li>
        </ULdisc>
      </article>
    </MainChildArea>
  );
};

export default O7_TestApp;
