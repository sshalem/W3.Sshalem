import { FaDiamond } from "react-icons/fa6";
import { Answer, MainChildArea, Question } from "../../../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../../../components/Highlight";

const ProfileIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Question>What are profiles</Question>
      <Answer>
        Profiles help you isolate configuration and bean definitions for different environments. <br />
        For example, you can have different database URLs or log levels for dev, test, and prod. I can have different profile for connecting to
        DataBases.
        <br />A profile file refers to <Span>application.properties</Span> file.
        <br />
        When spring app runs it uses <Span>application.properties</Span> file configuration. Since we have only 1 file of &nbsp;
        <Span>application.properties</Span> , it is named as default profile.
      </Answer>

      <article className="my-5">
        from spring docs (explanation is very bad)
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a href="https://docs.spring.io/spring-boot/reference/features/profiles.html" target="_blank" className="tracking-wider text-blue-500">
            https://docs.spring.io/spring-boot/reference/features/profiles.html
          </a>
        </div>
      </article>
      <Question>Is there a default profile for a Spring boot app?</Question>
      <Answer>
        Yes, there is. <Span>application.properties</Span> is the default profile of a spring boot app. Once I run a Spring-boot app , see what
        console shows if there is no other profile files
        <br />
        <div className="my-4"></div>
        <ApplicationPropertiesHighlight propertiesCode={appProfileConsole} />
      </Answer>
    </MainChildArea>
  );
};

export default ProfileIntro;

const appProfileConsole = `No active profile set, falling back to 1 default profile: "default"`;
