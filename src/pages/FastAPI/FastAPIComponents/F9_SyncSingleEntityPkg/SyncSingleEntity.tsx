/*


*/
import { Link, Outlet, useLocation } from "react-router-dom";
// import { Subject } from "../../../../components";
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

const subjects = [
  { id: 1, name: "Intro", icon: HiOutlineBookOpen, category: "Basics", internalLink: "/fastapi/sync-single/projectFolderStructure" },
  { id: 2, name: "Create FastAPI", icon: HiOutlineCode, category: "Setup", internalLink: "/fastapi/sync-single/createFastApi" },
  { id: 3, name: "Config SQLAlchemy", icon: HiOutlineAdjustments, category: "Setup", internalLink: "/fastapi/sync-single/configSqlAlchemy" },
  { id: 4, name: "Model (Entity)", icon: HiOutlineDatabase, category: "Data Layer", internalLink: "/fastapi/sync-single/entity" },
  { id: 5, name: "Repository", icon: HiOutlineCollection, category: "Data Layer", internalLink: "/fastapi/sync-single/repository" },
  { id: 6, name: "Create DB session", icon: HiOutlineLink, category: "Data Layer", internalLink: "/fastapi/sync-single/dbsession" },
  { id: 7, name: "Schema (DTO)", icon: HiOutlineCode, category: "Validation", internalLink: "/fastapi/sync-single/schema" },
  { id: 8, name: "Exceptions", icon: HiOutlineExclamation, category: "Validation", internalLink: "/fastapi/sync-single/exceptions" },
  { id: 9, name: "Dependency Injection", icon: HiOutlineChip, category: "Architecture", internalLink: "/fastapi/sync-single/dependencyinjection" },
  { id: 10, name: "Service", icon: HiOutlineCollection, category: "Architecture", internalLink: "/fastapi/sync-single/service" },
  { id: 11, name: "Controller", icon: HiOutlineCode, category: "Architecture", internalLink: "/fastapi/sync-single/controller" },
  { id: 12, name: "main.py", icon: HiOutlineTerminal, category: "Setup", internalLink: "/fastapi/sync-single/main" },
  { id: 13, name: "Init DB", icon: HiOutlineDatabase, category: "Setup", internalLink: "/fastapi/sync-single/initDB" },
  { id: 14, name: "Pagination", icon: HiOutlineAdjustments, category: "Advanced", internalLink: "/fastapi/sync-single/pagination" },
  { id: 15, name: "Sorting", icon: HiOutlineAdjustments, category: "Advanced", internalLink: "/fastapi/sync-single/sorting" },
  { id: 16, name: "Dynamic Filtering", icon: HiOutlineAdjustments, category: "Advanced", internalLink: "/fastapi/sync-single/dynamic-filtering" },
];

const SyncSingleEntity = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/sync-single" ? (
        // <Subject title="FastAPI Sync Single Entity App ...">
        //   {
        <div className="mx-auto my-8 max-w-4xl rounded-2xl border border-sky-400 bg-sky-500 p-6 shadow-xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-widest text-white">FastAPI synchronous Single Entity Course Curriculum</h2>
            <p className="textbase mt-1 text-white">Mastering FastAPI and SQLAlchemy layer by layer</p>
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
      ) : (
        //   }
        // </Subject>
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default SyncSingleEntity;
