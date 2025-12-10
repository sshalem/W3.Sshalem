const Table_4ColCompareDBInit = () => {
  const startupMethods = [
    {
      feature: "Type",
      CommandLineRunner: "Java Code",
      PostConstruct: "Java Annotation",
      dataSql: "SQL File",
    },
    {
      feature: "Exec Time",
      CommandLineRunner: "After Spring Boot startup",
      PostConstruct: "After bean initialization",
      dataSql: "Before app starts (JPA init time)",
    },
    {
      feature: "Can use Repositories?",
      CommandLineRunner: "✅ Yes",
      PostConstruct: "✅ Yes (careful with timing)",
      dataSql: "❌ No (raw SQL only)",
    },
    {
      feature: "Order control?",
      CommandLineRunner: "✅ Yes (@Order)",
      PostConstruct: "❌ No",
      dataSql: "❌ No",
    },
    {
      feature: "Flexibility",
      CommandLineRunner: "⭐⭐⭐⭐ (Full Java)",
      PostConstruct: "⭐⭐ (One-time method)",
      dataSql: "⭐ (SQL only)",
    },
    {
      feature: "Best for",
      CommandLineRunner: "Complex boot logic",
      PostConstruct: "Lightweight bean init",
      dataSql: "Simple data seeding",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">⚖️ Quick Comparison CommandLineRunner, PostConstruct, DataSql </h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">CommandLineRunner</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">PostConstruct</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">dataSql</th>
            </tr>
          </thead>
          <tbody>
            {startupMethods.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.CommandLineRunner}</td>
                <td className="border border-gray-300 px-6 py-3">{row.PostConstruct}</td>
                <td className="border border-gray-300 px-6 py-3">{row.dataSql}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_4ColCompareDBInit;
