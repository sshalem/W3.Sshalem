import DetailsSummary from "./DetailsSummary";
import TreeSpanApp from "./TreeSpanApp";

const TreeAppBrowserRouter = () => {
  return (
    <section>
      <div className="my-4 text-2xl">🌍 App Browser Router Tree</div>

      <article className="ml-5">
        <DetailsSummary path="/" componentName={"<MainLayout>"} open={true}>
          <ul className="css-ul">
            <li>
              <DetailsSummary path="/spring" componentName="<Spring>">
                <ul className="css-ul">
                  <li>
                    <DetailsSummary path="/application-properties" componentName="<ApplicationProperties>">
                      <ul className="css-ul">
                        <li>
                          <TreeSpanApp path="/h2" componentName="<H2Main>" />
                        </li>
                        <li>
                          <TreeSpanApp path="/postgresql" componentName="<PostgresqlMain>" />
                        </li>

                        <li>
                          <TreeSpanApp path="/mysql" componentName="<MySqlMain>" />
                        </li>

                        <li>
                          <TreeSpanApp path="/mongodb" componentName="<MongoDBMain>" />
                        </li>

                        <li>
                          <TreeSpanApp path="/dbeaver" componentName="<DBeaverMain>" />
                        </li>

                        <li>
                          <TreeSpanApp path="/profiles" componentName="<ProfileMain>" />
                        </li>

                        <li>
                          <TreeSpanApp path="/db-initialization" componentName="<DBInitMain>" />
                        </li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/logging" componentName="<Logging>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/jpa" componentName="<Jpa>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/rest" componentName="<Rest>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/spring-doc" componentName="<SpringDoc>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/swagger" componentName="<Swagger>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/exception-handling" componentName="<ExceptionHandling>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/transaction-management" componentName="<TransactionManagement>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/open-AI" componentName="<OpenAI>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/caching" componentName="<Caching>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/aop" componentName="<Aop>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                    <DetailsSummary path="/spring-security" componentName="<SpringSecurity>">
                      <ul className="css-ul">
                        <li>Grandchild 1</li>
                      </ul>
                    </DetailsSummary>
                  </li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/reactJS" componentName="<ReactJS>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/javascript" componentName="<JavaScript>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/html_css" componentName="<HTML_CSS>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/fullstack" componentName="<FullStack>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/java" componentName="<Java>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>

              <DetailsSummary path="/sql" componentName="<Sql>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/python" componentName="<Python>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/devops" componentName="<DevOps>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/git" componentName="<Git>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/linux" componentName="<Linux>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/batch" componentName="<Batch>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/postman" componentName="<Postman>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
              <DetailsSummary path="/windows" componentName="<Windows>">
                <ul className="css-ul">
                  <li>temp</li>
                </ul>
              </DetailsSummary>
            </li>
          </ul>
        </DetailsSummary>
      </article>
    </section>
  );
};

export default TreeAppBrowserRouter;

// ul {
//   list-style-type: none;
//   border-left: 1px solid #ccc;
// }
