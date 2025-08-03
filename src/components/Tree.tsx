import DetailsSummaryComponent from "./DetailsSummaryComponent";
import DetailsSummaryOutlet from "./DetailsSummaryOutlet";
import TreeComponent from "./TreeComponent";

const Tree = () => {
  // ✅ Features:
  // Folder and file icons
  // Expand/collapse folders (CSS-only)
  // Nested support
  // Minimal and clean

  return (
    <section>
      <div className="my-4 text-2xl">🌍 Component Tree</div>

      <article className="ml-5">
        <DetailsSummaryComponent folder="/Components" componentName={"<MainLayout>"}>
          <ul className="css-ul">
            <li>
              <TreeComponent componentName="<TopNavbar>" folder="/Components"></TreeComponent>
            </li>

            <li>
              <TreeComponent componentName="<Navbar>" folder="/Components"></TreeComponent>
            </li>
            <li>
              <DetailsSummaryOutlet componentName="<Outlet>">
                <ul className="css-ul">
                  <DetailsSummaryComponent folder="/pages" componentName={"<Spring>"}>
                    <ul className="css-ul">
                      <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownApplicationProperties>"}>
                        <ul className="css-ul"></ul>
                      </DetailsSummaryComponent>
                      <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownLogging>"}>
                        <ul className="css-ul"></ul>
                      </DetailsSummaryComponent>
                      <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownJpa>"}></DetailsSummaryComponent>
                      <DetailsSummaryComponent folder="/DropDown/DropSpringPage" componentName={"<DropDownRest>"}></DetailsSummaryComponent>
                      <DetailsSummaryOutlet componentName="<Outlet>">
                        <ul className="css-ul">
                          <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<ApplicationProperties>"}>
                            <ul className="css-ul">
                              <DetailsSummaryOutlet componentName="<Outlet>">
                                <ul className="css-ul">
                                  <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<H2Main>"}>
                                    <ul className="css-ul">
                                      <li>
                                        <TreeComponent
                                          componentName="<H2DatabseBasicConfig>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<H2Dbeaver>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<H2Osiv>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                    </ul>
                                  </DetailsSummaryComponent>
                                </ul>
                                <ul className="css-ul">
                                  <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<MySqlMain>"}>
                                    <ul className="css-ul">
                                      <li>
                                        <TreeComponent
                                          componentName="<MysqlBasicConfig>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<MySqlComprehansivePropertiesConfig>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<MySqlDetailedConfig>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<MysqlDialect>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<MySqlGitHub>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<MySqlOSIV>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                    </ul>
                                  </DetailsSummaryComponent>
                                </ul>
                              </DetailsSummaryOutlet>
                            </ul>
                          </DetailsSummaryComponent>
                          <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<Logging>"}>
                            <ul className="css-ul">
                              <DetailsSummaryOutlet componentName="<Outlet>">
                                <ul className="css-ul">
                                  <DetailsSummaryComponent folder="/SpringComponents/ApplicationPropsPkg" componentName={"<Slf4jLogbackMain>"}>
                                    <ul className="css-ul">
                                      <li>
                                        <TreeComponent
                                          componentName="<Slf4jGitHub>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<Slf4jLinks>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<Slf4JLogback>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<Slf4jReProduceLogbackPattern>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                      <li>
                                        <TreeComponent
                                          componentName="<Slf4jRollingFileSetup>"
                                          folder="/SpringComponents/ApplicationPropsPkg/H2SqlSections"
                                        ></TreeComponent>
                                      </li>
                                    </ul>
                                  </DetailsSummaryComponent>
                                </ul>
                              </DetailsSummaryOutlet>
                            </ul>
                          </DetailsSummaryComponent>
                        </ul>
                      </DetailsSummaryOutlet>
                    </ul>
                  </DetailsSummaryComponent>
                  <DetailsSummaryComponent folder="/pages" componentName={"<ReactJS>"}></DetailsSummaryComponent>
                  <DetailsSummaryComponent folder="/pages" componentName={"<Java>"}></DetailsSummaryComponent>
                </ul>
              </DetailsSummaryOutlet>
            </li>
          </ul>
        </DetailsSummaryComponent>
      </article>
    </section>
    // <article>
    //   <div>
    //     <div className="my-4 text-2xl">🌍 Component Tree</div>
    //     <ul className="tree">
    //       <li>
    //         <TreeComponent name="MainLayout" folder="Components" />
    //         <ul>
    //           <li>
    //             <TreeComponent name="TopNavbar" folder="Components" />
    //           </li>
    //           <li>
    //             <TreeComponent name="Navbar" folder="Components" />
    //             <ul>
    //               <li>
    //                 <TreeComponent name="TopNavbar" folder="Components" />
    //               </li>
    //               <li>
    //                 <TreeComponent name="TopNavbar" folder="Components" />
    //               </li>
    //               <li>
    //                 <TreeComponent name="TopNavbar" folder="Components" />
    //               </li>
    //             </ul>
    //           </li>
    //           <TreeOutlet name="Outlet" folder="MainLayout" />
    //           <li>
    //             <input type="checkbox" id="subfolder1" />
    //             <label htmlFor="subfolder1">📁 subfolder</label>
    //             <ul>
    //               <li>📄 file2.txt</li>
    //               <li>
    //                 <input type="checkbox" id="nestedFolder" />
    //                 <label htmlFor="nestedFolder">📁 nestedFolder</label>
    //                 <ul>
    //                   <li>📄 file3.tsx </li>
    //                   <li>📄 file3.tsx </li>
    //                   <li>📄 file3.tsx </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </div>
    // </article>
  );
};

export default Tree;
