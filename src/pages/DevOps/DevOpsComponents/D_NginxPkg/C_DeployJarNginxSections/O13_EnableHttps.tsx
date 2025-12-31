/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O13_EnableHttps = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4 text-xl">⚠️ Important prerequisite (READ FIRST)</div>
        <ULdisc>
          <Li>🔴 HTTPS CANNOT be issued for a bare IP address reliably</Li>
          <Li>Certbot requires a domain name (recommended & future-proof).</Li>
          <Li>
            ✅ Works best:
            <ApplicationPropertiesHighlight propertiesCode={_0_} />
          </Li>
          <Li>
            ⚠️ If you only have an IP (like 139.162.148.144):
            <ULdisc>
              <Li>Some CAs reject it</Li>
              <Li>Browsers show warnings</Li>
              <Li>Not production-grade</Li>
            </ULdisc>
          </Li>
          <Li>
            <SpanGrey>👉 Strong recommendation</SpanGrey>: create a domain or subdomain and point it to your server.
          </Li>
          <Li>
            So , Point your domain to the server
            <ApplicationPropertiesHighlight propertiesCode={_01_} />
          </Li>
          <Li>
            Verify: <ApplicationPropertiesHighlight propertiesCode={_02_} />
          </Li>
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> Install Certbot for NGINX , Enable HTTPS (production-critical)</div>
        <ULdisc>
          <Li>
            Install Certbot:
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
          <Li>Enable SSL</Li>
          <Li>
            Certbot will:
            <ULdisc>
              <Li>Detect your server block</Li>
              <Li>Ask which domain to secure</Li>
              <Li>Ask about HTTP → HTTPS redirect</Li>
            </ULdisc>
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
            <Li>✅ Choose:</Li>
            <ApplicationPropertiesHighlight propertiesCode={_3_} />
          </Li>
        </ULdisc>
        <hr />
        <div className="my-4 text-xl"> What Certbot does automatically</div>
        <ULdisc>
          <Li>✔ Creates SSL certificates</Li>
          <Li>✔ Updates NGINX config</Li>
          <Li>✔ Adds HTTPS (443)</Li>
          <Li>✔ Enables auto-renew</Li>
          <Li>
            I’ll end up with two server blocks:
            <ApplicationPropertiesHighlight propertiesCode={_4_} />
          </Li>
        </ULdisc>
        <hr />
        <div className="my-4 text-xl">Verify HTTPS</div>
        <ULdisc>
          <Li>
            <ApplicationPropertiesHighlight propertiesCode={_5_} />
          </Li>
          <Li>
            Expected <SpanGrey>🔒 Padlock visible</SpanGrey>
            <ApplicationPropertiesHighlight propertiesCode={_6_} />
          </Li>
        </ULdisc>
        <hr />
        <div className="my-4 text-xl">Auto-renewal (VERY IMPORTANT)</div>
        Certbot installs a systemd timer automatically.
        <ULdisc>
          <Li>
            Check:
            <ApplicationPropertiesHighlight propertiesCode={_7_} />
          </Li>
          <Li>
            Test renewal:
            <ApplicationPropertiesHighlight propertiesCode={_8_} />
          </Li>
        </ULdisc>
        <hr />
        <div className="my-4 text-xl">Firewall check (often forgotten)</div>
        Ports allowed:
        <ULdisc>
          <Li>22 (SSH)</Li>
          <Li>80 (HTTP → redirect)</Li>
          <Li>443 (HTTPS)</Li>
          <ApplicationPropertiesHighlight propertiesCode={_9_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O13_EnableHttps;
const _0_ = `audit.example.com
api.example.com`;

const _01_ = `A record → YOUR_DOMAIN → 139.162.148.144`;
const _02_ = `ping your-domain.com`;

const _1_ = `sudo apt install certbot python3-certbot-nginx -y
certbot --version

sudo nginx -t
sudo systemctl reload nginx`;

const _2_ = `sudo certbot --nginx`;

const _3_ = `2: Redirect HTTP to HTTPS`;

const _4_ = `server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`;

const _5_ = `curl -I https://your-domain.com`;
const _6_ = `HTTP/2 200`;

const _7_ = `systemctl list-timers | grep certbot`;

const _8_ = `sudo certbot renew --dry-run`;

const _9_ = `sudo ufw allow 443
sudo ufw reload`;
