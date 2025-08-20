import { Answer, IMG, MainChildArea, Question } from "../../../../../components";
import { BatchHighlight, DivDoubleBorder, SpanBlue } from "../../../../../components/Highlight";
import logging_linux from "../../../../../assets/logging_linux.jpg";

const LogFileLinux = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      {/*  */}
      {/*  */}
      <DivDoubleBorder>Scenario 1 : none</DivDoubleBorder>
      <p>
        If I don't define a logging file in <SpanBlue>application.properties</SpanBlue> the logging will be logged only to console.
      </p>
      <Question>If I upload the app to production server, In this situation , where can I find the console log of the app?</Question>
      <Answer>
        I can find it in the file <SpanBlue>catalina.out</SpanBlue> located in directory <SpanBlue>/opt/tomcat/logs</SpanBlue>
      </Answer>
      {/*  */}
      {/*  */}
      <DivDoubleBorder>Scenario 2 : logging.file.name=sshb.log</DivDoubleBorder>
      <div>Assume I define a config file during dev on windows, I upload the app to Tomcat on linux server. </div>
      <Question>If I upload the app to production server, In this situation , where can I find the log file of the app?</Question>
      <Answer>?</Answer>
      {/*  */}
      {/*  */}
      <DivDoubleBorder>Scenario 3 : logging.file.name=/var/log/sshb.log</DivDoubleBorder>
      <div>
        Assume I define a config file with relative path <SpanBlue>logging.file.name=/var/log/sshb.log</SpanBlue> during dev on windows, I upload the
        app to Tomcat on linux server.
      </div>
      <Question>If I upload the app to production server, In this situation , where can I find the log file of the app?</Question>
      <Answer>?</Answer>
      {/*  */}
      {/*  */}
      <DivDoubleBorder>scenario 4 - Jenkins server: logging.file.name only</DivDoubleBorder>
      <div>
        <SpanBlue>Important note</SpanBlue> : there are several options where to find the log file.
        <br />
        If Using <SpanBlue>Jenkins</SpanBlue> to upload Spring boot app (War file) , thus file will be located at jenkins directory.
        <br />
        for example, Idefine my log file name as : <br />
        <SpanBlue> logging.file.name=__Shabtay_Shalem.log</SpanBlue>
      </div>
      <div className="my-2">
        When I searched for the file, had some problems to find the file this way , thus , I used the command in linux server:
        <BatchHighlight batchCode="find / -iname '__Shabtay*'" />
      </div>
      <div className="my-2">Eventually I got the path of the file ,</div>
      <IMG img_name={logging_linux}></IMG>
    </MainChildArea>
  );
};

export default LogFileLinux;

// const propertiesCode = `logging.file.name=__Shabtay_Shalem.log`;
