import { MainChildArea } from "../../../../../components";

const ConfigNetlifyForSpa = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        See link{" "}
        <a href="https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/" target="_blank" className="text-blue-600">
          https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/
        </a>
      </article>
      <div>
        with SPA , once I refresh any the route page url (Not index main page url), I get a page not found error. <br />
        This is because when we access any route on our local machine, React Router handles the routing. <br />
        But when we deploy the application on any server, directly accessing the route will send the request to the server itself (Netlify in our
        case).
      </div>
    </MainChildArea>
  );
};
export default ConfigNetlifyForSpa;
