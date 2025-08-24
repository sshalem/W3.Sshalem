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
    <div style={{ padding: "20px" }}>
      <table border={1} cellPadding="10" style={{ borderCollapse: "collapse", width: "50%" }}>
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 text-start font-medium">STS/Eclipse</th>
            <th className="border border-gray-300 text-start font-medium">IntelliJ</th>
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
