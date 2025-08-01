import TreeComponent from "./TreeComponent";
import TreeOutlet from "./TreeOutlet";

const Tree = () => {
  // ✅ Features:
  // Folder and file icons
  // Expand/collapse folders (CSS-only)
  // Nested support
  // Minimal and clean

  return (
    <article>
      <div>
        <div className="my-4 text-2xl">🌍 Component Tree</div>
        <ul className="tree">
          <li>
            <TreeComponent name="MainLayout" folder="Components" />
            <ul>
              <li>
                <TreeComponent name="TopNavbar" folder="Components" />
              </li>
              <li>
                <TreeComponent name="Navbar" folder="Components" />
                <ul>
                  <li>
                    <TreeComponent name="TopNavbar" folder="Components" />
                  </li>
                  <li>
                    <TreeComponent name="TopNavbar" folder="Components" />
                  </li>
                  <li>
                    <TreeComponent name="TopNavbar" folder="Components" />
                  </li>
                </ul>
              </li>
              <TreeOutlet name="Outlet" folder="MainLayout" />
              <li>
                <input type="checkbox" id="subfolder1" />
                <label htmlFor="subfolder1">📁 subfolder</label>
                <ul>
                  <li>📄 file2.txt</li>
                  <li>
                    <input type="checkbox" id="nestedFolder" />
                    <label htmlFor="nestedFolder">📁 nestedFolder</label>
                    <ul>
                      <li>📄 file3.tsx </li>
                      <li>📄 file3.tsx </li>
                      <li>📄 file3.tsx </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        {/* <ul className="tree">
          <li>
            <input type="checkbox" id="rootfolder" />
            <label htmlFor="rootfolder">📁 rootfolder</label>
            <ul>
              <li>├─ 📄 file1.txt</li>
              <li>
                ├─
                <input type="checkbox" id="subfolder1" />
                <label htmlFor="subfolder1">📁 subfolder</label>
                <ul>
                  <li>├─ 📄 file2.txt</li>
                  <li>
                    <input type="checkbox" id="nestedFolder" />
                    <label htmlFor="nestedFolder">📁 nestedFolder</label>
                    <ul>
                      <li>└─ 📄 file3.txt </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>├─ 📄 file4.txt</li>
            </ul>
          </li>
        </ul> */}
      </div>
    </article>
  );
};

export default Tree;
