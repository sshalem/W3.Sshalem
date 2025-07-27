import { FaDiamond } from "react-icons/fa6";
import { Answer, MainChildArea, Question } from "../../../components";
import { Span } from "../../../Highlight";

const ProfileIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Question>What are profiles</Question>
      <Answer>
        Profiles help you isolate configuration and bean definitions for different environments. <br />
        For example, you can have different database URLs or log levels for dev, test, and prod. I can have different profile for connecting to
        DataBases.
        <br />A profile file refers to <Span>application.properties</Span> file
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

export default ProfileIntro;
