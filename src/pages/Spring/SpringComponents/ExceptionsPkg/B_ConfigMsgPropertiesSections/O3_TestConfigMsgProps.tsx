import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_TestConfigMsgProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        Let's test the app
        <ULdisc>
          <Li>Open Postman</Li>
          <Li>go to Spring Boot workspace</Li>
          <Li>
            Open collection <strong>04-Exceptions</strong>
          </Li>
          <Li>
            send a <strong>Get request</strong> of <strong>getName</strong>
          </Li>
        </ULdisc>
      </section>

      <section>
        We can see that the message is more clear w/o the <SpanGreen>stacktrace</SpanGreen> (I <SpanRed>disable</SpanRed> it in the{" "}
        <strong>propereties</strong> file ,set it to <SpanRed>never</SpanRed> )<JavaHighlight javaCode={postman}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_TestConfigMsgProps;

const postman = `{
    "timestamp": "2025-09-11T09:17:56.839+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "exception": "com.hem.exception.NameAlreadyExistException",
    "message": "Name karin already exist",
    "path": "/customer/karin"
}`;
