/*
/spring/security/jwt-implementation#GitHubLink
GitHub Link  --> (SPRING)(Security)(jwt-implementation)
*/
import { Anchor, MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O0_GitHubLink = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨ &nbsp;
            <Anchor
              description="Spring-Security refresh-token (pure stateles) "
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O3-jwt-refresh-token-v3-5-7"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_GitHubLink;
