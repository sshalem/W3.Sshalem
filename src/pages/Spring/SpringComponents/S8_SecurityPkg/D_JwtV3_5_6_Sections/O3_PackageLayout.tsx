/*


*/
import { Anchor, IMG, MainChildArea } from "../../../../../components";
import security_8 from "../../../../../assets/security_8.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";

const O3_PackageLayout = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨ &nbsp;
            <Anchor
              description="Spring boot v3.5.6 - package layout"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v3-5-6/src/main/java/com/O2"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Package Lyout of JWT security Implementation</p>
        <IMG img_name={security_8}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O3_PackageLayout;
