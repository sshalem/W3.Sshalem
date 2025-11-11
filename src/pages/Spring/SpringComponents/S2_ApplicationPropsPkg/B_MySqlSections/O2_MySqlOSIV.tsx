/*
/spring/application-properties/mysql#2.Osiv
Osiv --> (SPRING)(ApplicationProperties)(MySql)
*/
import { useLocation } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";
import { useEffect } from "react";

const O2_MySqlOSIV = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  // Checks if url with hash is present
  // [1] remove '#' from hash
  // [2] find the element with assigned hash ,
  // "id" is found inside MainChildArea
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return (
    <MainChildArea anchor={anchor}>
      <div className="my-4">
        Regarding this property , see the project of LAZY Loading, (I explain it there). <br />I get a warning in spring console since by default its
        set to
        <SpanBlue>true</SpanBlue> . <br /> To disable the warning, I set to <SpanBlue>false</SpanBlue>
      </div>
      <ApplicationPropertiesHighlight propertiesCode={osiv} />
    </MainChildArea>
  );
};

export default O2_MySqlOSIV;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
