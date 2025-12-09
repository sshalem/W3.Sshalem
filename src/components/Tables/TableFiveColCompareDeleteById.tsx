const TableFiveColCompareDeleteById = () => {
  const isolationLevels = [
    {
      repository: "✅ Yes , By Default",
      serviceLayer: "❌ NO",
      exception: "❌ NO",
      SQL: "✅ Yes",
      DB: "✅ Yes",
    },
    {
      repository: "✅ Yes , By Default",
      serviceLayer: "✅ Yes",
      exception: "❌ NO",
      SQL: "❌ NO",
      DB: "❌ NO",
    },
    {
      repository: "✅ Yes , By Default",
      serviceLayer: "✅ Yes",
      exception: "✅ Yes",
      SQL: "✅ Yes",
      DB: "✅ Yes",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">🔐 DB behaior when Exception thrown after deleteById(...)</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              {/* <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th> */}
              <th className="w-3/12 border border-gray-300 px-3 py-2 text-start font-medium">Annotate repository method as @Transactional</th>
              <th className="w-3/12 border border-gray-300 px-3 py-2 text-start font-medium">Annotate serviceLayer method as @Transactional</th>
              <th className="w-1/5 border border-gray-300 px-3 py-2 text-start font-medium">
                MetaData method with "noRollBack=RuntimeException.class"
              </th>
              <th className="w-2/12 border border-gray-300 px-3 py-2 text-start font-medium">SQL delete executed</th>
              <th className="w-2/12 border border-gray-300 px-3 py-2 text-start font-medium">Delete from DB</th>
            </tr>
          </thead>
          <tbody>
            {isolationLevels.map((row, index) => (
              <tr key={index}>
                {/* <td className="border border-gray-300 px-6 py-3">{row.feature}</td> */}
                <td className="border border-gray-300 px-6 py-3">{row.repository}</td>
                <td className="border border-gray-300 px-6 py-3">{row.serviceLayer}</td>
                <td className="border border-gray-300 px-6 py-3">{row.exception}</td>
                <td className="border border-gray-300 px-6 py-3">{row.SQL}</td>
                <td className="border border-gray-300 px-6 py-3">{row.DB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableFiveColCompareDeleteById;
