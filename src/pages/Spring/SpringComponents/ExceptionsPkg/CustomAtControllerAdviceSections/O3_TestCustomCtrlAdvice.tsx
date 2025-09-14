import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanGreen } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_TestCustomCtrlAdvice = ({ anchor }: { anchor: string }) => {
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
        We can see that the message is with the Message Class fields. <br />
        But, the Code ini COntroller is to long. <br />
        For that, I will Implenment in section 5, <SpanGreen>ControllerAdvice</SpanGreen>
        <JavaHighlight javaCode={postman}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_TestCustomCtrlAdvice;

const postman = `{
    "timestamp": "2025-09-13T22:08:35.104+00:00",
    "statusCode": 500,
    "error": "Internal Server Error",
    "exception": "com.chem.exception.NameAlreadyExistException",
    "message": "Name karin already exist",
    "uriDescription": "uri=/customer/karin"
}`;
