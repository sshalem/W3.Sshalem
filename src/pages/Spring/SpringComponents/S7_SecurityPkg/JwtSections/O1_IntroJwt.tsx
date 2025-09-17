import { IMG, MainChildArea } from "../../../../../components";
import JWT_security_1 from "../../../../../assets/JWT_security_1.jpg";

const O1_IntroJwt = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <IMG img_name={JWT_security_1}></IMG>
    </MainChildArea>
  );
};

export default O1_IntroJwt;
