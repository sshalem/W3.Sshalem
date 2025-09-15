import { FaDiamond } from "react-icons/fa6";
import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, BatchHighlight, DivDoubleBorder, JavaHighlight, SpanBlue } from "../../../../../components/Highlight";
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
        <DivDoubleBorder>Step 1 : application.properties , Set Active Profile</DivDoubleBorder>
        <div>
          <div className="my-4 ml-8">
            <ul className="my-2 list-disc">
              <li className="my-1">
                In the default properties I define who will be the profile properties that app will use, for example DEV profile.
              </li>
              <li className="my-1">
                Set the active profile in the default <SpanBlue>application.properties</SpanBlue>
              </li>
            </ul>
          </div>

          <ApplicationPropertiesHighlight propertiesCode={appPropCode} />
          <div className="my-5">
            This tells Spring Boot to load &nbsp;
            <SpanBlue>application-dev.properties</SpanBlue>&nbsp; in addition to the default config.
            <br />
            <div className="my-2">
              The pattern is of a profile config is : <SpanBlue>application-{`{profile-name}`}.properties</SpanBlue>
            </div>
            <div className="my-2">
              Where <SpanBlue>{`{profile-name}`}</SpanBlue> - will be the name of the profile we select .
            </div>
            <div className="my-2">
              In our example <SpanBlue>{`{profile-name}`}</SpanBlue> is <SpanBlue>dev</SpanBlue>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <DivDoubleBorder>Step 2 : Create Profile-Specific Properties File</DivDoubleBorder>
        <div className="my-2 mb-4">
          Create a new file of <SpanBlue>application-dev.properties</SpanBlue> in <SpanBlue>src/main/resources:</SpanBlue>
        </div>
        <IMG img_name={profile_1}></IMG>
        <div className="my-8">
          <div className="my-4">
            type the following code inside <SpanBlue>application-dev.properties</SpanBlue>
          </div>
          <ApplicationPropertiesHighlight propertiesCode={devCode} />
        </div>
        {/*  */}
        {/*  */}
        <DivDoubleBorder>Step 3 : Run App check console</DivDoubleBorder>
        <div className="my-8">
          <JavaHighlight javaCode={javaCode} />
        </div>
        <div className="my-8">console show active profile is "dev"</div>
        <div>
          <BatchHighlight batchCode={batchCOde} />
        </div>
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
