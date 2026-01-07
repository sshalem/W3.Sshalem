const Table_2ColCompareDjangoTerminology = () => {
  const data = [
    {
      Spring: "@Entity",
      Django: "models.py (models.Model)",
    },
    {
      Spring: "@RestController",
      Django: "Django Views",
    },
    {
      Spring: "@RequestMapping",
      Django: "urls.py",
    },
    {
      Spring: "DTO Object in Spring",
      Django: "ModelSerializer",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Spring vs Django Terminology</h1>
      {/*  */}
      <div className="w-1/2 overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Spring</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Django</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-6 py-3">{row.Spring}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Django}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColCompareDjangoTerminology;
