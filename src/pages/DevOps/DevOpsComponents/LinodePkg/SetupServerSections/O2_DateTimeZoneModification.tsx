import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanRed } from "../../../../../components/Highlight";
import LinuxHighlight from "../../../../../components/Highlight/LinuxHighlight";

const O2_DateTimeZoneModification = ({ anchor }: { anchor: string }) => {
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
