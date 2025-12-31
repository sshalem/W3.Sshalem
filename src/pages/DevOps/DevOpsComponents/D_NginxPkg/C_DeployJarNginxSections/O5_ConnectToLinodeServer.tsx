/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O5_ConnectToLinodeServer = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            connect to Linode server with SSH connection (to get the IP info , login to Linode server)
            <ApplicationPropertiesHighlight propertiesCode={connect_to_linode} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O5_ConnectToLinodeServer;

const connect_to_linode = `ssh root@139.162.148.144`;
