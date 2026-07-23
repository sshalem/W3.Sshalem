import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components";
import * as Pages from "./pages";
import * as SpringComponents from "./pages/Spring/SpringComponents";
import * as PythonComponents from "./pages/Python/PythonComponents";
import * as FastAPIComponents from "./pages/FastAPI/FastAPIComponents";
import * as ReactJSComponents from "./pages/ReactJS/ReactJSComponents";
import * as JavaScriptComponents from "./pages/JavaScript/JavaScriptComponents";
import * as PageCreateComponents from "./pages/PageCreate/PageCreateComponents";
import * as JavaComponents from "./pages/Java/JavaComponents";
import * as MicroServiceComponents from "./pages/MicroServices/MicroServiceComponents";
import * as SqlComponents from "./pages/Sql/SqlComponents";
import * as DevOpsComponents from "./pages/DevOps/DevOpsComponents";
import * as WindowsComponents from "./pages/Windows/WindowsComponents";
import * as GuitarComponents from "./pages/Guitar/GuitarComponents";
import * as PostmanComponents from "./pages/Postman/PostmanComponents";
import * as HtmlCssComponents from "./pages/HTML_CSS/HtmlCssComponents";
import * as FullStackComponents from "./pages/FullStack/FullStackComponents";
import * as LinuxComponents from "./pages/Linux/LinuxComponents";
import * as CppComponents from "./pages/Cpp/CppComponents";

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
            { index: true, element: <JavaComponents.JavaHome /> },
            {
              path: "basics",
              element: <JavaComponents.JavaBasics />,
              children: [
                { path: "java-fundamental", element: <JavaComponents.JavaFundamentalMain /> },
                { path: "array", element: <JavaComponents.ArrayMain /> },
                { path: "enum", element: <JavaComponents.EnumMain /> },
                { path: "comparable-comparator", element: <JavaComponents.ComparableComparatorMain /> },
                { path: "exceptions", element: <JavaComponents.JavaExceptionsMain /> },
                { path: "object-class", element: <JavaComponents.JavaObjectClassMain /> },
                { path: "random", element: <JavaComponents.RandomMain /> },
                { path: "oop", element: <JavaComponents.OopMain /> },
                { path: "generics", element: <JavaComponents.JavaGenericsMain /> },
                { path: "collections", element: <JavaComponents.JavaCollectionsMain /> },
                { path: "io", element: <JavaComponents.InputOutputMain /> },
                { path: "multithreading", element: <JavaComponents.MultiThreadingMain /> },
                { path: "gc-heap-stack", element: <JavaComponents.GcHeapStackMain /> },
                { path: "java8", element: <JavaComponents.Java8Main /> },
                { path: "memory-monitoring", element: <JavaComponents.JavaMemoryMonitoringMain /> },
              ],
            },
            {
              path: "data-structures",
              element: <JavaComponents.DataStructures />,
              children: [
                { path: "arrays", element: <JavaComponents.ArraysMain /> },
                { path: "list", element: <JavaComponents.ListMain /> },
                { path: "set", element: <JavaComponents.SetMain /> },
                { path: "map", element: <JavaComponents.MapMain /> },
                { path: "queue", element: <JavaComponents.QueueMain /> },
                { path: "concurent", element: <JavaComponents.ConcurrentDataMain /> },
              ],
            },
            {
              path: "design-patterns-creational",
              element: <JavaComponents.DesignPatternCreational />,
              children: [
                { path: "singleton", element: <JavaComponents.SingletonMain /> },
                { path: "prototype", element: <JavaComponents.PrototypeMain /> },
                { path: "builder", element: <JavaComponents.BuilderMain /> },
                { path: "factory", element: <JavaComponents.FactoryMain /> },
                { path: "abstract-factory", element: <JavaComponents.AbstractFactoryMain /> },
              ],
            },
            {
              path: "design-patterns-structural",
              element: <JavaComponents.DesignPatternStructural />,
              children: [
                { path: "adapter", element: <JavaComponents.AdapterMain /> },
                { path: "decorator", element: <JavaComponents.DecoratorMain /> },
                { path: "facade", element: <JavaComponents.FacadeMain /> },
                { path: "composite", element: <JavaComponents.CompositeMain /> },
                { path: "proxy", element: <JavaComponents.ProxyMain /> },
                { path: "bridge", element: <JavaComponents.BridgeMain /> },
                { path: "flyweight", element: <JavaComponents.FlyweightMain /> },
              ],
            },
            {
              path: "design-patterns-behavioral",
              element: <JavaComponents.DesignPatternBehavioral />,
              children: [
                { path: "observer", element: <JavaComponents.ObserverMain /> },
                { path: "strategy", element: <JavaComponents.StrategyMain /> },
                { path: "template-method", element: <JavaComponents.TemplateMethodMain /> },
                { path: "command", element: <JavaComponents.CommandMain /> },
                { path: "state", element: <JavaComponents.StateMain /> },
                { path: "chain-of-responsibility", element: <JavaComponents.ChainOfResponsibilityMain /> },
                { path: "iterator", element: <JavaComponents.IteratorMain /> },
                { path: "mediator", element: <JavaComponents.MediatorMain /> },
                { path: "memento", element: <JavaComponents.MementoMain /> },
                { path: "visitor", element: <JavaComponents.VisitorMain /> },
              ],
            },
            {
              path: "java-interview-questions",
              element: <JavaComponents.JavaInterviewQuestions />,
              children: [
                { path: "collections-questions", element: <JavaComponents.CollectionsQuestionsMain /> },
                { path: "io-questions", element: <JavaComponents.IO_QuestionsMain /> },
                { path: "memory-monitoring-questions", element: <JavaComponents.MemoryMonitoringQuestionsMain /> },
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
            { index: true, element: <MicroServiceComponents.MicroServiceHome /> },
            {
              path: "architecture-springboot-2-7-18",
              element: <MicroServiceComponents.ArchitectureSpringBoot2 />,
              children: [
                { path: "architecture-options", element: <MicroServiceComponents.ArchitectureOptionsMain /> },
                { path: "customer-order", element: <MicroServiceComponents.CustomerOrderMain /> },
                { path: "eureka", element: <MicroServiceComponents.Eureka_2_7_18_Main /> },
                { path: "apigateway", element: <MicroServiceComponents.APIGateway_2_7_18_Main /> },
                { path: "spring-cloud-config", element: <MicroServiceComponents.SpringCloudConfig_2_7_18_Main /> },
                { path: "zipkin-sleuth", element: <MicroServiceComponents.TracingZipkinSleuth_2_7_18_Main /> },
                { path: "resilliance4j", element: <MicroServiceComponents.Resilliance4J_2_7_18_Main /> },
                { path: "elk", element: <MicroServiceComponents.ELK_2_7_18_Main /> },
                { path: "kafka", element: <MicroServiceComponents.Kafka_2_7_18_Main /> },
                { path: "security", element: <MicroServiceComponents.Security_2_7_18_Main /> },
              ],
            },
            {
              path: "architecture-springboot-3-x-x",
              element: <MicroServiceComponents.ArchitectureSpringBoot3 />,
              children: [
                { path: "architecture-options", element: <MicroServiceComponents.Architecture3OptionsMain /> },
                { path: "service-discovery", element: <MicroServiceComponents.ServiceDiscoveryMain /> },
              ],
            },
            { path: "docker", element: <MicroServiceComponents.Docker /> },

            {
              path: "kafka",
              element: <MicroServiceComponents.Kafka />,
              children: [
                { path: "intro", element: <MicroServiceComponents.KafkaIntroMain /> },
                { path: "message-ordering", element: <MicroServiceComponents.KafkaMsgOrderingMain /> },
              ],
            },
            {
              path: "rabbitmq",
              element: <MicroServiceComponents.RabbitMQ />,
              children: [{ path: "intro", element: <MicroServiceComponents.RabbitMQIntroMain /> }],
            },
            {
              path: "security-microservice",
              element: <MicroServiceComponents.SecurityMicroServ />,
              children: [
                { path: "intro", element: <MicroServiceComponents.IntroMicroServSecurityMain /> },
                { path: "project", element: <MicroServiceComponents.ProjectWithSecurityMain /> },
              ],
            },
          ],
        },
        {
          path: "python",
          element: <Pages.Python_page />,
          children: [
            { index: true, element: <PythonComponents.PythonHome /> },
            {
              path: "general",
              element: <PythonComponents.PythonGeneral />,
              children: [
                { path: "create-project", element: <PythonComponents.CreateProjectMain /> },
                { path: "python-git", element: <PythonComponents.PythonGitMain /> },
              ],
            },
            {
              path: "ide",
              element: <PythonComponents.PythonIde />,
              children: [
                { path: "pycharm", element: <PythonComponents.PyCharmMain /> },
                { path: "vscode", element: <PythonComponents.VsCodeMain /> },
              ],
            },
            {
              path: "python-basics",
              element: <PythonComponents.PythonBasics />,
              children: [
                { path: "data-types", element: <PythonComponents.DataTypesMain /> },
                { path: "operators", element: <PythonComponents.OperatorsMain /> },
                { path: "control-flow", element: <PythonComponents.IfElseMain /> },
                { path: "loops", element: <PythonComponents.LoopsMain /> },
                { path: "functions", element: <PythonComponents.PythonFunctionsMain /> },
                { path: "exceptions", element: <PythonComponents.PythonExceptionsMain /> },
                { path: "modules-packaging", element: <PythonComponents.ModulesPackagingMain /> },
                { path: "file-handling", element: <PythonComponents.FileHandlingMain /> },
                { path: "oop", element: <PythonComponents.PythonOopMain /> },
                { path: "venv", element: <PythonComponents.VenvMain /> },
              ],
            },
            {
              path: "data-structure",
              element: <PythonComponents.PythonIde />,
              children: [
                { path: "list", element: <PythonComponents.PythonListMain /> },
                { path: "tuple", element: <PythonComponents.PythonTupleMain /> },
                { path: "set", element: <PythonComponents.PythonSetMain /> },
                { path: "dictionary", element: <PythonComponents.PythonDictionaryMain /> },
              ],
            },
            {
              path: "fastapi",
              element: <PythonComponents.FastApi />,
              children: [
                { path: "setup-fastapi", element: <PythonComponents.SetupFastApiProjectMain /> },
                { path: "request-and-validation", element: <PythonComponents.RequestDataAmdValidationSectionsMain /> },
                { path: "dependency-injection", element: <PythonComponents.DependencyInjectionMain /> },
                { path: "middleware", element: <PythonComponents.MiddlewareSectionsMain /> },
                { path: "security", element: <PythonComponents.SecurityMain /> },
                { path: "background-tasks-and-async", element: <PythonComponents.BackgroundTasksAndAsyncMain /> },
                { path: "database-integration", element: <PythonComponents.DataBaseIntegrationMain /> },
                { path: "application-structure-architecture", element: <PythonComponents.ApplicationStructureAndArchitectureMain /> },
                { path: "testing", element: <PythonComponents.TestingMain /> },
                { path: "performance-concurrency", element: <PythonComponents.PerformanceAndConcurrencyMain /> },
                { path: "deployment-dev-ops", element: <PythonComponents.DeploymentAndDevOpsMain /> },
                { path: "advanced-topics", element: <PythonComponents.AdvancedTopicsMain /> },
              ],
            },
            {
              path: "django",
              element: <PythonComponents.Django />,
              children: [
                { path: "create-django", element: <PythonComponents.CreateDjangoProjectMain /> },
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
                { path: "pycharm", element: <PythonComponents.PyCharmMain /> },
                { path: "vscode", element: <PythonComponents.VsCodeMain /> },
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
            { index: true, element: <ReactJSComponents.ReactJSHome /> },
            {
              path: "project-setup",
              element: <ReactJSComponents.ProjectSetup />,
              children: [
                { path: "vite-create", element: <ReactJSComponents.CreateViteMain /> },
                { path: "favicon", element: <ReactJSComponents.FaviconMain /> },
                { path: "reacticons", element: <ReactJSComponents.ReactIconsMain /> },
                { path: "tailwindcss", element: <ReactJSComponents.TailwindcssMain /> },
              ],
            },
            { path: "setup", element: <ReactJSComponents.SetupMain /> },
            {
              path: "basics",
              element: <ReactJSComponents.ReactBasics />,
              children: [
                { path: "jsx", element: <ReactJSComponents.JsxMain /> },
                { path: "jsx", element: <ReactJSComponents.JsxMain /> },
              ],
            },
            {
              path: "typescript",
              element: <ReactJSComponents.TypeScript />,
              children: [
                { path: "introduction", element: <ReactJSComponents.IntroMain /> },
                { path: "props", element: <ReactJSComponents.PropsMain /> },
                { path: "storage", element: <ReactJSComponents.StorageMain /> },
                { path: "context", element: <ReactJSComponents.ContextMain /> },
              ],
            },
            {
              path: "router",
              element: <ReactJSComponents.ReactRouter />,
              children: [
                { path: "install", element: <ReactJSComponents.InstallRouterMain /> },
                { path: "create-router", element: <ReactJSComponents.CreateRouterMain /> },
              ],
            },
            { path: "pagination", element: <ReactJSComponents.Pagination /> },
            {
              path: "axios",
              element: <ReactJSComponents.Axios />,
              children: [
                { path: "axios-install", element: <ReactJSComponents.AxiosInstallMain /> },
                { path: "create-instance", element: <ReactJSComponents.AxiosInstanceMain /> },
              ],
            },
            { path: "react-on-spring", element: <ReactJSComponents.ReactOnSpringMain /> },
            {
              path: "global-search",
              element: <ReactJSComponents.GlobalSearch />,
              children: [
                { path: "memory-search", element: <ReactJSComponents.MemorySearchMain /> },
                { path: "memory-search", element: <ReactJSComponents.MemorySearchMain /> },
              ],
            },
            {
              path: "reactjs-interview-questions",
              element: <ReactJSComponents.ReactJSInterviewQuestions />,
              children: [{ path: "superup", element: <ReactJSComponents.SuperupMain /> }],
            },
          ],
        },
        {
          path: "javascript",
          element: <Pages.JavaScript_page />,
          children: [
            { index: true, element: <JavaScriptComponents.JavaScriptHome /> },
            {
              path: "basics",
              element: <JavaScriptComponents.JavaScriptBasics />,
              children: [{ path: "array", element: <JavaScriptComponents.JsArrayMain /> }],
            },
            {
              path: "fetch-api",
              element: <JavaScriptComponents.FetchApi />,
              children: [
                { path: "intro", element: <JavaScriptComponents.FetchApiMain /> },
                { path: "promise-async-await", element: <JavaScriptComponents.PromiseAsyncAwaitMain /> },
              ],
            },
          ],
        },
        {
          path: "html_css",
          element: <Pages.HTML_CSS_page />,
          children: [
            { index: true, element: <HtmlCssComponents.HtmlCssHome /> },
            {
              path: "css-basics",
              element: <HtmlCssComponents.HtmlBasics />,
              children: [{ path: "add-css", element: <HtmlCssComponents.AddCssMain /> }],
            },
            {
              path: "html-basics",
              element: <HtmlCssComponents.CssBasics />,
              children: [{ path: "html-types", element: <HtmlCssComponents.HtmlTypesMain /> }],
            },
          ],
        },
        { path: "fullstack", element: <Pages.FullStack_page />, children: [{ index: true, element: <FullStackComponents.FullStackHome /> }] },

        {
          path: "sql",
          element: <Pages.Sql_page />,
          children: [
            { index: true, element: <SqlComponents.SqlHome /> },
            {
              path: "basic-concepts",
              element: <SqlComponents.BasicConcepts />,
              children: [{ path: "key-types", element: <SqlComponents.KeyTypesMain /> }],
            },
            {
              path: "operator-statements",
              element: <SqlComponents.OperatorStatements />,
              children: [
                { path: "use", element: <SqlComponents.UseMain /> },
                { path: "select", element: <SqlComponents.SelectMain /> },
                { path: "alias", element: <SqlComponents.AliasMain /> },
                { path: "distinct", element: <SqlComponents.DistinctMain /> },
                { path: "where", element: <SqlComponents.WhereClauseMain /> },
                { path: "logical-operator", element: <SqlComponents.LogicalOperatorsMain /> },
                { path: "in", element: <SqlComponents.InMain /> },
                { path: "between", element: <SqlComponents.BetweenMain /> },
                { path: "like", element: <SqlComponents.LikeMain /> },
                { path: "regex", element: <SqlComponents.RegexMain /> },
                { path: "is-null", element: <SqlComponents.IsNullMain /> },
                { path: "order-by", element: <SqlComponents.OrderByMain /> },
                { path: "limit", element: <SqlComponents.LimitMain /> },
              ],
            },
          ],
        },

        {
          path: "devops",
          element: <Pages.DevOps_page />,
          children: [
            { index: true, element: <DevOpsComponents.DevOpsHome /> },
            { path: "git", element: <DevOpsComponents.GitMain /> },
            { path: "docker", element: <DevOpsComponents.DockerMain /> },
            { path: "netlify", element: <DevOpsComponents.DeployNetlifyMain /> },
            { path: "render", element: <DevOpsComponents.DeployRenderMain /> },
            {
              path: "nginx",
              element: <DevOpsComponents.Nginx />,
              children: [
                { path: "nginx-install", element: <DevOpsComponents.NginxInstallMain /> },
                { path: "maven-create-jar", element: <DevOpsComponents.MavenCreateJarMain /> },
                { path: "deploy-jar", element: <DevOpsComponents.DeployJarNginxMain /> },
                { path: "deploy-react", element: <DevOpsComponents.DeployReactNginxMain /> },
              ],
            },
            {
              path: "tomcat",
              element: <DevOpsComponents.Tomcat />,
              children: [
                { path: "tomcat-install", element: <DevOpsComponents.TomcatInstallMain /> },
                { path: "react-on-tomcat", element: <DevOpsComponents.ReactOnTomcatMain /> },
              ],
            },
            {
              path: "linux-server",
              element: <DevOpsComponents.Linux_Server />,
              children: [
                { path: "create-server", element: <DevOpsComponents.CreateServerMain /> },
                { path: "connect-with-ssh", element: <DevOpsComponents.ConnectToServerSshMain /> },
                { path: "connect-with-filezilla", element: <DevOpsComponents.FileZillaMain /> },
                { path: "setup-server", element: <DevOpsComponents.SetupServerMain /> },
                { path: "jdk-install", element: <DevOpsComponents.JdkInstallMain /> },
                { path: "deploy", element: <DevOpsComponents.DeployLinuxMain /> },
                { path: "mysql-install", element: <DevOpsComponents.MySqlnstallMain /> },
                { path: "jenkins-install", element: <DevOpsComponents.JenkinsMain /> },
              ],
            },
          ],
        },
        {
          path: "guitar",
          element: <Pages.Guitar_page />,
          children: [
            { index: true, element: <GuitarComponents.GuitarHome /> },
            {
              path: "chords",
              element: <GuitarComponents.ChordsMain />,
            },

            {
              path: "general",
              element: <GuitarComponents.GeneralMain />,
            },
            {
              path: "gipsy-kings",
              element: <GuitarComponents.GipsyKings />,
              children: [
                { path: "allegria", element: <GuitarComponents.AllegriaMain /> },
                { path: "love-and-liberte", element: <GuitarComponents.LoveAndLiberteMain /> },
                { path: "generic", element: <GuitarComponents.GenericSongsMain /> },
              ],
            },
            {
              path: "flamenco",
              element: <GuitarComponents.Flamenco />,
              children: [
                // flamenco-basics
                { path: "flamenco-basics", element: <GuitarComponents.FlamencoBasicsMain /> },
                { path: "solea", element: <GuitarComponents.SoleaMain /> },
                { path: "rumba", element: <GuitarComponents.RumbaMain /> },
              ],
            },
            {
              path: "anton-glushkin",
              element: <GuitarComponents.AntonGlushkinMain />,
            },
          ],
        },
        { path: "linux", element: <Pages.Linux_page />, children: [{ index: true, element: <LinuxComponents.LinuxHome /> }] },
        {
          path: "postman",
          element: <Pages.Postman_page />,
          children: [
            { index: true, element: <PostmanComponents.PostmanHome /> },
            { path: "collection", element: <PostmanComponents.CollectionMain /> },
            {
              path: "environment",
              element: <PostmanComponents.Environment />,
              children: [
                { path: "setup", element: <PostmanComponents.EnvironmentSetupMain /> },
                // { path: "environment-setup", element: <EnvironmentSetupMain /> },
              ],
            },
            { path: "multiple-http-requests", element: <PostmanComponents.MultipleHttpRequestMain /> },
          ],
        },
        {
          path: "windows",
          element: <Pages.Windows_page />,
          children: [
            { index: true, element: <WindowsComponents.WindowsHome /> },
            { path: "port-check", element: <WindowsComponents.PortCheckMain /> },
            { path: "batch", element: <WindowsComponents.Batch />, children: [{ path: "ascii", element: <WindowsComponents.AsciiMain /> }] },
          ],
        },
        {
          path: "c++",
          element: <Pages.Cpp_page />,
          children: [
            { index: true, element: <CppComponents.CppHome /> },
            {
              path: "cpp-basics",
              element: <CppComponents.CppBasics />,
              children: [
                { index: true, element: <CppComponents.FunctionsMain /> },
                { path: "functions", element: <CppComponents.FunctionsMain /> },
                { path: "test", element: <CppComponents.TestMain /> },
              ],
            },
          ],
        },
        {
          path: "page_creation",
          element: <Pages.Page_Creation_page />,
          children: [
            { index: true, element: <PageCreateComponents.PageCreationHome /> },
            {
              path: "specification-document",
              element: <PageCreateComponents.SpecificationDocument />,
              children: [{ path: "create-steps", element: <PageCreateComponents.CreateStepMain /> }],
            },
            { path: "app-tree", element: <PageCreateComponents.AppTreeComponent /> },
            { path: "component-tree", element: <PageCreateComponents.ComponentTreeComponent /> },
            { path: "web-page", element: <PageCreateComponents.WebPageComponent /> },
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
