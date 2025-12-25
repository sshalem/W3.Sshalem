const Table_3ColCompareMaven = () => {
  const mavenPhases = [
    {
      phase: "clean",
      command: "mvn clean",
      phasesExecuted: "deletes \\target folder",
    },
    {
      phase: "validate",
      command: "mvn validate",
      phasesExecuted: "validate",
    },
    {
      phase: "compile",
      command: "mvn compile",
      phasesExecuted: "validate → compile",
    },
    {
      phase: "test-compile",
      command: "mvn test-compile",
      phasesExecuted: "validate → compile → test-compile",
    },
    {
      phase: "test",
      command: "mvn test",
      phasesExecuted: "validate → compile → test-compile → test",
    },
    {
      phase: "package",
      command: "mvn package",
      phasesExecuted: "validate → compile → test-compile → test → package (creates JAR/WAR file)",
    },
    {
      phase: "install",
      command: "mvn install",
      phasesExecuted: "validate → compile → test-compile → test → package → install (Installs artifact to local repo (~/.m2/repository))",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-xl font-bold">🔐 Maven most used commands</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              {/* <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th> */}
              <th className="w-1/12 border border-gray-300 px-3 py-2 text-start font-medium">phase</th>
              <th className="w-1/12 border border-gray-300 px-3 py-2 text-start font-medium">command</th>
              <th className="w-4/12 border border-gray-300 px-3 py-2 text-start font-medium">phasesExecuted</th>
            </tr>
          </thead>
          <tbody>
            {mavenPhases.map((row, index) => (
              <tr key={index}>
                {/* <td className="border border-gray-300 px-6 py-3">{row.feature}</td> */}
                <td className="border border-gray-300 px-6 py-3">{row.phase}</td>
                <td className="border border-gray-300 px-6 py-3">{row.command}</td>
                <td className="border border-gray-300 px-6 py-3">{row.phasesExecuted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_3ColCompareMaven;
