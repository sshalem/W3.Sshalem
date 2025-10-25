import { Anchor, MainChildArea } from "../../../../../components";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_MultipleAuthProvider = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">✅ Multiple authentication provider </p>
        <p>
          With <SpanGrey>multiple authentication provider</SpanGrey> , we can define 2 different login pages. see the video below
        </p>
        <ULdisc>
          <Li>
            <Anchor
              description="Spring Security Multiple Login Pages Examples (Admin - User and Admin - Customer)"
              href="https://www.youtube.com/watch?v=GNU-S6pUu1c"
            ></Anchor>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_MultipleAuthProvider;
