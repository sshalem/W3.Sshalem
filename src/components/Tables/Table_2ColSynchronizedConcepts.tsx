const Table_2ColSynchronizedConcepts = () => {
  const data = [
    {
      Concpet: "Instance lock",
      Meaning: "The lock associated with a particular object",
    },
    {
      Concpet: "Monitor",
      Meaning: "JVM synchronization mechanism associated with that object",
    },
    {
      Concpet: "Acquire monitor",
      Meaning: "A thread obtains ownership of that object's monitor",
    },
    {
      Concpet: "Release monitor",
      Meaning: "The thread gives up ownership",
    },
    {
      Concpet: "synchronized instance method",
      Meaning: "Acquire the monitor of this before executing",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Synchronized Concepts in JAVA</h1>
      {/*  */}
      <div className="w-3/5 overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Concpet</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="w-1/3 border border-gray-300 px-6 py-3">{row.Concpet}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColSynchronizedConcepts;
