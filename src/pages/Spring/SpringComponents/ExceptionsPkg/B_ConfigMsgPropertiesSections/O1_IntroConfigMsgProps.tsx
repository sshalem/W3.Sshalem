import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanBlue, SpanRed } from "../../../../../components/Highlight";

const O1_IntroConfigMsgProps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        In section of <SpanBlue>Runtime Handle</SpanBlue> we got the message in postman , including the <SpanRed>StackTrace</SpanRed> , which is
        verbose, and too long. <br />
        In this Project, I config the <SpanBlue>application.properties</SpanBlue> file , we see how I can control which field I can return or NOT.
        <JavaHighlight javaCode={postman_before_config}></JavaHighlight>
      </section>
      <section></section>
    </MainChildArea>
  );
};

export default O1_IntroConfigMsgProps;

const postman_before_config = `{
    "timestamp": "2025-09-11T08:22:08.577+00:00",
    "status": 500,
    "error": "Internal Server Error",
    "trace": "com.hre.exception.NameAlreadyExistException: Name karin already exist\r\n\tat com.hre.service.CustomerService.testMethod(CustomerService.java:14)\r\n\tat com.hre.controller.CustomerController.getName(CustomerController.java:20)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:103)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:580)\r\n\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:205)\r\n\tat org.springframework.web.method.support....... etc ...",
    "message": "Name karin already exist",
    "path": "/customer/karin"
}`;
