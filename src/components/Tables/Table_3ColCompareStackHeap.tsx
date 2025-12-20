const Table_3ColCompareStackHeap = () => {
  const memoryComparison = [
    {
      feature: "Memory type",
      stack: "Method execution",
      heap: "Objects",
    },
    {
      feature: "Thread safe",
      stack: "Yes (thread-local)",
      heap: "No (shared)",
    },
    {
      feature: "Speed",
      stack: "Very fast",
      heap: "Slower",
    },
    {
      feature: "Memory Size",
      stack: "Small",
      heap: "Large",
    },
    {
      feature: "Lifetime",
      stack: "Method scope",
      heap: "Until GC",
    },
    {
      feature: "Managed by",
      stack: "JVM",
      heap: "JVM",
    },
    {
      feature: "Error",
      stack: "StackOverflowError",
      heap: "OutOfMemoryError",
    },
    {
      feature: "Access",
      stack: "LIFO",
      heap: "Random",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Stack vs Heap (Quick Comparison)</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">stack</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">heap</th>
            </tr>
          </thead>
          <tbody>
            {memoryComparison.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.stack}</td>
                <td className="border border-gray-300 px-6 py-3">{row.heap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_3ColCompareStackHeap;
