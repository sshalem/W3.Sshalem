const TableCompareJPQL = () => {
  const data = [
    {
      feature: "Target",
      jpql: "Java entities (objects)",
      sql: "Database tables",
    },
    {
      feature: "Language Level",
      jpql: "Object-oriented",
      sql: "Relational",
    },
    {
      feature: "Used In",
      jpql: "Java applications using JPA",
      sql: "Any application that accesses a database",
    },
    {
      feature: "Syntax",
      jpql: "Uses class and field names",
      sql: "Uses table and column names",
    },
    {
      feature: "Portability",
      jpql: "Database-agnostic",
      sql: "Database-specific",
    },
    {
      feature: "Execution",
      jpql: "Parsed and translated by JPA provider",
      sql: "Sent directly to the database engine",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">JPQL vs Native SQL</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">JPQL</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Native SQL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.jpql}</td>
                <td className="border border-gray-300 px-6 py-3">{row.sql}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableCompareJPQL;
