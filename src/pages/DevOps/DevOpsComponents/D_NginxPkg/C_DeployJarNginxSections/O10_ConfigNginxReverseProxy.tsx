/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O10_ConfigNginxReverseProxy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4 text-xl">Configure NGINX as reverse proxy</div>
        <ULdisc>
          <Li>
            Check NGINX status
            <ApplicationPropertiesHighlight propertiesCode={_10_} />
          </Li>
          <Li>
            Create Config file <SpanYellow>springboot</SpanYellow> inside directory of <SpanYellow>/etc/nginx/sites-available/</SpanYellow>:
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_11_} />
          <Li>
            Paste this :
            <ULdisc>
              <Li>
                <SpanYellow>server_name</SpanYellow> = Linode server IP <SpanYellow>139.162.148.144</SpanYellow>
              </Li>
              <Li>
                <SpanYellow>proxy_pass</SpanYellow> = <SpanYellow>http://localhost:8080;</SpanYellow> (Sometimes instead of localhost need to be{" "}
                <SpanYellow>127.0.0.1</SpanYellow> )
              </Li>
            </ULdisc>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_12_} />
          <ULdisc>
            <Li>Run Following commands :</Li>
          </ULdisc>
          <ApplicationPropertiesHighlight propertiesCode={_12_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O10_ConfigNginxReverseProxy;

const _10_ = `systemctl status nginx`;
const _11_ = `sudo nano /etc/nginx/sites-available/springboot`;
const _12_ = `server {
    listen 80;
    server_name 139.162.148.144;

    location / {        
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Connection "";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # timeouts (NGINX ONLY — correct place)
        proxy_connect_timeout 60s;
        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
    }
}`;

const _12_1_ = `# With  sudo cat  command check the content of file  springboot
# Enable site
# Remove default config  (important) 
# Test NGINX config
# Reload NGINX

sudo cat /etc/nginx/sites-enabled/springboot
sudo ln -s /etc/nginx/sites-available/springboot /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx`;
