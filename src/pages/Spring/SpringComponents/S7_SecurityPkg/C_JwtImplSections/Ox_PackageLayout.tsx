import { IMG, MainChildArea } from "../../../../../components";
import security_8 from "../../../../../assets/security_8.jpg";

const Ox_PackageLayout = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Package Lyout of JWT security Implementation</p>
        <IMG img_name={security_8}></IMG>
      </section>
      <hr />

      <article>
        {/* <ULdisc>
            <Li></Li>
            <Li></Li>
            <Li></Li>
            <Li></Li>
          </ULdisc> */}
      </article>
    </MainChildArea>
  );
};

export default Ox_PackageLayout;
