import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanRed } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O3_ConfigAccount = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        The root user is the administrative user in a Linux environment that has very broad privileges. <br />
        Because of the heightened privileges of the root account, you are discouraged from using it on a regular basis. <br />
        This is because the root account is able to make very destructive changes, even by accident.
      </div>
      <div className="mt-8">How to add user , Here I setup a limited user account :</div>
      <ul className="my-4 ml-8 list-disc">
        <li>
          <SpanGreen>usermod -aG sudo shabtay</SpanGreen> - I gave passord <SpanRed>123</SpanRed>
        </li>
      </ul>

      <LinuxHighlight bashCode={linux_code}></LinuxHighlight>
    </MainChildArea>
  );
};
export default O3_ConfigAccount;

const linux_code = `adduser shabtay
usermod -aG sudo shabtay`;
