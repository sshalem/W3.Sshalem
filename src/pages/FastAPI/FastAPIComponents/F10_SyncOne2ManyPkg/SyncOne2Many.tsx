/*


*/
import { Link, Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";
import {
  HiOutlineBookOpen,
  HiOutlineCode,
  HiOutlineAdjustments,
  HiOutlineDatabase,
  HiOutlineCollection,
  HiOutlineLink,
  HiOutlineExclamation,
  HiOutlineChip, // Fixed from HiOutlineCpuChip to match v1
  HiOutlineTerminal,
} from "react-icons/hi";

const linkPrefix = "/fastapi/sync-one2many";

const subjects = [
  { id: 1, name: "Intro", icon: HiOutlineBookOpen, category: "Basics", internalLink: `${linkPrefix}/projectFolderStructure` },
  { id: 2, name: "Create FastAPI", icon: HiOutlineCode, category: "Setup", internalLink: `${linkPrefix}/createFastApi` },
  { id: 3, name: "Config SQLAlchemy", icon: HiOutlineAdjustments, category: "Setup", internalLink: `${linkPrefix}/configSqlAlchemy` },
  { id: 4, name: "Model (Entity)", icon: HiOutlineDatabase, category: "Data Layer", internalLink: `${linkPrefix}/entity` },
  { id: 5, name: "Repository", icon: HiOutlineCollection, category: "Data Layer", internalLink: `${linkPrefix}/repository` },
  { id: 6, name: "Create DB session", icon: HiOutlineLink, category: "Data Layer", internalLink: `${linkPrefix}/dbsession` },
  { id: 7, name: "Schema (DTO)", icon: HiOutlineCode, category: "Validation", internalLink: `${linkPrefix}/schema` },
  { id: 8, name: "Exceptions", icon: HiOutlineExclamation, category: "Validation", internalLink: `${linkPrefix}/exceptions` },
  { id: 9, name: "Dependency Injection", icon: HiOutlineChip, category: "Architecture", internalLink: `${linkPrefix}/dependencyinjection` },
  { id: 10, name: "Service", icon: HiOutlineCollection, category: "Architecture", internalLink: `${linkPrefix}/service` },
  { id: 11, name: "Controller", icon: HiOutlineCode, category: "Architecture", internalLink: `${linkPrefix}/controller` },
  { id: 12, name: "main.py", icon: HiOutlineTerminal, category: "Setup", internalLink: `${linkPrefix}/main` },
  { id: 13, name: "Init DB", icon: HiOutlineDatabase, category: "Setup", internalLink: `${linkPrefix}/initDB` },
  { id: 14, name: "Pagination", icon: HiOutlineAdjustments, category: "Advanced", internalLink: `${linkPrefix}/pagination` },
  { id: 15, name: "Sorting", icon: HiOutlineAdjustments, category: "Advanced", internalLink: `${linkPrefix}/sorting` },
  { id: 16, name: "Dynamic Filtering", icon: HiOutlineAdjustments, category: "Advanced", internalLink: `${linkPrefix}/dynamic-filtering` },
];

const SyncOne2Many = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/sync-one2many" ? (
        <Subject title="FastAPI synchronous One 2 Many App ...">
          {
            <div className="mx-auto my-8 max-w-4xl rounded-2xl border border-yellow-200 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 p-6 shadow-xl shadow-indigo-500/50">
              <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-widest text-white">Curriculum</h2>
              </div>

              <div className="space-y-1.5">
                {subjects.map((subject) => {
                  const IconComponent = subject.icon;
                  const internalLink = subject.internalLink;
                  return (
                    <Link to={internalLink}>
                      <div
                        key={subject.id}
                        className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/50 p-1 px-3 transition-all duration-200 hover:bg-slate-800"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="w-8 rounded border border-slate-700 bg-slate-800 px-2 py-1 text-center font-mono text-xs font-bold text-slate-200 transition-colors group-hover:border-indigo-500 group-hover:text-yellow-300">
                            {String(subject.id).padStart(2, "0")}
                          </span>

                          <div className="rounded-lg bg-slate-800 p-2 text-slate-200 transition-colors group-hover:text-yellow-300">
                            <IconComponent className="h-5 w-5" />
                          </div>

                          <span className="text-base font-medium text-slate-200 transition-colors group-hover:text-yellow-300">{subject.name}</span>
                        </div>

                        <span className="rounded-full border border-slate-700/30 bg-slate-900 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400 opacity-0 transition-opacity duration-200 group-hover:text-yellow-300 group-hover:opacity-100">
                          {subject.category}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          }
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default SyncOne2Many;
