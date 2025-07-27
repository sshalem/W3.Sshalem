import { Answer, InternalArticle, MainChildArea, Question } from "../../../components";
import { BatchHighlight, Span } from "../../../Highlight";
import logging_linux from "../../../assets/logging_linux.jpg";

const LoggingFileLocationLinuxServer = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      {/*  */}
      {/*  */}
      <InternalArticle articleTitle="Scenario 1 : none">
        <p>
          If I don't define a logging file in <Span>application.properties</Span> the logging will be logged only to console.
        </p>
        <Question>If I upload the app to production server, In this situation , where can I find the console log of the app?</Question>
        <Answer>
          I can find it in the file <Span>catalina.out</Span> located in directory <Span>/opt/tomcat/logs</Span>
        </Answer>
      </InternalArticle>
      {/*  */}
      {/*  */}
      <InternalArticle articleTitle="scenario 2 - Jenkins server: logging.file.name only">
        <div>
          <span className="text-red-500">Important note</span> : there are several options where to find the log file.
          <br />
          If Using <Span>Jenkins</Span> to upload Spring boot app (War file) , thus file will be located at jenkins directory.
          <br />
          for example, Idefine my log file name as : <br />
          <Span> logging.file.name=__Shabtay_Shalem.log</Span>
        </div>
        <div className="my-2">
          When I searched for the file, had some problems to find the file this way , thus , I used the command in linux server:
          <BatchHighlight batchCode="find / -iname '__Shabtay*'" />
        </div>
        <div className="my-2">Eventually I got the path of the file ,</div>
        <img src={logging_linux} alt="logging_linux" />
      </InternalArticle>
    </MainChildArea>
  );
};

export default LoggingFileLocationLinuxServer;

const propertiesCode = `logging.file.name=__Shabtay_Shalem.log`;
