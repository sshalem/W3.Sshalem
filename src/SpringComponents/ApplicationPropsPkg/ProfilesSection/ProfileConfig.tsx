import { FaDiamond } from "react-icons/fa6";
import { InternalArticle, MainChildArea } from "../../../components";
import { Span } from "../../../Highlight";

const ProfileConfig = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        Here I will config several profiles for connecting to different DB:
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> H2 profile
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> MySql profile
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> PostgreSql profile
        </div>
        <InternalArticle articleTitle="steps to create a profile">
          {/* application.properties        # Default config */}
          {/* application-dev.properties    # Dev environment */}
          {/* application-test.properties   # Test environment */}
          {/* application-prod.properties   # Prod environment */}
          {/* application-h2.properties   # h2 environment */}
          {/* application-mysql.properties   # mysql environment */}
          {/* application-postgresql.properties   # postgresql environment */}
          <div>step 1:</div>
          Use following convention , in order to add new properties file:
          <div className="my-4 ml-4">
            <Span>application-{`<profile-name>`}.properties</Span>
          </div>
          <div>{`<profile-name>`} - will be the name of the profile we select in</div>
        </InternalArticle>
        {/* <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a href="https://docs.spring.io/spring-boot/reference/features/profiles.html" target="_blank" className="tracking-wider text-blue-500">
            https://docs.spring.io/spring-boot/reference/features/profiles.html
          </a>
        </div> */}
      </article>
    </MainChildArea>
  );
};

export default ProfileConfig;
