/*


*/

import { MainChildArea } from "../../../../../components";

const O2_SpringVsFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Spring Boot vs FastAPI architecture</div>
        {/* <article className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
          <div className="flex w-full max-w-2xl flex-col items-center space-y-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="w-full rounded-lg border border-indigo-100 bg-indigo-50 px-6 py-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">Client</h2>
              <p className="mt-0.5 text-sm text-gray-500">React / Postman</p>
            </div>

            <div className="text-lg text-gray-400">↓</div>

            <div className="w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-center shadow-sm">
              <h2 className="text-lg font-bold text-gray-800">Controller</h2>
              <p className="mt-0.5 text-sm text-gray-500">FastAPI Router · HTTP requests and responses</p>
            </div>

            <div className="text-lg text-gray-400">↓</div>

            <div className="w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-center shadow-sm">
              <h2 className="text-lg font-bold text-gray-800">Service</h2>
              <p className="mt-0.5 text-sm text-gray-500">Business logic · Validation · Transactions</p>
            </div>

            <div className="text-lg text-gray-400">↓</div>

            <div className="w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-center shadow-sm">
              <h2 className="text-lg font-bold text-gray-800">Repository</h2>
              <p className="mt-0.5 text-sm text-gray-500">SQLAlchemy · SQL queries · Database access</p>
            </div>

            <div className="text-lg text-gray-400">↓</div>

            <div className="w-full rounded-lg border border-emerald-100 bg-emerald-50 px-6 py-4 text-center">
              <h2 className="text-lg font-bold text-teal-900">PostgreSQL</h2>
              <p className="mt-0.5 text-sm text-teal-700/80">Tables · Relationships · Constraints · Indexes</p>
            </div>
          </div>
        </article> */}

        {/* <article className="flex items-center justify-center p-4">
          <div className="flex w-full max-w-md flex-col items-center space-y-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="w-full rounded border border-indigo-100 bg-indigo-50 px-3 py-2 text-center">
              <h2 className="text-sm font-bold text-gray-800">Client</h2>
              <p className="text-xs text-gray-500">React / Postman</p>
            </div>

            <div className="text-sm text-gray-400">↓</div>

            <div className="shadow-xs w-full rounded border border-gray-200 bg-white px-3 py-2 text-center">
              <h2 className="text-sm font-bold text-gray-800">Controller</h2>
              <p className="text-xs text-gray-500">FastAPI Router · HTTP requests and responses</p>
            </div>

            <div className="text-sm text-gray-400">↓</div>

            <div className="shadow-xs w-full rounded border border-gray-200 bg-white px-3 py-2 text-center">
              <h2 className="text-sm font-bold text-gray-800">Service</h2>
              <p className="text-xs text-gray-500">Business logic · Validation · Transactions</p>
            </div>

            <div className="text-sm text-gray-400">↓</div>

            <div className="shadow-xs w-full rounded border border-gray-200 bg-white px-3 py-2 text-center">
              <h2 className="text-sm font-bold text-gray-800">Repository</h2>
              <p className="text-xs text-gray-500">SQLAlchemy · SQL queries · Database access</p>
            </div>

            <div className="text-sm text-gray-400">↓</div>

            <div className="w-full rounded border border-emerald-100 bg-emerald-50 px-3 py-2 text-center">
              <h2 className="text-sm font-bold text-teal-900">PostgreSQL</h2>
              <p className="text-xs text-teal-700/80">Tables · Relationships · Constraints · Indexes</p>
            </div>
          </div>
        </article> */}

        <article className="flex flex-col items-start justify-center gap-8 bg-gray-50 p-6 md:flex-row">
          {/* Left Side: Architecture Diagram */}
          <div className="flex w-full max-w-md flex-col items-center space-y-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="w-full rounded-lg border border-indigo-100 bg-indigo-50 px-4 py-3 text-center">
              <h2 className="text-base font-bold text-gray-800">Client</h2>
              <p className="mt-0.5 text-sm text-gray-500">React / Postman</p>
            </div>

            <div className="text-xl text-gray-400">↓</div>

            <div className="shadow-xs w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-center">
              <h2 className="text-base font-bold text-gray-800">Controller</h2>
              <p className="mt-0.5 text-sm text-gray-500">FastAPI Router · HTTP requests and responses</p>
            </div>

            <div className="text-xl text-gray-400">↓</div>

            <div className="shadow-xs w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-center">
              <h2 className="text-base font-bold text-gray-800">Service</h2>
              <p className="mt-0.5 text-sm text-gray-500">Business logic · Validation · Transactions</p>
            </div>

            <div className="text-xl text-gray-400">↓</div>

            <div className="shadow-xs w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-center">
              <h2 className="text-base font-bold text-gray-800">Repository</h2>
              <p className="mt-0.5 text-sm text-gray-500">SQLAlchemy · SQL queries · Database access</p>
            </div>

            <div className="text-xl text-gray-400">↓</div>

            <div className="w-full rounded-lg border border-emerald-100 bg-emerald-50 px-4 py-3 text-center">
              <h2 className="text-base font-bold text-teal-900">PostgreSQL</h2>
              <p className="mt-0.5 text-sm text-teal-700/80">Tables · Relationships · Constraints · Indexes</p>
            </div>
          </div>

          {/* Right Side: Comparison Table Layout */}
          <div className="w-full max-w-2xl overflow-hidden rounded-xl border border-gray-200 bg-white text-base shadow-sm">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 font-bold text-gray-800">
                  <th className="px-5 py-4">Spring Boot (Java)</th>
                  <th className="px-5 py-4">FastAPI (Python)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="px-5 py-3">
                    <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1 font-mono text-sm">@RestController</span>
                  </td>
                  <td className="px-5 py-3 font-mono text-sm text-gray-600">APIRouter</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">
                    <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1 font-mono text-sm">@Service</span>
                  </td>
                  <td className="px-5 py-3">Service class</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">
                    <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1 font-mono text-sm">@Repository</span>
                  </td>
                  <td className="px-5 py-3">Repository class</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">JPA Entity</td>
                  <td className="px-5 py-3">SQLAlchemy Model</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">DTO</td>
                  <td className="px-5 py-3">Pydantic Schema</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Hibernate</td>
                  <td className="px-5 py-3">SQLAlchemy ORM</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">
                    <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1 font-mono text-sm">application.properties</span>
                  </td>
                  <td className="px-5 py-3">.env / Settings</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Spring Dependency Injection</td>
                  <td className="px-5 py-3">
                    <span className="font-mono text-sm text-gray-600">FastAPI Depends()</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3">
                    <span className="rounded border border-gray-200 bg-gray-100 px-2 py-1 font-mono text-sm">@Transactional</span>
                  </td>
                  <td className="px-5 py-3">SQLAlchemy transaction management</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Spring Data JPA</td>
                  <td className="px-5 py-3">SQLAlchemy queries</td>
                </tr>
                <tr>
                  <td className="px-5 py-3">Bean Validation</td>
                  <td className="px-5 py-3">Pydantic validation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O2_SpringVsFastApi;
