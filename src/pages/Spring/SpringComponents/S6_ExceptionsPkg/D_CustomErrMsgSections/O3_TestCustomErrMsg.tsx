/*
/spring/exception-handling/custom-error-msg#3.Test
Test --> (SPRING)(Exception Handling)(custom err msg)
*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_TestCustomErrMsg = ({ anchor }: { anchor: string }) => {
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
        But, the Code in Controller is to long. <br />
        For that, I will Implenment in section 5, <SpanGreen>ControllerAdvice</SpanGreen>
        <div className="my-4">
          <SpanRed>Note</SpanRed>
        </div>
        <div className="ml-8">
          No message will be displayed in spring console , since error is inside try/catch block , and the catch block does NOT throw another
          exception.
        </div>
        <JavaHighlight javaCode={postman}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_TestCustomErrMsg;

const postman = `{
    "timestamp": "2025-09-13T22:08:35.104+00:00",
    "statusCode": 500,
    "error": "Internal Server Error",
    "exception": "com.chem.exception.NameAlreadyExistException",
    "message": "Name karin already exist",
    "uriDescription": "uri=/customer/karin"
}`;
