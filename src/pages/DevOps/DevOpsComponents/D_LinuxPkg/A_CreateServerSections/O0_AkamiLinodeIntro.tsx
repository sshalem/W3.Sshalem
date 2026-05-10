/*
/devops/linux-server/create-server#create_linode_server
create_linode_server --> (DEVOPS)(LINUX)(create server server)
*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, Redtext, SpanGreen, SpanYellow } from "../../../../../components/Highlight";

const O0_AkamiLinodeIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULdisc>
        <Li>
          <SpanYellow>Linode</SpanYellow> is now know as <SpanYellow>Akami</SpanYellow>
        </Li>
        <Li>
          Go to{" "}
          <a className="tracking-wider text-blue-500" href="https://www.akamai.com/">
            {" "}
            https://www.akamai.com/
          </a>
        </Li>
      </ULdisc>

      <DivDoubleBorder>Username and Password</DivDoubleBorder>
      <ULdisc>
        <Li>
          <SpanYellow>username</SpanYellow> - <Redtext>sshalem</Redtext>
        </Li>
        <Li>
          <SpanYellow>password</SpanYellow> - <Redtext>aa77aa80</Redtext>
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};
export default O0_AkamiLinodeIntro;
