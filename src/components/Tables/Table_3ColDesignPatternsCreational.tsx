const Table_3ColDesignPatternsCreational = () => {
  const creationalPatterns = [
    {
      pattern: "Singleton",
      whatItSolves: "Only 1 instance of a class",
      javaExample: "Runtime, Logger",
    },
    {
      pattern: "Factory Method",
      whatItSolves: "Create objects without exposing creation logic",
      javaExample: "Calendar.getInstance()",
    },
    {
      pattern: "Abstract Factory",
      whatItSolves: "Families of related objects",
      javaExample: "GUI themes: WinFactory/MacFactory",
    },
    {
      pattern: "Builder",
      whatItSolves: "Construct complex objects step-by-step",
      javaExample: "StringBuilder, Lombok @Builder",
    },
    {
      pattern: "Prototype",
      whatItSolves: "Clone existing objects",
      javaExample: "clone()",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Creational Design Patterns</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">pattern</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">whatItSolves</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">javaExample</th>
            </tr>
          </thead>
          <tbody>
            {creationalPatterns.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.pattern}</td>
                <td className="border border-gray-300 px-6 py-3">{row.whatItSolves}</td>
                <td className="border border-gray-300 px-6 py-3">{row.javaExample}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_3ColDesignPatternsCreational;
