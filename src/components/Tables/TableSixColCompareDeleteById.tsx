const TableSixColCompareDeleteById = () => {
  const isolationLevels = [
    {
      feature: "READ_UNCOMMITTED",
      repository: "✅ Yes",
      serviceLayer: "✅ Yes",
      exception: "✅ Yes",
      SQL: "❌ Lowest",
      DB: "⚡ Fastest",
    },
    {
      feature: "READ_UNCOMMITTED",
      repository: "✅ Yes",
      serviceLayer: "✅ Yes",
      exception: "✅ Yes",
      SQL: "❌ Lowest",
      DB: "⚡ Fastest",
    },
    {
      feature: "READ_UNCOMMITTED",
      repository: "✅ Yes",
      serviceLayer: "✅ Yes",
      exception: "✅ Yes",
      SQL: "❌ Lowest",
      DB: "⚡ Fastest",
    },
    {
      feature: "READ_UNCOMMITTED",
      repository: "✅ Yes",
      serviceLayer: "✅ Yes",
      exception: "✅ Yes",
      SQL: "❌ Lowest",
      DB: "⚡ Fastest",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">🔐 Summary Table</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">isolationLevel</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">dirtyRead</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">nonRepeatableRead</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">phantomRead</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">consistency</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">performance</th>
            </tr>
          </thead>
          <tbody>
            {isolationLevels.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.isolationLevel}</td>
                <td className="border border-gray-300 px-6 py-3">{row.dirtyRead}</td>
                <td className="border border-gray-300 px-6 py-3">{row.nonRepeatableRead}</td>
                <td className="border border-gray-300 px-6 py-3">{row.phantomRead}</td>
                <td className="border border-gray-300 px-6 py-3">{row.consistency}</td>
                <td className="border border-gray-300 px-6 py-3">{row.performance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSixColCompareDeleteById;
