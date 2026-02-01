/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow, SpanRed } from "../../../../../components/Highlight";

const O11_TestAppViaNginx = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4 text-xl"> Check my app running via (behind) NGINX</div>
        <p className="text-lg">1️⃣ Verify the JAR (Spring Boot) is running, If you use systemd (recommended)</p>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
          <Li>I should see:</Li>
          <ULdisc>
            <Li>
              <SpanYellow>Active: active (running)</SpanYellow>
            </Li>
            <Li>Java process listed</Li>
          </ULdisc>
          {/* <ApplicationPropertiesHighlight propertiesCode={_17_} /> */}
        </ULdisc>
        <hr />
        <p className="my-8 text-lg">2️⃣ Verify the application is listening on a port</p>
        <ULdisc>
          <Li>Check which port your app uses (example: 8080):</Li>
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
          <Li>Expected:</Li>
          <Li>
            <SpanRed>Important</SpanRed>
            <ULdisc>
              <Li>
                App should listen on <SpanYellow>127.0.0.1</SpanYellow> or <SpanYellow>localhost</SpanYellow>
              </Li>
              <Li>NGINX will forward traffic to it</Li>
            </ULdisc>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
        </ULdisc>
        <hr />
        <p className="my-8 text-lg">3️⃣ Test the app </p>
        <ULdisc>
          <Li>
            Browse thru <SpanYellow>http://your_server_ip/endpointUrl</SpanYellow>
          </Li>
          <Li>
            I can use <SpanYellow>Postman</SpanYellow>
          </Li>
          <Li>
            or use the <SpanYellow>curl</SpanYellow>command (Built in Linux)
            <ApplicationPropertiesHighlight propertiesCode={_4_} />
          </Li>
          <Li>
            Full verification List commands
            <ApplicationPropertiesHighlight propertiesCode={_5_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O11_TestAppViaNginx;

const _1_ = `sudo systemctl status app`;

const _2_ = `ss -lntp | grep java`;

const _3_ = `LISTEN 0 100 127.0.0.1:8080 ... java`;

const _4_ = `# Test the app directly which bypass NGINX (Must have "test" endpoint in RestController):
curl http://localhost:8080/actuator/health

# Test NGINX from outside (public) (Must have "test" endpoint in RestController)
curl http://139.162.148.144/test

# Check NGINX error/access logs (very important)
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log`;

const _5_ = `# APP :
sudo systemctl status audit
ss -lntp | grep 8080
curl http://localhost:8080

# NGINX:
curl http://139.162.148.144
tail -f /var/log/nginx/error.log`;
