// import { Answer, ContentAnchor, InternalArticle, Question } from "../../../components";
// import { BatchHighlight, Span } from "../../../Highlight";
// import logging_linux from "../../assets/logging_linux.jpg";

// const LoggingFileLocationLinuxServer = ({ anchor }: { anchor: string }) => {
//   return (
//     <section className="my-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
//       <ContentAnchor anchor={anchor} />
//       <article className="my-0">
//         <div>refernce link</div>
//         <a
//           href="https://docs.spring.io/spring-boot/reference/features/logging.html"
//           target="_blank"
//           className="tracking-wider text-blue-500 underline"
//         >
//           https://docs.spring.io/spring-boot/reference/features/logging.html
//         </a>
//       </article>
//       <article className="my-5">
//         <div>
//           By default, Spring Boot logs only to the console and does not write log files. <br /> If you want to write log files in addition to the
//           console output, you need to set a :
//           <ul className="list-disc pl-8">
//             <li className="my-1">
//               <Span>logging.file.name</Span>
//             </li>
//             <li className="my-1">
//               or <Span>logging.file.path</Span> property (for example, in your application.properties).
//             </li>
//           </ul>
//           <div className="my-4">If both properties are set:</div>
//           <ul className="list-disc pl-8">
//             <li className="my-1">
//               <Span>
//                 <span className="text-red-500">logging.file.name</span>
//               </Span>
//               &nbsp; is ignored
//             </li>
//             <li className="my-1">
//               and only
//               <Span>
//                 <span className="text-emerald-500">logging.file.path</span>
//               </Span>
//               &nbsp; is used.
//             </li>
//           </ul>
//           <div className="my-4">
//             There are 4 possible options with logging file on production server (see Spring docs ) &nbsp;
//             <a
//               href="https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.file-output"
//               target="_blank"
//               className="tracking-wider text-blue-500 underline"
//             >
//               Logging properties File output
//             </a>
//           </div>
//         </div>
//       </article>
//       {/*  */}
//       {/*  */}
//       <InternalArticle articleTitle="Scenario 1 : none">
//         <p>
//           If I don't define a logging file in <Span>application.properties</Span> the logging will be logged only to console.
//         </p>
//         <Question>If I upload the app to production server, In this situation , where can I find the console log of the app?</Question>
//         <Answer>
//           I can find it in the file <Span>catalina.out</Span> located in directory <Span>/opt/tomcat/logs</Span>
//         </Answer>
//       </InternalArticle>
//       {/*  */}
//       {/*  */}
//       <InternalArticle articleTitle="scenario 2 - Jenkins server: logging.file.name only">
//         <div>
//           <span className="text-red-500">Important note</span> : there are several options where to find the log file.
//           <br />
//           If Using <Span>Jenkins</Span> to upload Spring boot app (War file) , thus file will be located at jenkins directory.
//           <br />
//           for example, Idefine my log file name as : <br />
//           <Span> logging.file.name=__Shabtay_Shalem.log</Span>
//         </div>
//         <div className="my-2">
//           When I searched for the file, had some problems to find the file this way , thus , I used the command in linux server:
//           <BatchHighlight batchCode="find / -iname '__Shabtay*'" />
//         </div>
//         <div className="my-2">Eventually I got the path of the file ,</div>
//         <img src={logging_linux} alt="logging_linux" />
//       </InternalArticle>
//     </section>
//   );
// };

// export default LoggingFileLocationLinuxServer;

// const propertiesCode = `logging.file.name=__Shabtay_Shalem.log`;
