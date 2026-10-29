/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O12_SecureTheSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4 text-xl"> Secure the setup (VERY IMPORTANT)</div>
        <ULdisc>
          <Li>Bind Spring Boot to localhost only</Li>
          <Li>Prevents direct internet access to the app.</Li>
        </ULdisc>
        <Highlight_ApplicationProperties code={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O12_SecureTheSetup;

const _1_ = `server.address=127.0.0.1
server.port=8080`;
