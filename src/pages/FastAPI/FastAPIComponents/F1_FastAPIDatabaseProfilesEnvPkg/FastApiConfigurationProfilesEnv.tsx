/*


*/
import { Link, Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";
import { HiOutlineBookOpen, HiOutlineCode, HiOutlineAdjustments, HiOutlineDatabase, HiOutlineLink } from "react-icons/hi";

const linkPrefix = "/fastapi/database-env-profiles";

const subjects = [
  { id: 1, name: "sqlite3", icon: HiOutlineBookOpen, internalLink: `${linkPrefix}/sqlite3` },
  { id: 2, name: "MySql", icon: HiOutlineCode, internalLink: `${linkPrefix}/mysql` },
  { id: 3, name: "Postgresql", icon: HiOutlineAdjustments, internalLink: `${linkPrefix}/postgresql` },
  { id: 4, name: "Env", icon: HiOutlineDatabase, internalLink: `${linkPrefix}/env` },
  { id: 6, name: "Profiles", icon: HiOutlineLink, internalLink: `${linkPrefix}/profiles` },
  { id: 7, name: "DB Init (data.sql)", icon: HiOutlineCode, internalLink: `${linkPrefix}/db-init-data-sql` },
];

const FastApiConfigurationProfilesEnv = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/fastapi/database-env-profiles" ? (
        <Subject title="DataBase , Core Profiles Env ...">
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
export default FastApiConfigurationProfilesEnv;
