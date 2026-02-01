/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_InstallNginx = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">Here’s a step-by-step guide to install NGINX on Ubuntu 22.04:</article>
        <div className="my-4 text-xl">1️⃣ Update your system</div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl">2️⃣ Install NGINX</div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_2_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl">3️⃣ Start and enable NGINX</div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl">4️⃣ Allow NGINX through the firewall</div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_4_} />
        </ULdisc>
        Check:
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_5_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 5️⃣ Test NGINX</div>
        Open your browser and visit: I should see the <strong>“Welcome to Nginx!”</strong> page.
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_6_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 6️⃣ Useful NGINX commands</div>
        <ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_7_} />
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> 7️⃣ Important NGINX paths (you’ll use these a lot)</div>
        <ULDecimal>
          <Li>
            <p className="inline-block w-[18rem]">
              <SpanYellow>/etc/nginx/nginx.conf</SpanYellow>
            </p>
            - Main config
          </Li>
          <Li>
            <p className="inline-block w-[18rem]">
              <SpanYellow>/etc/nginx/sites-available/</SpanYellow>
            </p>
            - Site configs
          </Li>
          <Li>
            <p className="inline-block w-[18rem]">
              <SpanYellow>/etc/nginx/sites-enabled/</SpanYellow>
            </p>
            - Enabled sites
          </Li>
          <Li>
            <p className="inline-block w-[18rem]">
              <SpanYellow>/var/www/html</SpanYellow>
            </p>
            - Web root (default)
          </Li>
          <Li>
            <p className="inline-block w-[18rem]">
              <SpanYellow>/var/log/nginx/</SpanYellow>
            </p>
            - Logs
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};
export default O1_InstallNginx;

const _1_ = `sudo apt update
sudo apt upgrade -y`;

const _2_ = `sudo apt install nginx -y`;

const _3_ = `sudo systemctl start nginx
sudo systemctl enable nginx`;

const _4_ = `sudo ufw allow 'Nginx Full'
sudo ufw reload`;

const _5_ = `sudo ufw status`;

const _6_ = `http://YOUR_SERVER_IP`;

const _7_ = `sudo systemctl restart nginx     # Restart NGINX
sudo systemctl reload nginx      # Reload config without downtime
sudo systemctl stop nginx        # Stop NGINX
sudo nginx -t                     # Test configuration`;
