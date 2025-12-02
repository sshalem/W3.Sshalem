/*


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
              description="Spring-Security jwt-authorities Spring boot v3.5.6"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O0_GitHubLink;
