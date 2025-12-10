const TableFiveColCompareTransactionRules = () => {
  const isolationLevels = [
    {
      ExceptionType: "RuntimeException (unchecked)",
      CheckedOrUnchecked: "e.g., NullPointerException, custom RuntimeException",
      WillSpringRollBack: "✔ YES (Rollback)",
    },
    {
      ExceptionType: "Error",
      CheckedOrUnchecked: "e.g., OutOfMemoryError",
      WillSpringRollBack: "✔ YES (Rollback)",
    },
    {
      ExceptionType: "Exception (checked)",
      CheckedOrUnchecked: "e.g., IOException, SQLException",
      WillSpringRollBack: "❌ NO (Commit!)",
    },
    {
      ExceptionType: "Any Throwable NOT handled by Spring Tx",
      CheckedOrUnchecked: "-",
      WillSpringRollBack: "❌ NO (Commit!)",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-xl font-bold">🔐 Default Transaction Rollback Rules in Spring</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              {/* <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th> */}
              <th className="w-3/12 border border-gray-300 px-3 py-2 text-start font-medium">Exception Type</th>
              <th className="w-3/12 border border-gray-300 px-3 py-2 text-start font-medium">Checked Or Unchecked?</th>
              <th className="w-1/5 border border-gray-300 px-3 py-2 text-start font-medium">Will Spring RollBack?</th>
            </tr>
          </thead>
          <tbody>
            {isolationLevels.map((row, index) => (
              <tr key={index}>
                {/* <td className="border border-gray-300 px-6 py-3">{row.feature}</td> */}
                <td className="border border-gray-300 px-6 py-3">{row.ExceptionType}</td>
                <td className="border border-gray-300 px-6 py-3">{row.CheckedOrUnchecked}</td>
                <td className="border border-gray-300 px-6 py-3">{row.WillSpringRollBack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableFiveColCompareTransactionRules;
