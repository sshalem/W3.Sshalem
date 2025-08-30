const TableCompareTerminology = () => {
  const data = [
    {
      sts: "worksapce",
      intellij: "Project",
    },
    {
      sts: "Project",
      intellij: "Module",
    },
    {
      sts: "JDK",
      intellij: "SDK",
    },
    {
      sts: "Classpath variable	",
      intellij: "path variable",
    },
    {
      sts: "Library",
      intellij: "Library",
    },
    {
      sts: "Facet",
      intellij: "Facet",
    },
  ];

  return (
    <div className="w-1/2 overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">STS/Eclipse</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">IntelliJ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 px-6 py-3">{row.sts}</td>
              <td className="border border-gray-300 px-6 py-3">{row.intellij}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCompareTerminology;
