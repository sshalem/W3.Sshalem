import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import * as Pages from "./pages";
import * as SpringComponents from "./pages/Spring/SpringComponents";
import * as FastAPIComponents from "./pages/FastAPI/FastAPIComponents";

import { ArchitectureSpringBoot3, Docker, Kafka, MicroServiceHome, RabbitMQ } from "./pages/MicroServices/MicroServiceComponents";

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
  Axios,
  GlobalSearch,
  IntroMain,
  JsxMain,
  MemorySearchMain,
  Pagination,
  PropsMain,
  ReactBasics,
  ReactJSHome,
  ReactJSInterviewQuestions,
  ReactOnSpringMain,
  ReactRouter,
  InstallRouterMain,
  SetupMain,
  TypeScript,
  CreateRouterMain,
  ProjectSetup,
  CreateViteMain,
  FaviconMain,
  ReactIconsMain,
  TailwindcssMain,
  StorageMain,
  ContextMain,
} from "./pages/ReactJS/ReactJSComponents";

import { DataStructures, DesignPatternStructural, JavaBasics, JavaHome } from "./pages/Java/JavaComponents";

import {
  FetchApi,
  FetchApiMain,
  JavaScriptBasics,
  JavaScriptHome,
  JsArrayMain,
  PromiseAsyncAwaitMain,
} from "./pages/JavaScript/JavaScriptComponents";

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
import { EnvironmentSetupMain } from "./pages/Postman/PostmanComponents/EnvironmentPkg";

import { PortCheckMain, WindowsHome } from "./pages/Windows/WindowsComponents";

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
  APIGateway_2_7_18_Main,
  ArchitectureOptionsMain,
  CustomerOrderMain,
  Eureka_2_7_18_Main,
  Kafka_2_7_18_Main,
  Resilliance4J_2_7_18_Main,
  Security_2_7_18_Main,
  ServiceDiscoveryMain,
  SpringCloudConfig_2_7_18_Main,
  TracingZipkinSleuth_2_7_18_Main,
} from "./pages/MicroServices/MicroServiceComponents/M1_ArchitectureSpringBoot2Pkg";

import SecurityMicroServ from "./pages/MicroServices/MicroServiceComponents/M5_SecurityMicroServPkg/SecurityMicroServ";

import { IntroMicroServSecurityMain } from "./pages/MicroServices/MicroServiceComponents/M5_SecurityMicroServPkg";

import ProjectWithSecurityMain from "./pages/MicroServices/MicroServiceComponents/M5_SecurityMicroServPkg/O2_ProjectWithSecuritySections/ProjectWithSecurityMain";

import { KafkaIntroMain, KafkaMsgOrderingMain } from "./pages/MicroServices/MicroServiceComponents/M3_KafkaPkg";

import { RabbitMQIntroMain } from "./pages/MicroServices/MicroServiceComponents/M4_RabbitMQPkg";

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
  JavaObjectClassMain,
  MultiThreadingMain,
  OopMain,
  RandomMain,
  EnumMain,
  JavaExceptionsMain,
  JavaGenericsMain,
  JavaMemoryMonitoringMain,
} from "./pages/Java/JavaComponents/J1_JavaBasicsPkg";

import { CollectionsQuestionsMain, IO_QuestionsMain, MemoryMonitoringQuestionsMain } from "./pages/Java/JavaComponents/J9_JavaInterviewQuestionsPkg";
import DesignPatternBehavioral from "./pages/Java/JavaComponents/J5_DesignPatternBehavioralPkg/DesignPatternBehavioral";

import { SuperupMain } from "./pages/ReactJS/ReactJSComponents/R9_ReactJSInterviewQuestionsPkg";

import { AntonGlushkinMain, Flamenco, GipsyKings, GuitarHome } from "./pages/Guitar/GuitarComponents";

import { AllegriaMain, LoveAndLiberteMain } from "./pages/Guitar/GuitarComponents/G2_GipsyKingsPkg";

import { FlamencoBasicsMain, RumbaMain, SoleaMain } from "./pages/Guitar/GuitarComponents/G3_FlamencoPkg";

import GeneralMain from "./pages/Guitar/GuitarComponents/G1_GeneralPkg/GeneralMain";

