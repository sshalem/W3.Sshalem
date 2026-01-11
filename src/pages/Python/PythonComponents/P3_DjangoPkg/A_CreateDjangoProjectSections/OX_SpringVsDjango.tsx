/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";
import Table_2ColCompareDjangoTerminology from "../../../../../components/Tables/Table_2ColCompareDjangoTerminology";
import { DetailsSummary, TreeComponent } from "../../../../../components/Tree";

const OX_SpringVsDjango = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="flex gap-48">
          <div>
            <div className="my-4 text-xl font-semibold">Spring (layer-oriented)</div>
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </div>
          <div>
            <div className="my-4 text-xl font-semibold">Django (feature-oriented)</div>
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </div>
        </article>
        <Table_2ColCompareDjangoTerminology></Table_2ColCompareDjangoTerminology>
      </section>

      <section className="my-8">
        <article className="ml-5">
          <DetailsSummary path="DjangoProject/" componentName={"← Workspace / repo root (ANY name you want)"} open={true}>
            <ul className="css-ul">
              <li>
                <TreeComponent componentName="manage.py" folder=""></TreeComponent>
              </li>
              <li>
                <TreeComponent componentName="requirements.txt" folder=""></TreeComponent>
              </li>
              <li>
                <DetailsSummary path="academic/" componentName=" ← Django PROJECT (config & wiring)">
                  <ul className="css-ul">
                    <li>
                      <li>
                        <TreeComponent componentName="__init.py__" folder="__init.py__"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="settings.py" folder="settings.py"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="urls.py" folder="urls.py"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="asgi.py" folder="asgi.py"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="wsgi.py" folder="wsgi.py"></TreeComponent>
                      </li>
                    </li>
                    {/* <li>
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
                    </li> */}
                  </ul>
                </DetailsSummary>
                <DetailsSummary path="students/" componentName=" ← Django APP (domain logic)">
                  <ul className="css-ul">
                    <li>
                      <TreeComponent componentName="models.py" folder="models.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="views.py" folder="views.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="admin.py" folder="admin.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="migrations/" folder="migrations/"></TreeComponent>
                    </li>
                  </ul>
                </DetailsSummary>
              </li>
            </ul>
          </DetailsSummary>
        </article>
      </section>

      {/* <section className="my-8">
        <article className="ml-5">
          <DetailsSummaryComponent folder="/Components" componentName={"<MainLayout>"} open={true}>
            <ul className="css-ul">
              <li>
                <TreeComponent componentName="<TopNavbar>" folder="/Components"></TreeComponent>
              </li>

              <li>
                <TreeComponent componentName="<Navbar>" folder="/Components"></TreeComponent>
              </li>
              <li>
                <DetailsSummaryOutlet componentName="<Outlet>" open={true}>
                  <ul className="css-ul">
                    <TreeSpring />
                    <DetailsSummaryComponent folder="/pages" componentName={"<ReactJS>"}></DetailsSummaryComponent>
                    <DetailsSummaryComponent folder="/pages" componentName={"<Java>"}></DetailsSummaryComponent>
                  </ul>
                </DetailsSummaryOutlet>
              </li>
            </ul>
          </DetailsSummaryComponent>
        </article>
      </section> */}
    </MainChildArea>
  );
};

export default OX_SpringVsDjango;

const _1_ = `
users
 ├── UserController
 ├── UserService
 ├── UserRepository
 └── UserEntity`;

const _2_ = `users/
 ├── models.py      ← Entity
 ├── views.py       ← Controller (Django views / DRF views)
 ├── urls.py        ← Routing
 ├── admin.py
 └── services.py    ← (optional)`;
