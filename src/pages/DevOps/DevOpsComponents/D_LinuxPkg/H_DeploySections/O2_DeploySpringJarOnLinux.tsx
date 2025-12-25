/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey, XmlHighlight } from "../../../../../components/Highlight";

const O2_DeploySpringJarOnLinux = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-2xl font-semibold"> 1️⃣ Build the JAR locally</p>
        <article className="my-8 text-xl font-semibold">✅ Option 1 : Build the JAR</article>
        <ULdisc>
          <Li>Open Terminal with the path where project resides</Li>
          <Li>
            Run command :
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
          <Li>
            this results file name in this format <strong>{"<artifactId>-<version>.jar"}</strong>{" "}
          </Li>
          <Li>
            Example : <SpanGrey>O1-Audit-Spring-JPA-0.0.1-SNAPSHOT.jar</SpanGrey> where, <SpanGrey>O1-Audit-Spring-JPA</SpanGrey> is artifactID , and{" "}
            <SpanGrey>0.0.1-SNAPSHOT</SpanGrey> is version
          </Li>
        </ULdisc>
        <article className="my-8 text-xl font-semibold">✅ Option 2 : Build the JAR with custom app name</article>
        <ULdisc>
          <Li>
            Open <SpanGrey>POM.xml</SpanGrey>
          </Li>
          <Li>
            In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanGrey>{"<finalName>custom-app-name</finalName> "}</SpanGrey>
          </Li>
          <Li>
            this results file name in this format <SpanGrey>custom-app-name.jar</SpanGrey>
          </Li>
          <XmlHighlight xmlCode={custom_app_name} />
        </ULdisc>
        <article className="my-8 text-xl font-semibold">✅ Option 3 : Command-line solution (works only if you wire it)</article>
        <ULdisc>
          <Li>
            Open <SpanGrey>POM.xml</SpanGrey>
          </Li>
          <Li>
            In the tag of <strong>{"<properties>"}</strong> , add the following tag{" "}
            <SpanGrey>{"<jar.customAppName>my-custom-app</jar.customAppName>"}</SpanGrey>
          </Li>
          <Li>
            In the tag of <strong>{"<build>"}</strong> , add the following tag <SpanGrey>{"<finalName>${jar.customAppName}</finalName>"}</SpanGrey>
            <XmlHighlight xmlCode={wired_custom_name} />
          </Li>
          <Li>
            We run it with following command jar file will be <SpanGrey>shalem.jar</SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package_custom_name} />
          </Li>
          <Li>
            But, If we run without modifing in CLI , It will give the default name of <SpanGrey>my-custom-app.jar</SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={mvn_clean_package} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 2️⃣ Connect to your Linode server</p>
        <ULdisc>
          <Li>
            connect to Linode server with SSH connection (to get the IP info , login to Linode server)
            <ApplicationPropertiesHighlight propertiesCode={connect_to_linode} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 3️⃣ create a dedicated folder</p>
        <ULdisc>
          <Li>
            create a dedicated folder under <SpanGrey>/opt</SpanGrey> directory
            <ULdisc>
              <Li>
                <SpanGrey>/opt</SpanGrey> is a standard Linux directory for <strong>optional / third-party software</strong>
              </Li>
              <Li>
                <SpanGrey>/opt</SpanGrey> is commonly used for deployed apps
              </Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={mkdir_folder} />
            <Li>Example of keeping Spring Boot JARs organized:</Li>
            <ApplicationPropertiesHighlight propertiesCode={jar_organized} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 4️⃣ Upload the JAR to Linode</p>
        <ULdisc>
          <Li>
            Open Terminal, under the project go to the <SpanGrey>target</SpanGrey> directory , where the JAR file created in previous step
          </Li>
          <Li>
            Command below is the format what need to be in the , which copies the JAR file to a dedicated folder (on Linode Linux server)
            <ULdisc>
              <Li>
                {"my-app-name"} - <SpanGrey>audit</SpanGrey>
              </Li>
              <Li>
                LINODE_SERVER_IP - <SpanGrey>139.162.148.144</SpanGrey>
              </Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={scp_jar} />
          </Li>
        </ULdisc>
        <hr />
        <p className="my-8 text-2xl font-semibold"> 5️⃣ Run the JAR (basic)</p>
        <ULdisc>
          <Li>
            Open Terminal, under the project go to the <SpanGrey>target</SpanGrey> directory , where the JAR file created in previous step
          </Li>
          <Li>
            Command below is the format what need to be in the , which copies the JAR file to a dedicated folder (on Linode Linux server)
            <ULdisc>
              <Li>
                {"my-app-name"} - <SpanGrey>audit</SpanGrey>
              </Li>
              <Li>
                LINODE_SERVER_IP - <SpanGrey>139.162.148.144</SpanGrey>
              </Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={scp_jar} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O2_DeploySpringJarOnLinux;

const mvn_clean_package = `mvnw.cmd clean package`;

const mvn_clean_package_custom_name = `mvnw.cmd clean package -Djar.customAppName=shalem`;

const connect_to_linode = `ssh root@139.162.148.144`;

const mkdir_folder = `mkdir -p /opt/springboot`;

const scp_jar = `scp target/{my-app-name}.jar root@{LINODE_SERVER_IP}:/opt/springboot/`;

const jar_organized = `/opt/springboot/app.jar
/opt/springboot/logs/
/opt/springboot/config/`;

const custom_app_name = `<build>
    <finalName>custom-app-name</finalName>

    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build>`;

const wired_custom_name = `<properties>
    <jar.customAppName>my-custom-app</jar.customAppName>
</properties>

<build>
    <finalName>\${jar.customAppName}</finalName>
</build>`;
