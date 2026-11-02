import { MainChildArea } from "../../../../../components";

const O4_TopicsToCover = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Project folder structure</div>
        <article className="mx-auto w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <ol className="relative ml-3.5 space-y-4 border-l border-gray-200">
            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                1
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Project setup</span>
              <span className="text-base text-gray-600">Python virtual environments, pip, dependencies, FastAPI, Uvicorn.</span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                2
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Database configuration</span>
              <span className="text-base text-gray-600">PostgreSQL connection, SQLAlchemy engine, sessions and connection management.</span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                3
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Models and schemas</span>
              <span className="text-base text-gray-600">
                SQLAlchemy models versus Pydantic schemas, DTO equivalents, request/response validation.
              </span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                4
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Repository layer</span>
              <span className="text-base text-gray-600">CRUD operations, SQLAlchemy ORM, native SQL queries, joins, pagination and filtering.</span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                5
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Service layer</span>
              <span className="text-base text-gray-600">Business logic, dependency injection, transactions and rollback.</span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                6
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Controller layer</span>
              <span className="text-base text-gray-600">APIRouter, HTTP methods, status codes, response models and exception handling.</span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                7
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Advanced backend concepts</span>
              <span className="text-base text-gray-600">
                Authentication, JWT, authorization, middleware, logging, configuration and environment profiles.
              </span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                8
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Testing</span>
              <span className="text-base text-gray-600">
                Pytest, integration testing, PostgreSQL testing and testing the complete API-to-database flow.
              </span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                9
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">Asynchronous programming</span>
              <span className="text-base text-gray-600">Async SQLAlchemy, AsyncSession, async database operations and concurrency.</span>
            </li>

            <li className="relative flex flex-wrap items-baseline gap-x-2 pl-7">
              <span className="absolute -left-3 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-xs font-bold text-gray-800">
                10
              </span>
              <span className="whitespace-nowrap text-base font-bold text-gray-900">ML integration</span>
              <span className="text-base text-gray-600">
                Integrate Python ML libraries into the application, expose prediction endpoints and eventually connect ReactJS.
              </span>
            </li>
          </ol>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O4_TopicsToCover;
