const Table_3ColDesignPatternsBehavioral = () => {
  const behavioralPatterns = [
    {
      pattern: "Observer",
      usedFor: "Subscribe/Notify updates",
      example: "Listeners in GUI, EventBus",
    },
    {
      pattern: "Strategy",
      usedFor: "Swap business logic dynamically",
      example: "Comparator sorting",
    },
    {
      pattern: "Template Method",
      usedFor: "Fixed steps with variations",
      example: "HttpServlet.doGet/doPost",
    },
    {
      pattern: "Command",
      usedFor: "Represent an operation as an object",
      example: "Queued operations, Undo",
    },
    {
      pattern: "State",
      usedFor: "Behavior changes with state",
      example: "Thread lifecycle",
    },
    {
      pattern: "Chain of Responsibility",
      usedFor: "Pass request until handled",
      example: "Spring Security filters",
    },
    {
      pattern: "Iterator",
      usedFor: "Sequential traversal",
      example: "Iterator<E>",
    },
    {
      pattern: "Mediator",
      usedFor: "Centralized communication",
      example: "Chat room example",
    },
    {
      pattern: "Memento",
      usedFor: "Save/restore state",
      example: "Undo/Redo",
    },
    {
      pattern: "Visitor",
      usedFor: "Apply operations without changing objects",
      example: "AST processing",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Behavioral Design Patterns</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">pattern</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">usedFor</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">example</th>
            </tr>
          </thead>
          <tbody>
            {behavioralPatterns.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.pattern}</td>
                <td className="border border-gray-300 px-6 py-3">{row.usedFor}</td>
                <td className="border border-gray-300 px-6 py-3">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_3ColDesignPatternsBehavioral;
