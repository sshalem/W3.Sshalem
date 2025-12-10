const Table_3ColDesignPatternsStructural = () => {
  const structuralPatterns = [
    {
      pattern: "Adapter",
      whatItSolves: "Convert one interface to another",
      example: "ByteStream ↔ CharStream adapters",
    },
    {
      pattern: "Decorator",
      whatItSolves: "Add behavior without modifying original class",
      example: "BufferedInputStream",
    },
    {
      pattern: "Facade",
      whatItSolves: "Simpler interface for complex subsystem",
      example: "EntityManager hides JPA complexity",
    },
    {
      pattern: "Composite",
      whatItSolves: "Tree-like structure handling",
      example: "Directories/files structure",
    },
    {
      pattern: "Proxy",
      whatItSolves: "Represent another object",
      example: "Spring AOP proxies",
    },
    {
      pattern: "Bridge",
      whatItSolves: "Decouple abstraction & implementation",
      example: "JDBC Drivers",
    },
    {
      pattern: "Flyweight",
      whatItSolves: "Shared objects to reduce memory",
      example: "String pool",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Structural Design Patterns</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">pattern</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">whatItSolves</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">example</th>
            </tr>
          </thead>
          <tbody>
            {structuralPatterns.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.pattern}</td>
                <td className="border border-gray-300 px-6 py-3">{row.whatItSolves}</td>
                <td className="border border-gray-300 px-6 py-3">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_3ColDesignPatternsStructural;
