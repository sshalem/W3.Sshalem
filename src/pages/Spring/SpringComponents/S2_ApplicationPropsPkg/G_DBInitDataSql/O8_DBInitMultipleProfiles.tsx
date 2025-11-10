/*
/spring/application-properties/db-initialization#8.Multipleprofilesanddatasql
Multiple profiles and data sql --> (SPRING)(ApplicationProperties)(Multiple profiles and data sql)
*/
import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import db_init_9 from "../../../../../assets/db_init_9.jpg";

const O8_DBInitMultipleProfiles = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        Sometimes , when I'm working on different computers, each computer have different DB installed (Like my desktop, Laptop etc...) <br />
        Hence, when I work on big projects, I allways config 3 files ( 3 <SpanBlue>application.properties</SpanBlue> files) for each of the following
        DB:
        <ul className="my-4 ml-16 list-decimal">
          <li className="my-1">H2</li>
          <li className="my-1">MySql</li>
          <li className="my-1">Postgresql</li>
        </ul>
        This way, instead of re-configuring the properties file, I just Enable/Disable the profile in the main{" "}
        <SpanBlue>application.properties</SpanBlue>
        file. <br />
        {/* <div>
          <ul className="my-4 ml-16 list-decimal">
            <li className="my-1">
              create <SpanBlue>application-Postgres.properties</SpanBlue>file
            </li>
            <li className="my-1">
              config main <SpanBlue>application.properties</SpanBlue>
            </li>
            <li className="my-1">
              <SpanBlue>data-PostGreSql.sql</SpanBlue>
            </li>
          </ul>
        </div> */}
        Image below shows I have 3 profiles config
        <IMG img_name={db_init_9}></IMG>
      </div>
      <DivDoubleBorder>main application.properties</DivDoubleBorder>
      <div>
        This is how the main <SpanBlue>application.properties</SpanBlue> in configured. <br />
        For example, If I want to work with MySql profile, I disable the other profiles, and Enable MySql profile.
      </div>
      <ApplicationPropertiesHighlight propertiesCode={applicationPropsMainCode}></ApplicationPropertiesHighlight>

      <DivDoubleBorder>{`application-<profile>.properties`}</DivDoubleBorder>
      <div>See Implementation above in each section (H2, MySql, PostgResql)</div>

      <DivDoubleBorder>{`data-<platform>.sql`}</DivDoubleBorder>
      <div>See Implementation above in each section (H2, MySql, PostgResql)</div>
    </MainChildArea>
  );
};

export default O8_DBInitMultipleProfiles;

const applicationPropsMainCode = `#spring.profiles.active=H2
spring.profiles.active=MySql
#spring.profiles.active=Postgres

# console color enabled
spring.output.ansi.enabled=always

spring.jpa.open-in-view=false

server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true
`;
