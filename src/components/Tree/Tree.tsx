import DetailsSummaryComponent from "./DetailsSummaryComponent";
import DetailsSummaryOutlet from "./DetailsSummaryOutlet";
import TreeSpring from "./Spring/TreeSpring";
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
