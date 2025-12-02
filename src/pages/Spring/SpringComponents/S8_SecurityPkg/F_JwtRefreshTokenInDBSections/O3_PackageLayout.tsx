/*


*/
import { Anchor, IMG, MainChildArea } from "../../../../../components";
import security_jwt_db_1 from "../../../../../assets/security_jwt_db_1.jpg";
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
              description="O4-jwt-refresh-token-DB - package layout"
              href="https://github.com/sshalem/Spring-Boot/tree/main/08-Spring-Security/03_JWT/O4-jwt-refresh-token-DB/src/main/resources"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Package Lyout of JWT security Implementation</p>
        <IMG img_name={security_jwt_db_1}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O3_PackageLayout;
