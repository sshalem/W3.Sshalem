const Table_3ColComapreJDKversion = () => {
  const data = [
    {
      spring_Boot_Version: "2.x (early)",
      minimum_Required_JDK: "Java 8",
      compatible_JDK: "Java 8 - Java 11",
    },
    {
      spring_Boot_Version: "2.5.x - 2.6.x",
      minimum_Required_JDK: "Java 8",
      compatible_JDK: "Java 8 - Java 17",
    },
    {
      spring_Boot_Version: "2.7.x (latest 2.x)",
      minimum_Required_JDK: "Java 8",
      compatible_JDK: "Java 8 - Java 20",
    },
    {
      spring_Boot_Version: "3.x",
      minimum_Required_JDK: "Java 17",
      compatible_JDK: "Java 17 - Java 21+",
    },
    {
      spring_Boot_Version: "4.x",
      minimum_Required_JDK: "Java 17",
      compatible_JDK: "Java 17 - Java 21+",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Spring Boot Version</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">minimum Required JDK</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Compatible JDK Range (as of early 2026)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-6 py-3">{row.spring_Boot_Version}</td>
              <td className="border border-gray-300 px-6 py-3">{row.minimum_Required_JDK}</td>
              <td className="border border-gray-300 px-6 py-3">{row.compatible_JDK}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table_3ColComapreJDKversion;
