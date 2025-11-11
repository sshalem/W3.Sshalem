/*
/spring/exception-handling/custom-error-msg-controller-advice#3.Test
Test --> (SPRING)(Exception Handling)(custom err ctrl.advice)
*/
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
        In section 6 , I will Implenment the production code snippet with some differences.
        <ULdisc>
          <Li>
            I will use <SpanGreen>@RestControllerAdvice</SpanGreen>
          </Li>
          <Li>
            I will create a HashMap with all relevant fields I wnat to send in response (Instead of creating class
            <strong>ExceptionErrorMEssage</strong> )
          </Li>
        </ULdisc>
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
