import { MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O3_TestConfigMsgController = ({ anchor }: { anchor: string }) => {
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
        We can see that I got only the messsage of the exception , handled by the catch block. But, what if I want to have same pattern message as
        before , sent in the ResponseEntity ? For that, see section 4 , how I make a Class will all relevant fields , and return it as A
        ResponseEntity.
        <JavaHighlight javaCode={postman}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_TestConfigMsgController;

const postman = `Name karin already exist`;
