const Table_5ColCompareJournalNohup = () => {
  const processManagementComparison = [
    {
      method: "nohup java -jar ...",
      autoRestart: "❌",
      startupOnBoot: "❌",
      journalctl: "❌",
      logFile: "✅",
    },
    {
      method: "systemd (this setup)",
      autoRestart: "✅",
      startupOnBoot: "✅",
      journalctl: "✅",
      logFile: "✅",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-xl font-bold">🔐 DB behaior when Exception thrown after deleteByEmail(...)</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              {/* <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th> */}
              <th className="w-1/5 border border-gray-300 px-3 py-2 text-start font-medium">method</th>
              <th className="w-1/5 border border-gray-300 px-3 py-2 text-start font-medium">autoRestart</th>
              <th className="w-1/5 border border-gray-300 px-3 py-2 text-start font-medium">startupOnBoot</th>
              <th className="w-1/5 border border-gray-300 px-3 py-2 text-start font-medium">journalctl</th>
              <th className="w-1/5 border border-gray-300 px-3 py-2 text-start font-medium">logFile</th>
            </tr>
          </thead>
          <tbody>
            {processManagementComparison.map((row, index) => (
              <tr key={index}>
                {/* <td className="border border-gray-300 px-6 py-3">{row.feature}</td> */}
                <td className="border border-gray-300 px-6 py-3">{row.method}</td>
                <td className="border border-gray-300 px-6 py-3">{row.autoRestart}</td>
                <td className="border border-gray-300 px-6 py-3">{row.startupOnBoot}</td>
                <td className="border border-gray-300 px-6 py-3">{row.journalctl}</td>
                <td className="border border-gray-300 px-6 py-3">{row.logFile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_5ColCompareJournalNohup;
