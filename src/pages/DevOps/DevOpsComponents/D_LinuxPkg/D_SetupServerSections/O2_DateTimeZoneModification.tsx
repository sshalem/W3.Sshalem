/*
/devops/linux-server/setup-server#02_Date_Time_Zone
Date_Time_Zone --> (DEVOPS)(LINUX)(Linux Server setup)
*/
import { useLocation } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanRed } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";
import { useEffect } from "react";

const O2_DateTimeZoneModification = ({ anchor }: { anchor: string }) => {
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
      <ul className="my-4 ml-8 list-disc">
        <li className="my-1">
          <SpanGreen>date</SpanGreen> - returns date in following format <SpanRed>Thu Aug 14 01:09:44 AM IDT 2025</SpanRed>
        </li>
        <li className="my-1">
          <SpanGreen>timedatectl</SpanGreen> - returns multiple values like <SpanRed>LocalTime</SpanRed> , <SpanRed>UniversalTime</SpanRed>,
          <SpanRed>TimeZone</SpanRed> etc...
        </li>
        <li className="my-1">
          <SpanGreen>sudo timedatectl set-timezone Asia/Jerusalem</SpanGreen> - set the time zone
        </li>
      </ul>
      <LinuxHighlight bashCode={linux_date}></LinuxHighlight>
    </MainChildArea>
  );
};
export default O2_DateTimeZoneModification;

const linux_date = `date
timedatectl
sudo timedatectl set-timezone Asia/Jerusalem`;
