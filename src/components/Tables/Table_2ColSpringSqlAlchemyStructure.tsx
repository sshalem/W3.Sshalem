const Table_2ColSpringSqlAlchemyStructure = () => {
  const frameworkMapping = [
    { springBoot: "@SpringBootApplication", fastAPI: "main.py" },
    { springBoot: "application.yml", fastAPI: "core/config.py" },
    { springBoot: "DataSource", fastAPI: "SQLAlchemy engine" },
    { springBoot: "Entity", fastAPI: "SQLAlchemy models" },
    { springBoot: "DTO", fastAPI: "Pydantic schemas" },
    { springBoot: "@Repository", fastAPI: "repositories" },
    { springBoot: "@Service", fastAPI: "services" },
    { springBoot: "@RestController", fastAPI: "API routers" },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Spring vs FastAPI Terminology</h1>
      {/*  */}
      <div className="w-1/2 overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">spring</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">fastApi</th>
            </tr>
          </thead>
          <tbody>
            {frameworkMapping.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-6 py-3">{row.springBoot}</td>
                <td className="border border-gray-300 px-6 py-3">{row.fastAPI}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColSpringSqlAlchemyStructure;
