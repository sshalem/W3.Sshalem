/*
 

*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, Redtext, SpanYellow } from "../../../../../components/Highlight";

const O2_CreateKamateraServer = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ULdisc>
        <Li>
          <SpanYellow>Linode</SpanYellow> is now know as <SpanYellow>Akami</SpanYellow>
        </Li>
        <Li>
          Go to{" "}
          <a className="tracking-wider text-blue-500" href="https://www.kamatera.com/he/" target="_blank">
            {" "}
            https://www.kamatera.com/he/
          </a>
        </Li>
        <Li>
          to Login use this url{" "}
          <a className="tracking-wider text-blue-500" href="https://console.kamatera.com/login" target="_blank">
            https://console.kamatera.com/login
          </a>
        </Li>
      </ULdisc>

      <DivDoubleBorder>Kamatera Login Username/Password</DivDoubleBorder>
      <ULdisc>
        <Li>
          <SpanYellow>username</SpanYellow> - <Redtext>shabtay.shalem@gmail.com</Redtext>
        </Li>
        <Li>
          <SpanYellow>password</SpanYellow> - <Redtext>aa77aa80</Redtext>
        </Li>
      </ULdisc>

      <DivDoubleBorder>config LINUX Server root Password</DivDoubleBorder>
      <ULdisc>
        <Li>
          <SpanYellow>username</SpanYellow> - <Redtext>root</Redtext> by default is't <SpanYellow>root</SpanYellow>
        </Li>
        <Li>
          <SpanYellow>password</SpanYellow> - <Redtext>shalem</Redtext>
        </Li>
      </ULdisc>
    </MainChildArea>
  );
};
export default O2_CreateKamateraServer;
