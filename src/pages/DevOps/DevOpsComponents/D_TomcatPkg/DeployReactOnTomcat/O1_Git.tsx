import { useLocation } from "react-router-dom";
import { GitHub, GitHubLiAnchor, MainChildArea } from "../../../../../components";
import { useEffect } from "react";

const O1_Git = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  useEffect(() => {
    // Checks if url with hash is present
    if (hash) {
      // [1] remove '#' from hash [2] find the element with assigned hash , for example :  id="about",  id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      Useful links
      <ul className="my-4 ml-8 list-disc">
        <li className="my-1">
          <a
            href="https://stackoverflow.com/questions/41246261/react-routing-is-able-to-handle-different-url-path-but-tomcat-returns-404-not-av"
            target="_blank"
            className="text-blue-600"
          >
            React SPA with Tomcat Refresh Error
          </a>
        </li>
        <li className="my-1">
          <a href="https://www.learninjava.com/react-router-apache-nginx-tomcat/" target="_blank" className="text-blue-600">
            ReactJS deploy on Tomcat / nginx
          </a>
        </li>
        <li className="my-1">
          <a href="https://oliverjam.es/articles/avoid-spa-404" target="_blank" className="text-blue-600">
            Avoid 404 when Deploy React To Netlify
          </a>
        </li>
        <li className="my-1">
          <a
            href="https://stackoverflow.com/questions/52867279/change-behavior-of-tomcat-when-page-not-found-404"
            target="_blank"
            className="text-blue-600"
          >
            React Deploy in Tomcat ,Well Exaplained for RewriteConfig and Server.xml
          </a>
        </li>
      </ul>
      <GitHub>
        <GitHubLiAnchor
          description="1 - SPA project use"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/06_02_deploy_React_to_Tomcat.md#spa_project_use_for_example"
        />
        <GitHubLiAnchor
          description="2 - add basename BrowserRouter or CreateBrowserRouter"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/06_02_deploy_React_to_Tomcat.md#1_add_basename_browserrouter_or_createbrowserrouter"
        />
        <GitHubLiAnchor
          description="3 - add homepage attribute to package.json"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/06_02_deploy_React_to_Tomcat.md#2_add_homepage_attribute_to_package_json"
        />
        <GitHubLiAnchor
          description="4 - npm run build"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/06_02_deploy_React_to_Tomcat.md#3_npm_run_build"
        />
        <GitHubLiAnchor
          description="5 - deploy reactjs app to tomcat"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/06_02_deploy_React_to_Tomcat.md#4_deploy_reactjs_app_to_tomcat"
        />
        <GitHubLiAnchor
          description="6 - config tomcat to redirect on refresh"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/06_02_deploy_React_to_Tomcat.md#5_config_tomcat_to_redirect_on_refresh_to_index_html"
        />
        <GitHubLiAnchor
          description="7 - 	config tomcat to be HTTPS"
          gitLink="https://github.com/sshalem/DevOps/blob/main/Deploy_to_Tomcat/06_02_deploy_React_to_Tomcat.md#6_config_tomcat_as_https"
        />
      </GitHub>
    </MainChildArea>
  );
};
export default O1_Git;
