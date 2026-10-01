const Table_2ColCompareMultihtreadingExecuterFramework = () => {
  const data = [
    {
      Component: "Executor (Interface)",
      Responsibility: "Executes submitted Runnable tasks.",
    },
    {
      Component: "ExecutorService (Interface extends Executor)",
      Responsibility: "Adds lifecycle management, task submission and result retrieval.",
    },
    {
      Component: "ScheduledExecutorService (interface extends ExecutorService) ",
      Responsibility: "Executes tasks after a delay or periodically.",
    },
    {
      Component: "AbstractExecutorService",
      Responsibility: "Class implements ExecutorService",
    },
    {
      Component: "ThreadPoolExecutor (Class extends AbstractExecutorService)",
      Responsibility: "Configurable thread pool implementation with a work queue and rejection policies.",
    },
    {
      Component: "Callable<V>",
      Responsibility: "A task that returns a result and may throw checked exceptions.",
    },
    {
      Component: "Future<V>",
      Responsibility: "Represents a pending or completed task result.",
    },
    {
      Component: "CompletableFuture<T>",
      Responsibility: "Supports asynchronous pipelines, composition and result handling.",
    },
    {
      Component: "Executors (Class)",
      Responsibility: "Factory methods for creating common executor configurations.",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Executer Framework main components</h1>
      {/*  */}
      <div className="w-3/4 overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Component</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Responsibility</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="w-2/4 border border-gray-300 px-6 py-3">{row.Component}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Responsibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColCompareMultihtreadingExecuterFramework;
