/*
/spring/application-properties/h2#H2DBeaver
H2 DBeaver --> (SPRING)(ApplicationProperties)(H2)
*/
import { useLocation } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { useEffect } from "react";

const H2Dbeaver = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  useEffect(() => {
    // Checks if url with hash is present
    if (hash) {
      // [1] remove '#' from hash [2] find the element with assigned hash , for example :  id="about",  id="MyProjects"
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      <div>links for H2 DBeaver config</div>
      <ul className="list-disc pl-8">
        <li>
          <a href="https://www.h2database.com/html/main.html" className="text-blue-700">
            https://www.h2database.com/html/main.html
          </a>
        </li>
        <li>
          <a href="https://www.h2database.com/html/features.html" className="text-blue-700">
            https://www.h2database.com/html/features.html
          </a>
        </li>
      </ul>

      <div className="mt-5">need to check what are this paths for</div>
      <ul className="list-decimal pl-8">
        <li>C:\Users\User\AppData\Roaming\DBeaverData\drivers\maven\maven-central\com.h2database\h2-2.1.210.jar</li>
        <li>C:\Users\User\AppData\Roaming\DBeaverData\drivers\remote\h2database\h2database\master\LICENSE.txt</li>
      </ul>
    </MainChildArea>
  );
};

export default H2Dbeaver;
