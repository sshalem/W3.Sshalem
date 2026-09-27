const Table_2ColCompareMultihtreadingConcepts = () => {
  const data = [
    {
      Concpet: "Process",
      Meaning: "Running program example a JAVA app",
    },
    {
      Concpet: "Thread",
      Meaning: "Mechanism the CPU uses to execute multiple instructions sequentially (Multiple Tasks sequentially)",
    },
    {
      Concpet: "Task",
      Meaning: "A unit of work (Java Code) that needs to be performed",
    },
    {
      Concpet: "Multithreading",
      Meaning: "Multiple threads in a process",
    },
    {
      Concpet: "Concurrency",
      Meaning: "Multithreading with Single CPU core, executed By switching CPU between Runnable Threads. ",
    },
    {
      Concpet: "Parallelism",
      Meaning: "Multithreading with Multiple CPU cores, execute Runnable Threads simultaneously,  on different cores",
    },
    {
      Concpet: "Context Switching",
      Meaning: "Thread Context Switch is a process of switching the working from one thread to another",
    },
    {
      Concpet: "Single core",
      Meaning: "Threads can be concurrent, but not physically parallel",
    },
    {
      Concpet: "Multiple cores",
      Meaning: "Threads run in parallel, depends on number of Cores",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Multithreading Concepts in JAVA</h1>
      {/*  */}
      <div className="w-2/3 overflow-x-auto rounded-lg shadow-md">
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
                <td className="w-1/5 border border-gray-300 px-6 py-3">{row.Concpet}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColCompareMultihtreadingConcepts;
