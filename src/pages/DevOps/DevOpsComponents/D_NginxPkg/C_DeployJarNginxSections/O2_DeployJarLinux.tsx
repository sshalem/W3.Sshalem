/*


*/
import { Link } from "react-router-dom";
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_DeployJarLinux = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4">
          <span className="text-xl">
            <SpanGrey>Clarification</SpanGrey>
          </span>{" "}
        </div>
        <article className="my-8">
          When you deploy a Spring Boot (or any Java) JAR on Linux, you generally have two common architectures:
          <ULDecimal>
            <Li>
              <strong>Run the JAR directly</strong> and expose it to clients
            </Li>
            <Li>
              <strong>Run the JAR behind NGINX</strong> (reverse proxy)
            </Li>
          </ULDecimal>
          They differ in <strong>security</strong>, <strong>performance</strong>, <strong>scalability</strong>, and{" "}
          <strong>operational control</strong>.
        </article>
        <hr />
        {/*  */}

        <article className="my-8">
          <div className="my-4 text-xl font-semibold">1️⃣ Deploying the JAR directly on Linux</div>
          <ULdisc>
            <p className="my-4 text-lg">✅ Pros</p>
            <ULdisc>
              <Li>Simple setup (no extra components)</Li>
              <Li>Fewer moving parts → easier debugging</Li>
              <Li>
                Suitable for:
                <ULdisc>
                  <Li>Internal services</Li>
                  <Li>POCs</Li>
                  <Li>Small apps</Li>
                  <Li>Learning environments</Li>
                </ULdisc>
              </Li>
            </ULdisc>
          </ULdisc>
          <ULdisc>
            <p className="my-4 text-lg">❌ Cons</p>
            <ULdisc>
              <Li>
                Java app must:
                <ULdisc>
                  <Li>Handle TLS/SSL</Li>
                  <Li>Handle static assets</Li>
                  <Li>Handle slow clients</Li>
                </ULdisc>
                <Li>Exposes the app directly to the internet</Li>
                <Li>
                  Limited:
                  <ULdisc>
                    <Li>Rate limiting</Li>
                    <Li>Request buffering</Li>
                    <Li>DDoS protection</Li>
                  </ULdisc>
                </Li>
                <Li>Restarting the app causes immediate downtime</Li>
                <Li>Port {"<1024"} requires root privileges</Li>
              </Li>
            </ULdisc>
          </ULdisc>

          <ULdisc>
            <p className="my-4 text-lg">⚠️ Common issues</p>
            <ULdisc>
              <Li>SSL certificate management inside Java</Li>
              <Li>Poor handling of high concurrent connections</Li>
              <Li>No easy request throttling</Li>
            </ULdisc>
          </ULdisc>
        </article>

        {/*  */}
        <p className="my-8 text-2xl font-semibold"> 1️⃣ Build the JAR locally</p>
        <ULdisc>
          <Li>
            See section of{" "}
            <Link to={"/devops/nginx/maven-create-jar#2.BuildJARfile"} className="rounded-md bg-blue-400 px-2 py-1 font-semibold text-white">
              Maven Create JAR
            </Link>{" "}
            for additional data.
          </Li>
          <Li>
            Run command (For custom name see option 3 in prev section):
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
            with <SpanGrey>FileZilla</SpanGrey>
          </Li>
          <Li>
            with <SpanGrey>scp</SpanGrey> command using terminal
          </Li>
        </ULdisc>
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
          <Li>In Linux terminal write the command below</Li>

          <ApplicationPropertiesHighlight propertiesCode={_7_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O2_DeployJarLinux;

const mvn_clean_package = `mvnw.cmd clean package`;

const connect_to_linode = `ssh root@139.162.148.144`;

const mkdir_folder = `mkdir -p /opt/springboot`;

const scp_jar = `scp target/{my-app-name}.jar root@{LINODE_SERVER_IP}:/opt/springboot/`;

const jar_organized = `/opt/springboot/app.jar
/opt/springboot/logs/
/opt/springboot/config/`;

const _7_ = `java -jar your-app.jar`;
