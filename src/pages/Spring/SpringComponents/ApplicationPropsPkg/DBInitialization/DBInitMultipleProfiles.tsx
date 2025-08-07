import { IMG, MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../../../components/Highlight";
import db_init_9 from "../../../../../assets/db_init_9.jpg";

const DBInitMultipleProfiles = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        Sometimes , when I'm working on different computers, each computer have different DB installed (Like my desktop, Laptop etc...) <br />
        Hence, when I work on big projects, I allways config 3 files ( 3 <Span>application.properties</Span> files) for each of the following DB:
        <ul className="my-4 ml-16 list-decimal">
          <li className="my-1">H2</li>
          <li className="my-1">MySql</li>
          <li className="my-1">Postgresql</li>
        </ul>
        This way, instead of re-configuring the properties file, I just Enable/Disable the profile in the main <Span>application.properties</Span>
        file. <br />
        {/* <div>
          <ul className="my-4 ml-16 list-decimal">
            <li className="my-1">
              create <Span>application-Postgres.properties</Span>file
            </li>
            <li className="my-1">
              config main <Span>application.properties</Span>
            </li>
            <li className="my-1">
              <Span>data-PostGreSql.sql</Span>
            </li>
          </ul>
        </div> */}
        Image below shows I have 3 profiles config
        <IMG img_name={db_init_9}></IMG>
      </div>
      <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
        main application.properties
      </div>
      <div>
        This is how the main <Span>application.properties</Span> in configured. <br />
        For example, If I want to work with MySql profile, I disable the other profiles, and Enable MySql profile.
      </div>
      <ApplicationPropertiesHighlight propertiesCode={applicationPropsMainCode}></ApplicationPropertiesHighlight>
      <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
        application-{`<profile>`}.properties
      </div>
      <div>See Implementation above in each section (H2, MySql, PostgResql)</div>
      <div className="my-8 inline-block border-spacing-10 rounded-md border-8 border-double border-zinc-400 p-1 tracking-wider text-black">
        data-{`<platform>`}.sql
      </div>
      <div>See Implementation above in each section (H2, MySql, PostgResql)</div>
    </MainChildArea>
  );
};

export default DBInitMultipleProfiles;

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
