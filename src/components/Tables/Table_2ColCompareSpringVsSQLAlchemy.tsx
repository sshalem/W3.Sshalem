const Table_2ColCompareSpringVsSQLAlchemy = () => {
  const springToSqlAlchemy = [
    { spring: "Spring Boot", sqlalchemy: "SQLAlchemy" },
    { spring: "application.yml", sqlalchemy: ".env + config.py" },
    { spring: "DataSource", sqlalchemy: "Engine" },
    { spring: "EntityManagerFactory", sqlalchemy: "sessionmaker" },
    { spring: "EntityManager", sqlalchemy: "Session" },
    { spring: "@Autowired", sqlalchemy: "Depends()" },
    { spring: "spring.jpa.show-sql", sqlalchemy: "echo=True" },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Mapping table (cheat sheet)</h1>
      {/*  */}
      <div className="w-1/2 overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">spring Feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">sqlalchemy Equivalent</th>
            </tr>
          </thead>
          <tbody>
            {springToSqlAlchemy.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-6 py-3">{row.spring}</td>
                <td className="border border-gray-300 px-6 py-3">{row.sqlalchemy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColCompareSpringVsSQLAlchemy;
