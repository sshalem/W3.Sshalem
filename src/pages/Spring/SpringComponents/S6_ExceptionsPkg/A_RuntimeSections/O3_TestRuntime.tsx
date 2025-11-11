/*
/spring/exception-handling/runtime#3.TestRuntime
Test Runtime --> (SPRING)(Exception Handling)(runtime)
*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanBlue, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_TestRuntime = ({ anchor }: { anchor: string }) => {
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
        This is the response we get from server, a <SpanRed>500 Internal Server Error</SpanRed>
        The message format that Spring boot server sends is as follows:
        <JavaHighlight javaCode={exception_message_format}></JavaHighlight>
        The <SpanBlue>Trace</SpanBlue> is the same as shown the console of Spring boot. <br />
        As we can see , the trace can be very big. <br />
        In next Sections, I will several options , how to manage this.
        <JavaHighlight javaCode={postman}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_TestRuntime;

const exception_message_format = `{
    "timestamp": "",
    "status": ""
    "error": "",
    "trace": "",
    "message": "",
    "path": ""
}`;

const postman = `{
    "timestamp": "2025-09-11T08:22:08.577+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "trace": "com.hre.exception.NameAlreadyExistException: Name karin already exist\r\n\tat com.hre.service.CustomerService.testMethod(CustomerService.java:14)\r\n\tat com.hre.controller.CustomerController.getName(CustomerController.java:20)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)\r\n\tat org.springframework.web.method.support....... etc ...",
    "message": "Name karin already exist",
    "path": "/customer/karin"
}`;
