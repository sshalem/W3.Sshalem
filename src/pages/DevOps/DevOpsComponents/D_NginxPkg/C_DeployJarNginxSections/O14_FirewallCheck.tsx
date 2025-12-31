/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O14_FirewallCheck = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4 text-xl"> Firewall check (often forgotten)</div>
        Only allow:
        <ULdisc>
          <Li>22 (SSH)</Li>
          <Li>80 (HTTP)</Li>
          <Li>443 (HTTPS)</Li>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O14_FirewallCheck;

const _1_ = `sudo ufw status`;
