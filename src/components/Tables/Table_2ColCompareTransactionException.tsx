const Table_2ColCompareTransactionException = () => {
  const exceptionRules = [
    { exceptionType: "RuntimeException (unchecked)", rollback: "Yes ❌ (rollback)" },
    { exceptionType: "Error", rollback: "Yes ❌ (rollback)" },
    { exceptionType: "Checked Exception (like IOException)", rollback: "No ✔ (no rollback — transaction commits!)" },
  ];

  return (
    <div className="w-2/3 overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">exceptionType</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Does transaction roll back?</th>
          </tr>
        </thead>
        <tbody>
          {exceptionRules.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 px-6 py-3">{row.exceptionType}</td>
              <td className="border border-gray-300 px-6 py-3">{row.rollback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table_2ColCompareTransactionException;
