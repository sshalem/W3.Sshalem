import { FaDiamond } from "react-icons/fa6";
import { Answer, MainChildArea, Question } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const ProfileBasic = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Question>Is there a default profile for a Spring boot app?</Question>
      <Answer>
        Yes, there is. <Span>application.properties</Span> is the default profile of a spring boot app. Once I run a Spring-boot app , see what
        console shows if there is no other profile files
        <br />
        <div className="my-4"></div>
        <ApplicationPropertiesHighlight propertiesCode={appProfileConsole} />
      </Answer>
      <article className="my-5">
        from spring docs
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a href="https://docs.spring.io/spring-boot/reference/features/profiles.html" target="_blank" className="tracking-wider text-blue-500">
            https://docs.spring.io/spring-boot/reference/features/profiles.html
          </a>
        </div>
      </article>
    </MainChildArea>
  );
};

export default ProfileBasic;

const appProfileConsole = `No active profile set, falling back to 1 default profile: "default"`;