import ChordsMain from "./pages/Guitar/GuitarComponents/G0_ChordsPkg/ChordsMain";

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
  SecurityMain,
  TestingMain,
} from "./pages/Python/PythonComponents/P4_FastApiPkg";

import { PythonDictionaryMain, PythonListMain, PythonSetMain, PythonTupleMain } from "./pages/Python/PythonComponents/P3_DataStructuresPkg";

import DockerMain from "./pages/DevOps/DevOpsComponents/D_DockerPkg/DockerMain";

import {
  AdapterMain,
  BridgeMain,
  CompositeMain,
  DecoratorMain,
  FacadeMain,
  FlyweightMain,
  ProxyMain,
} from "./pages/Java/JavaComponents/J4_DesignPatternStructuralPkg";

import {
  ChainOfResponsibilityMain,
  CommandMain,
  IteratorMain,
  MediatorMain,
  MementoMain,
  ObserverMain,
  StateMain,
  StrategyMain,
  TemplateMethodMain,
  VisitorMain,
} from "./pages/Java/JavaComponents/J5_DesignPatternBehavioralPkg";

import ComparableComparatorMain from "./pages/Java/JavaComponents/J1_JavaBasicsPkg/D_ComparableComparatorSections/ComparableComparatorMain";

import ArchitectureSpringBoot2 from "./pages/MicroServices/MicroServiceComponents/M1_ArchitectureSpringBoot2Pkg/ArchitectureSpringBoot2";

import { Architecture3OptionsMain } from "./pages/MicroServices/MicroServiceComponents/M2_ArchitectureSpringBoot3Pkg";

import ELK_2_7_18_Main from "./pages/MicroServices/MicroServiceComponents/M1_ArchitectureSpringBoot2Pkg/O5_ELK_2_7_18_Sections/ELK_2_7_18_Main";

