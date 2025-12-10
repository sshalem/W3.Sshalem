const Table_6ColIsolationLevelCompare = () => {
  const isolationLevels = [
    {
      isolationLevel: "READ_UNCOMMITTED",
      dirtyRead: "✅ Yes",
      nonRepeatableRead: "✅ Yes",
      phantomRead: "✅ Yes",
      consistency: "❌ Lowest",
      performance: "⚡ Fastest",
    },
    {
      isolationLevel: "READ_COMMITTED",
      dirtyRead: "❌ No",
      nonRepeatableRead: "✅ Yes",
      phantomRead: "✅ Yes",
      consistency: "⚠️ Medium",
      performance: "⚡ Fast",
    },
    {
      isolationLevel: "REPEATABLE_READ",
      dirtyRead: "❌ No",
      nonRepeatableRead: "❌ No",
      phantomRead: "✅ Yes",
      consistency: "✅ High",
      performance: "⚙️ Moderate",
    },
    {
      isolationLevel: "SERIALIZABLE",
      dirtyRead: "❌ No",
      nonRepeatableRead: "❌ No",
      phantomRead: "❌ No",
      consistency: "🧱 Strictest",
      performance: "🐢 Slowest",
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

export default Table_6ColIsolationLevelCompare;
