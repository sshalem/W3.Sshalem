const Table_3ColJPQLParameterComparison = () => {
  const jpqlParameterComparison = [
    { feature: "Syntax", namedParameters: ":paramName", positionedParameters: "?1, ?2, etc." },
    { feature: "Readability", namedParameters: "✅ High", positionedParameters: "❌ Lower" },
    { feature: "Order Sensitivity", namedParameters: "❌ No", positionedParameters: "✅ Yes" },
    { feature: "Maintenance", namedParameters: "✅ Easier", positionedParameters: "❌ Harder" },
    { feature: "Use Case", namedParameters: "Preferred for clarity", positionedParameters: "Sometimes used in dynamic queries" },
  ];
  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Named Parameters vs Position Parameters</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Named Parameters</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Positioned Parameters</th>
            </tr>
          </thead>
          <tbody>
            {jpqlParameterComparison.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.namedParameters}</td>
                <td className="border border-gray-300 px-6 py-3">{row.positionedParameters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_3ColJPQLParameterComparison;