import { AxiosInstallMain, AxiosInstanceMain } from "./pages/ReactJS/ReactJSComponents/R6_AxiosPkg";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Pages.Error_page />,
      children: [
        { index: true, element: <Pages.Home_page /> },
        {
          path: "java",
          element: <Pages.Java_page />,
          children: [
            { index: true, element: <JavaHome /> },
            {
              path: "basics",
              element: <JavaBasics />,
              children: [
                { path: "java-fundamental", element: <JavaFundamentalMain /> },
                { path: "array", element: <ArrayMain /> },
                { path: "enum", element: <EnumMain /> },
                { path: "comparable-comparator", element: <ComparableComparatorMain /> },
                { path: "exceptions", element: <JavaExceptionsMain /> },
                { path: "object-class", element: <JavaObjectClassMain /> },
                { path: "random", element: <RandomMain /> },
                { path: "oop", element: <OopMain /> },
                { path: "generics", element: <JavaGenericsMain /> },
                { path: "collections", element: <JavaCollectionsMain /> },
                { path: "io", element: <InputOutputMain /> },
                { path: "multithreading", element: <MultiThreadingMain /> },
                { path: "gc-heap-stack", element: <GcHeapStackMain /> },
                { path: "java8", element: <Java8Main /> },
                { path: "memory-monitoring", element: <JavaMemoryMonitoringMain /> },
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
                { path: "adapter", element: <AdapterMain /> },
                { path: "decorator", element: <DecoratorMain /> },
                { path: "facade", element: <FacadeMain /> },
                { path: "composite", element: <CompositeMain /> },
                { path: "proxy", element: <ProxyMain /> },
                { path: "bridge", element: <BridgeMain /> },
                { path: "flyweight", element: <FlyweightMain /> },
              ],
            },
            {
              path: "design-patterns-behavioral",
              element: <DesignPatternBehavioral />,
              children: [
                { path: "observer", element: <ObserverMain /> },
                { path: "strategy", element: <StrategyMain /> },
                { path: "template-method", element: <TemplateMethodMain /> },
                { path: "command", element: <CommandMain /> },
                { path: "state", element: <StateMain /> },
                { path: "chain-of-responsibility", element: <ChainOfResponsibilityMain /> },
                { path: "iterator", element: <IteratorMain /> },
                { path: "mediator", element: <MediatorMain /> },
                { path: "memento", element: <MementoMain /> },
                { path: "visitor", element: <VisitorMain /> },
              ],
            },
            {
              path: "java-interview-questions",
              element: <JavaInterviewQuestions />,
              children: [
                { path: "collections-questions", element: <CollectionsQuestionsMain /> },
                { path: "io-questions", element: <IO_QuestionsMain /> },
                { path: "memory-monitoring-questions", element: <MemoryMonitoringQuestionsMain /> },
              ],
            },
          ],
        },
        {
          path: "spring",
          element: <Pages.Spring_page />,
          children: [
            { index: true, element: <SpringComponents.SpringHome /> },
            {
              path: "ide",
              element: <SpringComponents.Ide />,
              children: [
                { path: "sts", element: <SpringComponents.StsMain /> },
                { path: "intellij", element: <SpringComponents.IntelliJMain /> },
              ],
            },
            {
              path: "application-properties",
              element: <SpringComponents.ApplicationProperties />,
              children: [
                { path: "h2", element: <SpringComponents.H2Main /> },
                { path: "postgresql", element: <SpringComponents.PostgresqlMain /> },
                { path: "mysql", element: <SpringComponents.MySqlMain /> },
                { path: "mongodb", element: <SpringComponents.MongoDBMain /> },
                { path: "dbeaver", element: <SpringComponents.DBeaverMain /> },
                { path: "profiles", element: <SpringComponents.ProfileMain /> },
                { path: "db-initialization", element: <SpringComponents.DBInitDataSqlMain /> },
                { path: "post-construct-initialization", element: <SpringComponents.DBInitPostConstructMain /> },
                { path: "command-line-initialization", element: <SpringComponents.DBInitCommandLineRunnerMain /> },
                { path: "read-from-properties", element: <SpringComponents.ReadFromPropertiesMain /> },
              ],
            },
            {
              path: "logging",
              element: <SpringComponents.Logging />,
              children: [
                { path: "LogUtil", element: <SpringComponents.LogUtilMain /> },
                { path: "slf4j-logback", element: <SpringComponents.Slf4jLogbackMain /> },
                { path: "log-file", element: <SpringComponents.LogFileMain /> },
                { path: "logging-props", element: <SpringComponents.LoggingPropsMain /> },
              ],
            },
            {
              path: "jpa",
              element: <SpringComponents.Jpa />,
              children: [
                { path: "equals-hashcode", element: <SpringComponents.JpaEntityHashEqualsMain /> },
                { path: "entity-validation", element: <SpringComponents.EntityValidationMain /> },
                { path: "mapping-libs", element: <SpringComponents.MappingLibsMain /> },
                { path: "jpql", element: <SpringComponents.JpqlMain /> },
                { path: "pagination-sorting", element: <SpringComponents.PaginationSortingMain /> },
                { path: "many2many-bi-lazy", element: <SpringComponents.Many2ManyBiLazyMain /> },
                { path: "one2many-bi-lazy", element: <SpringComponents.One2ManyBiLazyMain /> },
                { path: "stored-procedures-functions", element: <SpringComponents.StoredProceduresFunctionsMain /> },
                { path: "logging-jpa-hibernate", element: <SpringComponents.JpaLoggingMain /> },
              ],
            },
            {
              path: "audit",
              element: <SpringComponents.Auditing />,
              children: [
                { path: "jpa-audit", element: <SpringComponents.JpaAuditMain /> },
                { path: "hibernate-envars-audit", element: <SpringComponents.HibernateEnvarsMain /> },
                { path: "spring-envars-audit", element: <SpringComponents.SpringDataEnvarsMain /> },
                { path: "combine-jpa-envars-audit", element: <SpringComponents.CombinedAuditMain /> },
              ],
            },
            {
              path: "exception-handling",
              element: <SpringComponents.ExceptionHandling />,
              children: [
                { path: "runtime", element: <SpringComponents.RuntimeMain /> },
                { path: "config-msg-app-props", element: <SpringComponents.ConfigMsgPropertiesMain /> },
                { path: "config-msg-at-controller", element: <SpringComponents.ConfigMsgControllerMain /> },
                { path: "custom-error-msg", element: <SpringComponents.CustomErrMsgMain /> },
                { path: "custom-error-msg-controller-advice", element: <SpringComponents.CustomAtControllerAdviceMain /> },
                { path: "custom-rest-controller-advice", element: <SpringComponents.CustomCtrlAdviceProdMain /> },
                { path: "timestamp-error-config", element: <SpringComponents.TimestampConfigMain /> },
              ],
            },
            {
              path: "rest",
              element: <SpringComponents.Rest />,
              children: [
                // RestMain
                { path: "rest-api", element: <SpringComponents.RestMain /> },
                { path: "json-jackson", element: <SpringComponents.JsonJacksonMain /> },
                { path: "cors", element: <SpringComponents.CorsMain /> },
                { path: "openapi-swagger", element: <SpringComponents.OpenApiSwaggerMain /> },
                { path: "sse", element: <SpringComponents.SseMain /> },
                { path: "websocket", element: <SpringComponents.WebSocketMain /> },
                { path: "stream-data", element: <SpringComponents.StreamDataMain /> },
                { path: "stream-large-response", element: <SpringComponents.StreamLargeResponseMain /> },
              ],
            },
            {
              path: "security",
              element: <SpringComponents.SpringSecurity />,
              children: [
                { path: "spring-security", element: <SpringComponents.SpringSecurityMain /> },
                { path: "jwt", element: <SpringComponents.JwtMain /> },
                { path: "jwt-v2-6-11", element: <SpringComponents.JwtV_2_6_11Main /> },
                { path: "jwt-v3-5-6", element: <SpringComponents.JwtV3_5_6Main /> },
                { path: "jwt-refresh-token-stateless", element: <SpringComponents.JwtRefreshTokenStatelessMain /> },
                { path: "jwt-refresh-token-in-DB", element: <SpringComponents.JwtRefreshTokenInDBMain /> },
                { path: "jwt-refresh-token-httpOnly", element: <SpringComponents.JwtRefreshTokenInDBHttpOnlyMain /> },
                { path: "jwt-multiple-config", element: <SpringComponents.MultipleJwtSecurityConfigMain /> },
                { path: "oauth2", element: <SpringComponents.OAuth2Main /> },
              ],
            },
            { path: "aop", element: <SpringComponents.Aop />, children: [{ path: "before-advice", element: <SpringComponents.BeforeAdviceMain /> }] },
            {
              path: "transaction-management",
              element: <SpringComponents.TransactionManagement />,
              children: [
                { path: "concepts", element: <SpringComponents.TransactionManagementMain /> },
                { path: "transactional", element: <SpringComponents.TransactionalMain /> },
                { path: "propagation", element: <SpringComponents.PropagationMain /> },
                { path: "rollback", element: <SpringComponents.RollbackMain /> },
                { path: "isolation", element: <SpringComponents.IsolationMain /> },
              ],
            },
            {
              path: "batch",
              element: <SpringComponents.SpringBatch />,
              children: [
                { path: "process", element: <SpringComponents.BatchProcessMain /> },
                { path: "partitioning", element: <SpringComponents.BatchPartitioningMain /> },
              ],
            },
            {
              path: "caching",
              element: <SpringComponents.Caching />,
              children: [
                { path: "simple-default", element: <SpringComponents.SimpleDefaultMain /> },
                { path: "caffeine", element: <SpringComponents.CaffeineMain /> },
                { path: "ehCache", element: <SpringComponents.EhCacheMain /> },
                { path: "redis", element: <SpringComponents.RedisMain /> },
                { path: "hazelcast", element: <SpringComponents.HazelcastMain /> },
                { path: "infinispan", element: <SpringComponents.InfinispanMain /> },
              ],
            },
            {
              path: "io",
              element: <SpringComponents.SpringIO />,
              children: [
                { path: "file-upload", element: <SpringComponents.FileUploadMain /> },
                { path: "Excel", element: <SpringComponents.ExcelMain /> },
              ],
            },
            {
              path: "junit",
              element: <SpringComponents.JUnit />,
              children: [
                { path: "architecture", element: <SpringComponents.JunitArchitectureMain /> },
                // { path: "", element: < /> },
              ],
            },
            {
              path: "jenkins",
              element: <SpringComponents.Jenkins />,
              children: [
                { path: "ci-cd", element: <SpringComponents.CICDMain /> },
                { path: "server-install", element: <SpringComponents.JenkinsServerMain /> },
              ],
            },
            {
              path: "interview-questions",
              element: <SpringComponents.InterviewQuestions />,
              children: [
                { path: "stream-records-instantly", element: <SpringComponents.StreamRecordsInstantlyMain /> },
                { path: "loop-stream-parallel-stream", element: <SpringComponents.LoopStreamParallelStreamMain /> },
                { path: "multithread-block-queue", element: <SpringComponents.MultiThreadBlockQueueMain /> },
                { path: "java-in-use", element: <SpringComponents.JavaInUseMain /> },
                { path: "java-techie", element: <SpringComponents.JavaTechieMain /> },
                { path: "gen-z-career", element: <SpringComponents.GenZCareerMain /> },
              ],
            },
          ],
        },

        {
          path: "microservices",
          element: <Pages.MicroServices_page />,
          children: [
            { index: true, element: <MicroServiceHome /> },
            {
              path: "architecture-springboot-2-7-18",
              element: <ArchitectureSpringBoot2 />,
              children: [
                { path: "architecture-options", element: <ArchitectureOptionsMain /> },
                { path: "customer-order", element: <CustomerOrderMain /> },
                { path: "eureka", element: <Eureka_2_7_18_Main /> },
                { path: "apigateway", element: <APIGateway_2_7_18_Main /> },
                { path: "spring-cloud-config", element: <SpringCloudConfig_2_7_18_Main /> },
                { path: "zipkin-sleuth", element: <TracingZipkinSleuth_2_7_18_Main /> },
                { path: "resilliance4j", element: <Resilliance4J_2_7_18_Main /> },
                { path: "elk", element: <ELK_2_7_18_Main /> },
                { path: "kafka", element: <Kafka_2_7_18_Main /> },
                { path: "security", element: <Security_2_7_18_Main /> },
              ],
            },
            {
              path: "architecture-springboot-3-x-x",
              element: <ArchitectureSpringBoot3 />,
              children: [
                { path: "architecture-options", element: <Architecture3OptionsMain /> },
                { path: "service-discovery", element: <ServiceDiscoveryMain /> },
              ],
            },
            { path: "docker", element: <Docker /> },

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
          path: "python",
          element: <Pages.Python_page />,
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
          path: "fastapi",
          element: <Pages.FastAPI_page />,
          children: [
            { index: true, element: <FastAPIComponents.FastAPIHome /> },
            { path: "install", element: <FastAPIComponents.FastApiInstallMain /> },
            {
              path: "ide",
              element: <FastAPIComponents.FastAPIIde />,
              children: [
                { path: "pycharm", element: <PyCharmMain /> },
                { path: "vscode", element: <VsCodeMain /> },
              ],
            },
            {
              path: "database-env-profiles",
              element: <FastAPIComponents.FastApiConfigurationProfilesEnv />,
              children: [
                { path: "sqlite3", element: <FastAPIComponents.Sqlite3Main /> },
                { path: "mysql", element: <FastAPIComponents.MySqlAlchemyMain /> },
                { path: "postgresql", element: <FastAPIComponents.PostgresqlalchemyMain /> },
                { path: "env", element: <FastAPIComponents.EnvMain /> },
                { path: "profiles", element: <FastAPIComponents.ProfilesMain /> },
                { path: "db-init-data-sql", element: <FastAPIComponents.DBInitLikeDataSqlMain /> },
              ],
            },
            {
              path: "logging",
              element: <FastAPIComponents.FastAPILogging />,
              children: [
                { path: "default-logging", element: <FastAPIComponents.DefaultLoggingMain /> },
                { path: "logging-config", element: <FastAPIComponents.LoggingConfigMain /> },
                { path: "logging-conf", element: <FastAPIComponents.LoggingConfINIMain /> },
              ],
            },
            {
              path: "router",
              element: <FastAPIComponents.FastAPIRouter />,
              children: [
                { path: "main-py", element: <FastAPIComponents.MainPyMain /> },
                { path: "setup-fastapi", element: <FastAPIComponents.SetupFastApiMain /> },
                { path: "pydantic", element: <FastAPIComponents.PydanticMain /> },
                { path: "request-response", element: <FastAPIComponents.RequestResponseMain /> },
                { path: "get-request", element: <FastAPIComponents.GetRequestMain /> },
                { path: "post-request", element: <FastAPIComponents.PostRequestMain /> },
              ],
            },
            {
              path: "exceptions",
              element: <FastAPIComponents.FastAPIException />,
              children: [
                { path: "default", element: <FastAPIComponents.ExceptionsMain /> },
                { path: "global-exception", element: <FastAPIComponents.GlobalExceptionsMain /> },
              ],
            },
            {
              path: "sqlalchemy",
              element: <FastAPIComponents.FastAPISQLAlchemy />,
              children: [
                { path: "folder-structure", element: <FastAPIComponents.FolderStructureMain /> },
                { path: "sqlalchemy-config", element: <FastAPIComponents.SqlAlchemyConfigMain /> },
                // folder-structure
              ],
            },
            { path: "auditing", element: <FastAPIComponents.FastAPIAuditing /> },
            { path: "security", element: <FastAPIComponents.FastAPISecurity /> },
            { path: "caching", element: <FastAPIComponents.FastAPICaching /> },
          ],
        },
        {
          path: "reactJS",
          element: <Pages.ReactJS_page />,
          children: [
            { index: true, element: <ReactJSHome /> },
            {
              path: "project-setup",
              element: <ProjectSetup />,
              children: [
                { path: "vite-create", element: <CreateViteMain /> },
                { path: "favicon", element: <FaviconMain /> },
                { path: "reacticons", element: <ReactIconsMain /> },
                { path: "tailwindcss", element: <TailwindcssMain /> },
              ],
            },
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
                { path: "props", element: <PropsMain /> },
                { path: "storage", element: <StorageMain /> },
                { path: "context", element: <ContextMain /> },
              ],
            },
            {
              path: "router",
              element: <ReactRouter />,
              children: [
                { path: "install", element: <InstallRouterMain /> },
                { path: "create-router", element: <CreateRouterMain /> },
              ],
            },
            { path: "pagination", element: <Pagination /> },
            {
              path: "axios",
              element: <Axios />,
              children: [
                { path: "axios-install", element: <AxiosInstallMain /> },
                { path: "create-instance", element: <AxiosInstanceMain /> },
              ],
            },
            { path: "react-on-spring", element: <ReactOnSpringMain /> },
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
          element: <Pages.JavaScript_page />,
          children: [
            { index: true, element: <JavaScriptHome /> },
            { path: "basics", element: <JavaScriptBasics />, children: [{ path: "array", element: <JsArrayMain /> }] },
            {
              path: "fetch-api",
              element: <FetchApi />,
              children: [
                { path: "intro", element: <FetchApiMain /> },
                { path: "promise-async-await", element: <PromiseAsyncAwaitMain /> },
              ],
            },
          ],
        },
        {
          path: "html_css",
          element: <Pages.HTML_CSS_page />,
          children: [
            { index: true, element: <HtmlCssHome /> },
            { path: "css-basics", element: <HtmlBasics />, children: [{ path: "add-css", element: <AddCssMain /> }] },
            { path: "html-basics", element: <CssBasics />, children: [{ path: "html-types", element: <HtmlTypesMain /> }] },
          ],
        },
        { path: "fullstack", element: <Pages.FullStack_page />, children: [{ index: true, element: <FullStackHome /> }] },

        {
          path: "sql",
          element: <Pages.Sql_page />,
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
          path: "devops",
          element: <Pages.DevOps_page />,
          children: [
            { index: true, element: <DevOpsHome /> },
            { path: "git", element: <GitMain /> },
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
          element: <Pages.Guitar_page />,
          children: [
            { index: true, element: <GuitarHome /> },
            {
              path: "chords",
              element: <ChordsMain />,
            },

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
        { path: "linux", element: <Pages.Linux_page />, children: [{ index: true, element: <LinuxHome /> }] },
        {
          path: "postman",
          element: <Pages.Postman_page />,
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
          element: <Pages.Windows_page />,
          children: [
            { index: true, element: <WindowsHome /> },
            { path: "port-check", element: <PortCheckMain /> },
            { path: "batch", element: <Batch />, children: [{ path: "ascii", element: <AsciiMain /> }] },
          ],
        },
        {
          path: "c++",
          element: <Pages.Cpp_page />,
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
          path: "page_creation",
          element: <Pages.Page_Creation_page />,
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
