/*
/devops/netlify#1.confignetlifyforSPA
config netlify for SPA --> (DEVOPS)(Netlify)(config netlify for SPA)
*/
import { MainChildArea } from "../../../../components";
import { SpanBlue, SpanRed } from "../../../../components/Highlight";

const O1_DeployNetlify = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="mb-4">
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
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Create a new file with the name <SpanBlue>_redirects</SpanBlue>
        </li>
        <li className="my-1">
          Place the file under <SpanBlue>public</SpanBlue> folder of the project
        </li>
        <li className="my-1">
          add the following contents inside it <SpanBlue>/* /index.html 200</SpanBlue>
        </li>
        <li className="my-1">
          Here, we're telling Netlify to redirect all the routes to the <SpanBlue>index.html</SpanBlue> file.
        </li>
        <li className="my-1">
          The <SpanBlue>index.html</SpanBlue> file contains our entire React app code
        </li>
        <li className="my-1">
          And as routing is handled by our React app which is contained in the <SpanBlue>index.html</SpanBlue> file, our application will work without
          a <SpanRed>page not found issue</SpanRed>.
        </li>
      </ul>
    </MainChildArea>
  );
};
export default O1_DeployNetlify;
