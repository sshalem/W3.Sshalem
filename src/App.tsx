import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import {
  Cpp_page,
  DevOps_page,
  Error_page,
  FullStack_page,
  Guitar_page,
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
  ReadFromPropertiesMain,
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

import { CppHome, CppBasics, FunctionsMain, TestMain } from "./pages/Cpp/CppComponents";

import {
  GlobalSearch,
  IntroMain,
  JsxMain,
  MemorySearchMain,
  Pagination,
  ReactBasics,
  ReactJSHome,
  ReactJSInterviewQuestions,
  ReactRouter,
  RouterMain,
  SetupMain,
  TypeScript,
} from "./pages/ReactJS/ReactJSComponents";
import { DataStructures, DesignPatternStructural, JavaBasics, JavaHome } from "./pages/Java/JavaComponents";
import { JavaScriptBasics, JavaScriptHome, JsArrayMain } from "./pages/JavaScript/JavaScriptComponents";
import { AddCssMain, CssBasics, HtmlBasics, HtmlCssHome, HtmlTypesMain } from "./pages/HTML_CSS/HtmlCssComponents";
import { FullStackHome } from "./pages/FullStack/FullStackComponents";
import { BasicConcepts, KeyTypesMain, SqlHome } from "./pages/Sql/SqlComponents";
import { Django, FastApi, PythonBasics, PythonGeneral, PythonHome, PythonIde } from "./pages/Python/PythonComponents";
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
  GitMain,
  NginxInstallMain,
  DeployLinuxMain,
  Nginx,
  DeployJarNginxMain,
  DeployReactNginxMain,
  MavenCreateJarMain,
} from "./pages/DevOps/DevOpsComponents";

import { LinuxHome } from "./pages/Linux/LinuxComponents";
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
  JwtRefreshTokenInDBHttpOnlyMain,
  JwtRefreshTokenInDBMain,
  JwtRefreshTokenStatelessMain,
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
import {
  AbstractFactoryMain,
  BuilderMain,
  FactoryMain,
  PrototypeMain,
  SingletonMain,
} from "./pages/Java/JavaComponents/J3_DesignPatternCreationalPkg";
import DesignPatternCreational from "./pages/Java/JavaComponents/J3_DesignPatternCreationalPkg/DesignPatternCreational";
import JavaInterviewQuestions from "./pages/Java/JavaComponents/J9_JavaInterviewQuestionsPkg/JavaInterviewQuestions";
import {
  ArrayMain,
  GcHeapStackMain,
  InputOutputMain,
  Java8Main,
  JavaCollectionsMain,
  MethodsMain,
  MultiThreadingMain,
  OopMain,
  StringMain,
} from "./pages/Java/JavaComponents/J1_JavaBasicsPkg";
import { CollectionsQuestionsMain } from "./pages/Java/JavaComponents/J9_JavaInterviewQuestionsPkg";
import DesignPatternBehavioral from "./pages/Java/JavaComponents/J5_DesignPatternBehavioralPkg/DesignPatternBehavioral";
import { SuperupMain } from "./pages/ReactJS/ReactJSComponents/R7_ReactJSInterviewQuestionsPkg";
import { AntonGlushkinMain, Flamenco, GipsyKings, GuitarHome } from "./pages/Guitar/GuitarComponents";
import { AllegriaMain, LoveAndLiberteMain } from "./pages/Guitar/GuitarComponents/G2_GipsyKingsPkg";
import { FlamencoBasicsMain, RumbaMain, SoleaMain } from "./pages/Guitar/GuitarComponents/G3_FlamencoPkg";
import GeneralMain from "./pages/Guitar/GuitarComponents/G1_GeneralPkg/GeneralMain";
import ArraysMain from "./pages/Java/JavaComponents/J2_DataStructuresPkg/A_ArraysSections/ArraysMain";
import { ConcurrentDataMain, ListMain, MapMain, QueueMain, SetMain } from "./pages/Java/JavaComponents/J2_DataStructuresPkg";
import JavaFundamentalMain from "./pages/Java/JavaComponents/J1_JavaBasicsPkg/A_BasicsSections/JavaFundamentalMain";
import GenericSongsMain from "./pages/Guitar/GuitarComponents/G2_GipsyKingsPkg/X_GenericSonsSections/GenericSongsMain";
import Batch from "./pages/Windows/WindowsComponents/BatchPkg/Batch";
import AsciiMain from "./pages/Windows/WindowsComponents/BatchPkg/A_AsciiSections/AsciiMain";

import {
  DataTypesMain,
  FileHandlingMain,
  IfElseMain,
  LoopsMain,
  ModulesPackagingMain,
  OperatorsMain,
  PythonExceptionsMain,
  PythonFunctionsMain,
  PythonOopMain,
  VenvMain,
} from "./pages/Python/PythonComponents/P2_PythonBasicsPkg";
import { PyCharmMain, VsCodeMain } from "./pages/Python/PythonComponents/P0_PythonIdePkg";
import { CreateProjectMain, PythonGitMain } from "./pages/Python/PythonComponents/P1_PythonGeneralPkg";
import { CreateDjangoProjectMain } from "./pages/Python/PythonComponents/P5_DjangoPkg";
import SetupFastApiProjectMain from "./pages/Python/PythonComponents/P4_FastApiPkg/A__SetupFastApiProjectSections/SetupFastApiProjectMain";
import {
  AdvancedTopicsMain,
  ApplicationStructureAndArchitectureMain,
  BackgroundTasksAndAsyncMain,
  DataBaseIntegrationMain,
  DependencyInjectionMain,
  DeploymentAndDevOpsMain,
  MiddlewareSectionsMain,
  PerformanceAndConcurrencyMain,
  RequestDataAmdValidationSectionsMain,
  ResponseHandlingSectionsMain,
  SecurityMain,
  TestingMain,
} from "./pages/Python/PythonComponents/P4_FastApiPkg";
import { PythonDictionaryMain, PythonListMain, PythonSetMain, PythonTupleMain } from "./pages/Python/PythonComponents/P3_DataStructuresPkg";
import FastAPI_page from "./pages/FastAPI/FastAPI_page";
import {
  FastAPIAuditing,
  FastAPICaching,
  FastApiConfigurationProfilesEnv,
  FastAPIException,
  FastAPIHome,
  FastAPIIde,
  FastAPILogging,
  FastAPIRouter,
  FastAPISecurity,
  FastAPISQLAlchemy,
} from "./pages/FastAPI/FastAPIComponents";
import {
  GetRequestMain,
  MainPyMain,
  PostRequestMain,
  PydanticMain,
  RequestResponseMain,
  SetupFastApiMain,
} from "./pages/FastAPI/FastAPIComponents/F3_FastAPIRouterPkg";
import DockerMain from "./pages/DevOps/DevOpsComponents/D_DockerPkg/DockerMain";
import { ExceptionsMain, GlobalExceptionsMain } from "./pages/FastAPI/FastAPIComponents/F4_FastAPIExceptionPkg";
import { FolderStructureMain, SqlAlchemyConfigMain } from "./pages/FastAPI/FastAPIComponents/F5_FastAPISQLAlchemyPkg";
import { ConfigurationMain, EnvMain, ProfilesMain } from "./pages/FastAPI/FastAPIComponents/F1_FastAPIConfigurationProfilesEnvPkg";
import { DefaultLoggingMain, LoggingConfigMain, LoggingConfINIMain } from "./pages/FastAPI/FastAPIComponents/F2_FastAPILoggingPkg";

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
              children: [
                { index: true, element: <FunctionsMain /> },
                { path: "functions", element: <FunctionsMain /> },
                { path: "test", element: <TestMain /> },
              ],
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
                { path: "read-from-properties", element: <ReadFromPropertiesMain /> },
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
                { path: "jwt-refresh-token-stateless", element: <JwtRefreshTokenStatelessMain /> },
                { path: "jwt-refresh-token-in-DB", element: <JwtRefreshTokenInDBMain /> },
                { path: "jwt-refresh-token-httpOnly", element: <JwtRefreshTokenInDBHttpOnlyMain /> },
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
            { path: "setup", element: <SetupMain /> },
            {
              path: "basics",
              element: <ReactBasics />,
              children: [
                { path: "jsx", element: <JsxMain /> },
                { path: "jsx", element: <JsxMain /> },
              ],
            },
            {
              path: "typescript",
              element: <TypeScript />,
              children: [
                { path: "introduction", element: <IntroMain /> },
                { path: "introduction", element: <IntroMain /> },
              ],
            },
            {
              path: "router",
              element: <ReactRouter />,
              children: [
                { path: "install", element: <RouterMain /> },
                { path: "install", element: <RouterMain /> },
              ],
            },
            { path: "pagination", element: <Pagination /> },
            {
              path: "global-search",
              element: <GlobalSearch />,
              children: [
                { path: "memory-search", element: <MemorySearchMain /> },
                { path: "memory-search", element: <MemorySearchMain /> },
              ],
            },
            {
              path: "reactjs-interview-questions",
              element: <ReactJSInterviewQuestions />,
              children: [{ path: "superup", element: <SuperupMain /> }],
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
            {
              path: "basics",
              element: <JavaBasics />,
              children: [
                { path: "java-fundamental", element: <JavaFundamentalMain /> },
                { path: "array", element: <ArrayMain /> },
                { path: "string", element: <StringMain /> },
                { path: "methods", element: <MethodsMain /> },
                { path: "oop", element: <OopMain /> },
                { path: "collections", element: <JavaCollectionsMain /> },
                { path: "io", element: <InputOutputMain /> },
                { path: "multithreading", element: <MultiThreadingMain /> },
                { path: "gc-heap-stack", element: <GcHeapStackMain /> },
                { path: "java8", element: <Java8Main /> },
              ],
            },
            {
              path: "data-structures",
              element: <DataStructures />,
              children: [
                { path: "arrays", element: <ArraysMain /> },
                { path: "list", element: <ListMain /> },
                { path: "set", element: <SetMain /> },
                { path: "map", element: <MapMain /> },
                { path: "queue", element: <QueueMain /> },
                { path: "concurent", element: <ConcurrentDataMain /> },
              ],
            },
            {
              path: "design-patterns-creational",
              element: <DesignPatternCreational />,
              children: [
                { path: "singleton", element: <SingletonMain /> },
                { path: "prototype", element: <PrototypeMain /> },
                { path: "builder", element: <BuilderMain /> },
                { path: "factory", element: <FactoryMain /> },
                { path: "abstract-factory", element: <AbstractFactoryMain /> },
              ],
            },
            {
              path: "design-patterns-structural",
              element: <DesignPatternStructural />,
              children: [
                { path: "array", element: <ArrayMain /> },
                { path: "array", element: <ArrayMain /> },
              ],
            },
            {
              path: "design-patterns-behavioral",
              element: <DesignPatternBehavioral />,
              children: [
                { path: "array", element: <ArrayMain /> },
                { path: "array", element: <ArrayMain /> },
              ],
            },
            {
              path: "java-interview-questions",
              element: <JavaInterviewQuestions />,
              children: [{ path: "collections", element: <CollectionsQuestionsMain /> }],
            },
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
          path: "fastapi",
          element: <FastAPI_page />,
          children: [
            { index: true, element: <FastAPIHome /> },
            { path: "ide", element: <FastAPIIde /> },
            {
              path: "config-env-profiles",
              element: <FastApiConfigurationProfilesEnv />,
              children: [
                { path: "config", element: <ConfigurationMain /> },
                { path: "env", element: <EnvMain /> },
                { path: "profiles", element: <ProfilesMain /> },
              ],
            },
            {
              path: "logging",
              element: <FastAPILogging />,
              children: [
                { path: "default-logging", element: <DefaultLoggingMain /> },
                { path: "logging-config", element: <LoggingConfigMain /> },
                { path: "logging-conf", element: <LoggingConfINIMain /> },
              ],
            },
            {
              path: "router",
              element: <FastAPIRouter />,
              children: [
                { path: "main-py", element: <MainPyMain /> },
                { path: "setup-fastapi", element: <SetupFastApiMain /> },
                { path: "pydantic", element: <PydanticMain /> },
                { path: "request-response", element: <RequestResponseMain /> },
                { path: "get-request", element: <GetRequestMain /> },
                { path: "post-request", element: <PostRequestMain /> },
              ],
            },
            {
              path: "exceptions",
              element: <FastAPIException />,
              children: [
                { path: "default", element: <ExceptionsMain /> },
                { path: "global-exception", element: <GlobalExceptionsMain /> },
              ],
            },
            {
              path: "sqlalchemy",
              element: <FastAPISQLAlchemy />,
              children: [
                { path: "folder-structure", element: <FolderStructureMain /> },
                { path: "sqlalchemy-config", element: <SqlAlchemyConfigMain /> },
                // folder-structure
              ],
            },
            { path: "auditing", element: <FastAPIAuditing /> },
            { path: "security", element: <FastAPISecurity /> },
            { path: "caching", element: <FastAPICaching /> },
          ],
        },
        {
          path: "python",
          element: <Python_page />,
          children: [
            { index: true, element: <PythonHome /> },
            {
              path: "general",
              element: <PythonGeneral />,
              children: [
                { path: "create-project", element: <CreateProjectMain /> },
                { path: "python-git", element: <PythonGitMain /> },
              ],
            },
            {
              path: "ide",
              element: <PythonIde />,
              children: [
                { path: "pycharm", element: <PyCharmMain /> },
                { path: "vscode", element: <VsCodeMain /> },
              ],
            },
            {
              path: "python-basics",
              element: <PythonBasics />,
              children: [
                { path: "data-types", element: <DataTypesMain /> },
                { path: "operators", element: <OperatorsMain /> },
                { path: "control-flow", element: <IfElseMain /> },
                { path: "loops", element: <LoopsMain /> },
                { path: "functions", element: <PythonFunctionsMain /> },
                { path: "exceptions", element: <PythonExceptionsMain /> },
                { path: "modules-packaging", element: <ModulesPackagingMain /> },
                { path: "file-handling", element: <FileHandlingMain /> },
                { path: "oop", element: <PythonOopMain /> },
                { path: "venv", element: <VenvMain /> },
              ],
            },
            {
              path: "data-structure",
              element: <PythonIde />,
              children: [
                { path: "list", element: <PythonListMain /> },
                { path: "tuple", element: <PythonTupleMain /> },
                { path: "set", element: <PythonSetMain /> },
                { path: "dictionary", element: <PythonDictionaryMain /> },
              ],
            },
            {
              path: "fastapi",
              element: <FastApi />,
              children: [
                { path: "setup-fastapi", element: <SetupFastApiProjectMain /> },
                { path: "request-and-validation", element: <RequestDataAmdValidationSectionsMain /> },
                { path: "response-handling", element: <ResponseHandlingSectionsMain /> },
                { path: "dependency-injection", element: <DependencyInjectionMain /> },
                { path: "middleware", element: <MiddlewareSectionsMain /> },
                { path: "security", element: <SecurityMain /> },
                { path: "background-tasks-and-async", element: <BackgroundTasksAndAsyncMain /> },
                { path: "database-integration", element: <DataBaseIntegrationMain /> },
                { path: "application-structure-architecture", element: <ApplicationStructureAndArchitectureMain /> },
                { path: "testing", element: <TestingMain /> },
                { path: "performance-concurrency", element: <PerformanceAndConcurrencyMain /> },
                { path: "deployment-dev-ops", element: <DeploymentAndDevOpsMain /> },
                { path: "advanced-topics", element: <AdvancedTopicsMain /> },
              ],
            },
            {
              path: "django",
              element: <Django />,
              children: [
                { path: "create-django", element: <CreateDjangoProjectMain /> },
                // { path: "vscode", element: <VsCodeMain /> },
              ],
            },
          ],
        },
        {
          path: "devops",
          element: <DevOps_page />,
          children: [
            { index: true, element: <DevOpsHome /> },
            { path: "git", element: <GitMain /> },
            { path: "react-on-spring", element: <ReactOnSpringMain /> },
            { path: "docker", element: <DockerMain /> },
            { path: "netlify", element: <DeployNetlifyMain /> },
            { path: "render", element: <DeployRenderMain /> },
            {
              path: "nginx",
              element: <Nginx />,
              children: [
                { path: "nginx-install", element: <NginxInstallMain /> },
                { path: "maven-create-jar", element: <MavenCreateJarMain /> },
                { path: "deploy-jar", element: <DeployJarNginxMain /> },
                { path: "deploy-react", element: <DeployReactNginxMain /> },
              ],
            },
            {
              path: "tomcat",
              element: <Tomcat />,
              children: [
                { path: "tomcat-install", element: <TomcatInstallMain /> },
                { path: "react-on-tomcat", element: <ReactOnTomcatMain /> },
              ],
            },
            {
              path: "linux-server",
              element: <Linux_Server />,
              children: [
                { path: "create-server", element: <CreateServerMain /> },
                { path: "connect-with-ssh", element: <ConnectToServerSshMain /> },
                { path: "connect-with-filezilla", element: <FileZillaMain /> },
                { path: "setup-server", element: <SetupServerMain /> },
                { path: "jdk-install", element: <JdkInstallMain /> },
                { path: "deploy", element: <DeployLinuxMain /> },
                { path: "mysql-install", element: <MySqlnstallMain /> },
                { path: "jenkins-install", element: <JenkinsMain /> },
              ],
            },
          ],
        },
        {
          path: "guitar",
          element: <Guitar_page />,
          children: [
            { index: true, element: <GuitarHome /> },
            {
              path: "general",
              element: <GeneralMain />,
            },
            {
              path: "gipsy-kings",
              element: <GipsyKings />,
              children: [
                { path: "allegria", element: <AllegriaMain /> },
                { path: "love-and-liberte", element: <LoveAndLiberteMain /> },
                { path: "generic", element: <GenericSongsMain /> },
              ],
            },
            {
              path: "flamenco",
              element: <Flamenco />,
              children: [
                // flamenco-basics
                { path: "flamenco-basics", element: <FlamencoBasicsMain /> },
                { path: "solea", element: <SoleaMain /> },
                { path: "rumba", element: <RumbaMain /> },
              ],
            },
            {
              path: "anton-glushkin",
              element: <AntonGlushkinMain />,
            },
          ],
        },
        { path: "linux", element: <Linux_page />, children: [{ index: true, element: <LinuxHome /> }] },
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
            { path: "batch", element: <Batch />, children: [{ path: "ascii", element: <AsciiMain /> }] },
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
