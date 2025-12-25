const Table_5ColCompareMaven = () => {
  const mavenPhases = [
    {
      phase: "validate",
      notes: "Checks pom.xml and project structure",
      command: "mvn validate",
      phasesExecuted: "validate",
    },
    {
      phase: "compile",
      notes: "Compiles main source code",
      command: "mvn compile",
      phasesExecuted: "validate → compile",
    },
    {
      phase: "test-compile",
      notes: "Compiles test code",
      command: "mvn test-compile",
      phasesExecuted: "validate → compile → test-compile",
    },
    {
      phase: "test",
      notes: "Runs unit tests",
      command: "mvn test",
      phasesExecuted: "validate → compile → test-compile → test",
    },
    {
      phase: "package",
      notes: "Creates JAR/WAR in target/",
      command: "mvn package",
      phasesExecuted: "validate → compile → test-compile → test → package",
    },
    {
      phase: "install",
      notes: "Installs artifact to local repo (~/.m2/repository)",
      command: "mvn install",
      phasesExecuted: "validate → compile → test-compile → test → package → install",
    },
    {
      phase: "clean",
      notes: "Deletes previous build output",
      command: "mvn clean",
      phasesExecuted: "clean (if mvn clean install then clean → validate → compile → test-compile → test → package → install)",
    },
    {
      phase: "build (informal)",
      notes: "Not Maven command; need to define the goal ",
      command: "define as clean package",
      phasesExecuted: "validate → compile → test-compile → test → package",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-xl font-bold">🔐Maven most used commands</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              {/* <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th> */}
              <th className="w-1/12 border border-gray-300 px-3 py-2 text-start font-medium">phase</th>
              <th className="w-2/12 border border-gray-300 px-3 py-2 text-start font-medium">notes</th>
              <th className="w-1/12 border border-gray-300 px-3 py-2 text-start font-medium">command</th>
              <th className="w-4/12 border border-gray-300 px-3 py-2 text-start font-medium">phasesExecuted</th>
            </tr>
          </thead>
          <tbody>
            {mavenPhases.map((row, index) => (
              <tr key={index}>
                {/* <td className="border border-gray-300 px-6 py-3">{row.feature}</td> */}
                <td className="border border-gray-300 px-6 py-3">{row.phase}</td>
                <td className="border border-gray-300 px-6 py-3">{row.notes}</td>
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

export default Table_5ColCompareMaven;
