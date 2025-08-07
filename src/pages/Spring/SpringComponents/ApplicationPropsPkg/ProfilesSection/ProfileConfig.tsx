import { FaDiamond } from "react-icons/fa6";
import { IMG, InternalArticle, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, BatchHighlight, JavaHighlight, Span } from "../../../../../components/Highlight";
import profile_1 from "../../../../../assets/profile_1.jpg";

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
        {/* application.properties        # Default config */}
        {/* application-dev.properties    # Dev environment */}
        {/* application-test.properties   # Test environment */}
        {/* application-prod.properties   # Prod environment */}
        {/* application-h2.properties   # h2 environment */}
        {/* application-mysql.properties   # mysql environment */}
        {/* application-postgresql.properties   # postgresql environment */}
        <InternalArticle articleTitle="Step 1 : application.properties , Set Active Profile">
          <div>
            <div className="my-4 ml-8">
              <ul className="my-2 list-disc">
                <li className="my-1">
                  In the default properties I define who will be the profile properties that app will use, for example DEV profile.
                </li>
                <li className="my-1">
                  Set the active profile in the default <Span>application.properties</Span>
                </li>
              </ul>
            </div>

            <ApplicationPropertiesHighlight propertiesCode={appPropCode} />
            <div className="my-5">
              This tells Spring Boot to load &nbsp;
              <Span>application-dev.properties</Span>&nbsp; in addition to the default config.
              <br />
              <div className="my-2">
                The pattern is of a profile config is : <Span>application-{`{profile-name}`}.properties</Span>
              </div>
              <div className="my-2">
                Where <Span>{`{profile-name}`}</Span> - will be the name of the profile we select .
              </div>
              <div className="my-2">
                In our example <Span>{`{profile-name}`}</Span> is <Span>dev</Span>
              </div>
            </div>
          </div>
        </InternalArticle>
        {/*  */}
        {/*  */}
        <InternalArticle articleTitle="Step 2 : Create Profile-Specific Properties File">
          <div className="my-2 mb-4">
            Create a new file of <Span>application-dev.properties</Span> in <Span>src/main/resources:</Span>
          </div>
          <IMG img_name={profile_1}></IMG>

          <div className="my-8">
            <div className="my-4">
              type the following code inside <Span>application-dev.properties</Span>
            </div>
            <ApplicationPropertiesHighlight propertiesCode={devCode} />
          </div>
        </InternalArticle>
        {/*  */}
        {/*  */}
        <InternalArticle articleTitle="Step 3 : Run App check console">
          <div className="my-8">
            <JavaHighlight javaCode={javaCode} />
          </div>
          <div className="my-8">console show active profile is "dev"</div>
          <div>
            <BatchHighlight batchCode={batchCOde} />
          </div>
        </InternalArticle>
      </article>
    </MainChildArea>
  );
};

export default ProfileConfig;

const appPropCode = `spring.profiles.active=dev
`;

const devCode = `my.dev.var=checking dev profile is working
`;

const javaCode = `@RestController("/")
public class AppController {

	@Value("$/{my.var}")
	private String myVar;

	@GetMapping("/data")
	public String getMethodName() {
		System.out.println(myVar);
		return new String("test my app");
	}
}`;

const batchCOde = `The following 1 profile is active: "dev"`;
