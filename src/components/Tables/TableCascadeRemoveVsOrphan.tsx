const TableCascadeRemoveVsOrphan = () => {
  const scenarios = [
    {
      scenario: "Delete parent and all children",
      useCascadeRemove: true,
      useOrphanRemoval: false,
    },
    {
      scenario: "Remove child from parent list and delete it",
      useCascadeRemove: false,
      useOrphanRemoval: true,
    },
    {
      scenario: "Delete parent but keep children",
      useCascadeRemove: false,
      useOrphanRemoval: false,
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Cascade.Remove vs OrphanRemoval</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">scenario</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">useCascadeRemove</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">useOrphanRemoval</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.scenario}</td>
                <td className="border border-gray-300 px-6 py-3">{row.useCascadeRemove}</td>
                <td className="border border-gray-300 px-6 py-3">{row.useOrphanRemoval}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableCascadeRemoveVsOrphan;
