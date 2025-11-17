import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import {
  Batch_page,
  Cpp_page,
  DevOps_page,
  Error_page,
  FullStack_page,
  Git_page,
  Home_page,
  HTML_CSS_page,
  Java_page,
  JavaScript_page,
  Linux_page,
  MicroServices_page,
  Page_Creation_page,
  Postman_page,
  Python_page,
  ReactJS_page,
  Spring_page,
  Sql_page,
  Windows_page,
} from "./pages";

import {
  Aop,
  ApplicationProperties,
  Auditing,
  Caching,
  ExceptionHandling,
  Ide,
  InterviewQuestions,
  Jenkins,
  Jpa,
  JUnit,
  Logging,
  Rest,
  SpringBatch,
  SpringHome,
  SpringIO,
  SpringSecurity,
  TransactionManagement,
} from "./pages/Spring/SpringComponents";

import {
  DBeaverMain,
  DBInitCommandLineRunnerMain,
  DBInitDataSqlMain,
  DBInitPostConstructMain,
  H2Main,
  MongoDBMain,
  MySqlMain,
  PostgresqlMain,
  ProfileMain,
} from "./pages/Spring/SpringComponents/S2_ApplicationPropsPkg";

import { LogFileMain, LogUtilMain, Slf4jLogbackMain, LoggingPropsMain } from "./pages/Spring/SpringComponents/S3_LoggingPkg";
import { Docker, Eureka, Kafka, MicroServiceHome, RabbitMQ } from "./pages/MicroServices/MicroServiceComponents";

import {
  SpecificationDocument,
  CreateStepMain,
  PageCreationHome,
  AppTreeComponent,
  ComponentTreeComponent,
  WebPageComponent,
} from "./pages/PageCreate/PageCreateComponents";

import { CppHome, CppBasics, FunctionsMain } from "./pages/Cpp/CppComponents";

import {
  GlobalSearch,
  IntroMain,
  JsxMain,
  MemorySearchMain,
  Pagination,
  ReactBasics,
  ReactJSHome,
  ReactRouter,
  RouterMain,
  Setup,
  TypeScript,
} from "./pages/ReactJS/ReactJSComponents";
import { JavaBasics, JavaHome, ArrayMain } from "./pages/Java/JavaComponents";
import { JavaScriptBasics, JavaScriptHome, JsArrayMain } from "./pages/JavaScript/JavaScriptComponents";
import { AddCssMain, CssBasics, HtmlBasics, HtmlCssHome, HtmlTypesMain } from "./pages/HTML_CSS/HtmlCssComponents";
import { FullStackHome } from "./pages/FullStack/FullStackComponents";
import { BasicConcepts, KeyTypesMain, SqlHome } from "./pages/Sql/SqlComponents";
import { DataTypesMain, PythonBasics, PythonHome, VsCodePythonMain } from "./pages/Python/PythonComponents";
import {
  ConnectToServerSshMain,
  CreateServerMain,
  ReactOnTomcatMain,
  DevOpsHome,
  JdkInstallMain,
  JenkinsMain,
  Linux_Server,
  MySqlnstallMain,
  ReactOnSpringMain,
  SetupServerMain,
  TomcatInstallMain,
  Tomcat,
  FileZillaMain,
  DeployNetlifyMain,
  DeployRenderMain,
} from "./pages/DevOps/DevOpsComponents";

import { GitHome } from "./pages/Git/GitComponents";
import { LinuxHome } from "./pages/Linux/LinuxComponents";
import { BatchHome } from "./pages/Batch/BatchComponents";
import { CollectionMain, Environment, MultipleHttpRequestMain, PostmanHome } from "./pages/Postman/PostmanComponents";
import { PortCheckMain, WindowsHome } from "./pages/Windows/WindowsComponents";
import { IntelliJMain, StsMain } from "./pages/Spring/SpringComponents/S1_IdePkg";
import {
  CorsMain,
  OpenApiSwaggerMain,
  RestMain,
  SseMain,
  StreamDataMain,
  StreamLargeResponseMain,
  WebSocketMain,
} from "./pages/Spring/SpringComponents/S7_RestApiPkg";

import {
  GenZCareerMain,
  JavaInUseMain,
  JavaTechieMain,
  LoopStreamParallelStreamMain,
  MultiThreadBlockQueueMain,
  StreamRecordsInstantlyMain,
} from "./pages/Spring/SpringComponents/S16_InterviewQuestionsPkg";

import {
  CaffeineMain,
  EhCacheMain,
  HazelcastMain,
  InfinispanMain,
  RedisMain,
  SimpleDefaultMain,
} from "./pages/Spring/SpringComponents/S12_CachingPkg";

import {
  JwtMain,
  JwtRefreshTokenV3_5_7Main,
  JwtV3_5_6Main,
  JwtV_2_6_11Main,
  MultipleJwtSecurityConfigMain,
  OAuth2Main,
  SpringSecurityMain,
} from "./pages/Spring/SpringComponents/S8_SecurityPkg";
import { BeforeAdviceMain } from "./pages/Spring/SpringComponents/S9_AopPkg";
import {
  ConfigMsgControllerMain,
  ConfigMsgPropertiesMain,
  CustomAtControllerAdviceMain,
  CustomCtrlAdviceProdMain,
  CustomErrMsgMain,
  RuntimeMain,
  TimestampConfigMain,
} from "./pages/Spring/SpringComponents/S6_ExceptionsPkg";

import { ExcelMain, FileUploadMain } from "./pages/Spring/SpringComponents/S13_SpringIOPkg";
import { JunitArchitectureMain } from "./pages/Spring/SpringComponents/S14_JUnitPkg";
import { CICDMain, JenkinsServerMain } from "./pages/Spring/SpringComponents/S15_JenkinsPkg";

import OperatorStatements from "./pages/Sql/SqlComponents/OperatorStatementsPkg/OperatorStatements";
import {
  AliasMain,
  BetweenMain,
  DistinctMain,
  InMain,
  IsNullMain,
  LikeMain,
  LimitMain,
  LogicalOperatorsMain,
  OrderByMain,
  RegexMain,
  SelectMain,
  UseMain,
  WhereClauseMain,
} from "./pages/Sql/SqlComponents/OperatorStatementsPkg";

import {
  EntityValidationMain,
  JpaLoggingMain,
  JpqlMain,
  Many2ManyBiLazyMain,
  MappingLibsMain,
  One2ManyBiLazyMain,
  PaginationSortingMain,
  StoredProceduresFunctionsMain,
} from "./pages/Spring/SpringComponents/S4_JpaPkg";
import Architecture from "./pages/MicroServices/MicroServiceComponents/M_ArchitecturePkg/Architecture";
import {
  APIGatewayMain,
  ConfigManagementMain,
  DataManagementMain,
  DistributedTracingMonitoringMain,
  InterServiceCommMain,
  LoadBalancingMain,
  ResilienceFaultToleranceMain,
  ServiceDiscoveryMain,
} from "./pages/MicroServices/MicroServiceComponents/M_ArchitecturePkg";
import SecurityMicroServ from "./pages/MicroServices/MicroServiceComponents/M_SecurityMicroServPkg/SecurityMicroServ";
import { IntroMicroServSecurityMain } from "./pages/MicroServices/MicroServiceComponents/M_SecurityMicroServPkg";
import ProjectWithSecurityMain from "./pages/MicroServices/MicroServiceComponents/M_SecurityMicroServPkg/O2_ProjectWithSecuritySections/ProjectWithSecurityMain";
import { KafkaIntroMain, KafkaMsgOrderingMain } from "./pages/MicroServices/MicroServiceComponents/M_KafkaPkg";
import { RabbitMQIntroMain } from "./pages/MicroServices/MicroServiceComponents/M_RabbitMQPkg";
import { EurekaDiscoveryMain, EurekaMain } from "./pages/MicroServices/MicroServiceComponents/M_EurekaPkg";
import { EnvironmentSetupMain } from "./pages/Postman/PostmanComponents/EnvironmentPkg";

import { CombinedAuditMain, HibernateEnvarsMain, JpaAuditMain, SpringDataEnvarsMain } from "./pages/Spring/SpringComponents/S5_AuditingPkg";
import {
  IsolationMain,
  PropagationMain,
  RollbackMain,
  TransactionalMain,
  TransactionManagementMain,
} from "./pages/Spring/SpringComponents/S10_TransactionManagementPkg";
import { BatchPartitioningMain, BatchProcessMain } from "./pages/Spring/SpringComponents/S11_SpringBatchPkg";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error_page />,
      children: [
        { index: true, element: <Home_page /> },
        {
          path: "c++",
          element: <Cpp_page />,
          children: [
            { index: true, element: <CppHome /> },
            {
              path: "cpp-basics",
              element: <CppBasics />,
              children: [{ path: "functions", element: <FunctionsMain /> }],
            },
          ],
        },
        {
          path: "spring",
          element: <Spring_page />,
          children: [
            { index: true, element: <SpringHome /> },
            {
              path: "ide",
              element: <Ide />,
              children: [
                { path: "sts", element: <StsMain /> },
                { path: "intellij", element: <IntelliJMain /> },
              ],
            },
            {
              path: "application-properties",
              element: <ApplicationProperties />,
              children: [
                { path: "h2", element: <H2Main /> },
                { path: "postgresql", element: <PostgresqlMain /> },
                { path: "mysql", element: <MySqlMain /> },
                { path: "mongodb", element: <MongoDBMain /> },
                { path: "dbeaver", element: <DBeaverMain /> },
                { path: "profiles", element: <ProfileMain /> },
                { path: "db-initialization", element: <DBInitDataSqlMain /> },
                { path: "post-construct-initialization", element: <DBInitPostConstructMain /> },
                { path: "command-line-initialization", element: <DBInitCommandLineRunnerMain /> },
              ],
            },
            {
              path: "logging",
              element: <Logging />,
              children: [
                { path: "LogUtil", element: <LogUtilMain /> },
                { path: "slf4j-logback", element: <Slf4jLogbackMain /> },
                { path: "log-file", element: <LogFileMain /> },
                { path: "logging-props", element: <LoggingPropsMain /> },
              ],
            },
            {
              path: "jpa",
              element: <Jpa />,
              children: [
                { path: "entity-validation", element: <EntityValidationMain /> },
                { path: "mapping-libs", element: <MappingLibsMain /> },
                { path: "jpql", element: <JpqlMain /> },
                { path: "pagination-sorting", element: <PaginationSortingMain /> },
                { path: "many2many-bi-lazy", element: <Many2ManyBiLazyMain /> },
                { path: "one2many-bi-lazy", element: <One2ManyBiLazyMain /> },
                { path: "stored-procedures-functions", element: <StoredProceduresFunctionsMain /> },
                { path: "logging-jpa-hibernate", element: <JpaLoggingMain /> },
              ],
            },
            {
              path: "audit",
              element: <Auditing />,
              children: [
                { path: "jpa-audit", element: <JpaAuditMain /> },
                { path: "hibernate-envars-audit", element: <HibernateEnvarsMain /> },
                { path: "spring-envars-audit", element: <SpringDataEnvarsMain /> },
                { path: "combine-jpa-envars-audit", element: <CombinedAuditMain /> },
              ],
            },
            {
              path: "exception-handling",
              element: <ExceptionHandling />,
              children: [
                { path: "runtime", element: <RuntimeMain /> },
                { path: "config-msg-app-props", element: <ConfigMsgPropertiesMain /> },
                { path: "config-msg-at-controller", element: <ConfigMsgControllerMain /> },
                { path: "custom-error-msg", element: <CustomErrMsgMain /> },
                { path: "custom-error-msg-controller-advice", element: <CustomAtControllerAdviceMain /> },
                { path: "custom-rest-controller-advice", element: <CustomCtrlAdviceProdMain /> },
                { path: "timestamp-error-config", element: <TimestampConfigMain /> },
              ],
            },
            {
              path: "rest",
              element: <Rest />,
              children: [
                // RestMain
                { path: "rest-api", element: <RestMain /> },
                { path: "cors", element: <CorsMain /> },
                { path: "openapi-swagger", element: <OpenApiSwaggerMain /> },
                { path: "sse", element: <SseMain /> },
                { path: "websocket", element: <WebSocketMain /> },
                { path: "stream-data", element: <StreamDataMain /> },
                { path: "stream-large-response", element: <StreamLargeResponseMain /> },
              ],
            },
            {
              path: "security",
              element: <SpringSecurity />,
              children: [
                { path: "spring-security", element: <SpringSecurityMain /> },
                { path: "jwt", element: <JwtMain /> },
                { path: "jwt-v2-6-11", element: <JwtV_2_6_11Main /> },
                { path: "jwt-v3-5-6", element: <JwtV3_5_6Main /> },
                { path: "jwt-refresh-token-v3-5-7", element: <JwtRefreshTokenV3_5_7Main /> },
                { path: "jwt-multiple-config", element: <MultipleJwtSecurityConfigMain /> },
                { path: "oauth2", element: <OAuth2Main /> },
              ],
            },
            { path: "aop", element: <Aop />, children: [{ path: "before-advice", element: <BeforeAdviceMain /> }] },
            {
              path: "transaction-management",
              element: <TransactionManagement />,
              children: [
                { path: "concepts", element: <TransactionManagementMain /> },
                { path: "transactional", element: <TransactionalMain /> },
                { path: "propagation", element: <PropagationMain /> },
                { path: "rollback", element: <RollbackMain /> },
                { path: "isolation", element: <IsolationMain /> },
              ],
            },
            {
              path: "batch",
              element: <SpringBatch />,
              children: [
                { path: "process", element: <BatchProcessMain /> },
                { path: "partitioning", element: <BatchPartitioningMain /> },
              ],
            },
            {
              path: "caching",
              element: <Caching />,
              children: [
                { path: "simple-default", element: <SimpleDefaultMain /> },
                { path: "caffeine", element: <CaffeineMain /> },
                { path: "ehCache", element: <EhCacheMain /> },
                { path: "redis", element: <RedisMain /> },
                { path: "hazelcast", element: <HazelcastMain /> },
                { path: "infinispan", element: <InfinispanMain /> },
              ],
            },
            {
              path: "io",
              element: <SpringIO />,
              children: [
                { path: "file-upload", element: <FileUploadMain /> },
                { path: "Excel", element: <ExcelMain /> },
              ],
            },
            {
              path: "junit",
              element: <JUnit />,
              children: [
                { path: "architecture", element: <JunitArchitectureMain /> },
                // { path: "", element: < /> },
              ],
            },
            {
              path: "jenkins",
              element: <Jenkins />,
              children: [
                { path: "ci-cd", element: <CICDMain /> },
                { path: "server-install", element: <JenkinsServerMain /> },
              ],
            },
            {
              path: "interview-questions",
              element: <InterviewQuestions />,
              children: [
                { path: "stream-records-instantly", element: <StreamRecordsInstantlyMain /> },
                { path: "loop-stream-parallel-stream", element: <LoopStreamParallelStreamMain /> },
                { path: "multithread-block-queue", element: <MultiThreadBlockQueueMain /> },
                { path: "java-in-use", element: <JavaInUseMain /> },
                { path: "java-techie", element: <JavaTechieMain /> },
                { path: "gen-z-career", element: <GenZCareerMain /> },
              ],
            },
          ],
        },
        {
          path: "microservices",
          element: <MicroServices_page />,
          children: [
            { index: true, element: <MicroServiceHome /> },
            {
              path: "architecture",
              element: <Architecture />,
              children: [
                { path: "service-discovery", element: <ServiceDiscoveryMain /> },
                { path: "api-gateway", element: <APIGatewayMain /> },
                { path: "config-management", element: <ConfigManagementMain /> },
                { path: "inter-service-communication", element: <InterServiceCommMain /> },
                { path: "load-balancing", element: <LoadBalancingMain /> },
                { path: "resilience-fault-tolerance", element: <ResilienceFaultToleranceMain /> },
                { path: "distributed-tracing", element: <DistributedTracingMonitoringMain /> },
                { path: "data-management", element: <DataManagementMain /> },
              ],
            },
            { path: "docker", element: <Docker /> },
            {
              path: "eureka",
              element: <Eureka />,
              children: [
                { path: "eureka-server", element: <EurekaMain /> },
                { path: "eureka-discovery", element: <EurekaDiscoveryMain /> },
              ],
            },
            {
              path: "kafka",
              element: <Kafka />,
              children: [
                { path: "intro", element: <KafkaIntroMain /> },
                { path: "message-ordering", element: <KafkaMsgOrderingMain /> },
              ],
            },
            {
              path: "rabbitmq",
              element: <RabbitMQ />,
              children: [{ path: "intro", element: <RabbitMQIntroMain /> }],
            },
            {
              path: "security-microservice",
              element: <SecurityMicroServ />,
              children: [
                { path: "intro", element: <IntroMicroServSecurityMain /> },
                { path: "project", element: <ProjectWithSecurityMain /> },
              ],
            },
          ],
        },
        {
          path: "reactJS",
          element: <ReactJS_page />,
          children: [
            { index: true, element: <ReactJSHome /> },
            { path: "setup", element: <Setup /> },
            { path: "basics", element: <ReactBasics />, children: [{ path: "jsx", element: <JsxMain /> }] },
            { path: "typescript", element: <TypeScript />, children: [{ path: "introduction", element: <IntroMain /> }] },
            { path: "router", element: <ReactRouter />, children: [{ path: "install", element: <RouterMain /> }] },
            { path: "pagination", element: <Pagination /> },
            {
              path: "global-search",
              element: <GlobalSearch />,
              children: [{ path: "memory-search", element: <MemorySearchMain /> }],
            },
          ],
        },
        {
          path: "javascript",
          element: <JavaScript_page />,
          children: [
            { index: true, element: <JavaScriptHome /> },
            { path: "basics", element: <JavaScriptBasics />, children: [{ path: "array", element: <JsArrayMain /> }] },
          ],
        },
        {
          path: "html_css",
          element: <HTML_CSS_page />,
          children: [
            { index: true, element: <HtmlCssHome /> },
            { path: "css-basics", element: <HtmlBasics />, children: [{ path: "add-css", element: <AddCssMain /> }] },
            { path: "html-basics", element: <CssBasics />, children: [{ path: "html-types", element: <HtmlTypesMain /> }] },
          ],
        },
        { path: "fullstack", element: <FullStack_page />, children: [{ index: true, element: <FullStackHome /> }] },
        {
          path: "java",
          element: <Java_page />,
          children: [
            { index: true, element: <JavaHome /> },
            { path: "basics", element: <JavaBasics />, children: [{ path: "array", element: <ArrayMain /> }] },
          ],
        },
        {
          path: "sql",
          element: <Sql_page />,
          children: [
            { index: true, element: <SqlHome /> },
            { path: "basic-concepts", element: <BasicConcepts />, children: [{ path: "key-types", element: <KeyTypesMain /> }] },
            {
              path: "operator-statements",
              element: <OperatorStatements />,
              children: [
                { path: "use", element: <UseMain /> },
                { path: "select", element: <SelectMain /> },
                { path: "alias", element: <AliasMain /> },
                { path: "distinct", element: <DistinctMain /> },
                { path: "where", element: <WhereClauseMain /> },
                { path: "logical-operator", element: <LogicalOperatorsMain /> },
                { path: "in", element: <InMain /> },
                { path: "between", element: <BetweenMain /> },
                { path: "like", element: <LikeMain /> },
                { path: "regex", element: <RegexMain /> },
                { path: "is-null", element: <IsNullMain /> },
                { path: "order-by", element: <OrderByMain /> },
                { path: "limit", element: <LimitMain /> },
              ],
            },
          ],
        },
        {
          path: "python",
          element: <Python_page />,
          children: [
            { index: true, element: <PythonHome /> },
            { path: "vscode", element: <VsCodePythonMain /> },
            { path: "python-basics", element: <PythonBasics />, children: [{ path: "data-types", element: <DataTypesMain /> }] },
          ],
        },
        {
          path: "devops",
          element: <DevOps_page />,
          children: [
            { index: true, element: <DevOpsHome /> },
            { path: "react-on-spring", element: <ReactOnSpringMain /> },
            { path: "netlify", element: <DeployNetlifyMain /> },
            { path: "render", element: <DeployRenderMain /> },
            { path: "tomcat", element: <Tomcat />, children: [{ path: "react-on-tomcat", element: <ReactOnTomcatMain /> }] },
            {
              path: "linux-server",
              element: <Linux_Server />,
              children: [
                { path: "create-server", element: <CreateServerMain /> },
                { path: "connect-with-ssh", element: <ConnectToServerSshMain /> },
                { path: "connect-with-filezilla", element: <FileZillaMain /> },
                { path: "setup-server", element: <SetupServerMain /> },
                { path: "jdk-install", element: <JdkInstallMain /> },
                { path: "tomcat-install", element: <TomcatInstallMain /> },
                { path: "mysql-install", element: <MySqlnstallMain /> },
                { path: "jenkins-install", element: <JenkinsMain /> },
              ],
            },
          ],
        },
        { path: "git", element: <Git_page />, children: [{ index: true, element: <GitHome /> }] },
        { path: "linux", element: <Linux_page />, children: [{ index: true, element: <LinuxHome /> }] },
        { path: "batch", element: <Batch_page />, children: [{ index: true, element: <BatchHome /> }] },
        {
          path: "postman",
          element: <Postman_page />,
          children: [
            { index: true, element: <PostmanHome /> },
            { path: "collection", element: <CollectionMain /> },
            {
              path: "environment",
              element: <Environment />,
              children: [
                { path: "setup", element: <EnvironmentSetupMain /> },
                // { path: "environment-setup", element: <EnvironmentSetupMain /> },
              ],
            },
            { path: "multiple-http-requests", element: <MultipleHttpRequestMain /> },
          ],
        },
        {
          path: "windows",
          element: <Windows_page />,
          children: [
            { index: true, element: <WindowsHome /> },
            { path: "port-check", element: <PortCheckMain /> },
          ],
        },
        {
          path: "page_creation",
          element: <Page_Creation_page />,
          children: [
            { index: true, element: <PageCreationHome /> },
            {
              path: "specification-document",
              element: <SpecificationDocument />,
              children: [{ path: "create-steps", element: <CreateStepMain /> }],
            },
            { path: "app-tree", element: <AppTreeComponent /> },
            { path: "component-tree", element: <ComponentTreeComponent /> },
            { path: "web-page", element: <WebPageComponent /> },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return (
    <div>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </div>
  );
}

export default App;
