const TableCompareMerge = () => {
  const cascadeMergeComparison = [
    {
      action: "Parent Modified, Child added or modified",
      withCascadeMerge: "Parent and children Merges (Updates) ",
      withoutCascadeMerge: "Only parent Merges (Updates)  ",
    },
    {
      action: "Parent Modified, Child added or modified",
      withCascadeMerge: "Saved automatically",
      withoutCascadeMerge: "Only parent Merges (Updates) , (Unless explicitly Merging Child)",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">DB status with and w/o Merge</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">action</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">with Cascade Merge</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">without Cascade Merge</th>
            </tr>
          </thead>
          <tbody>
            {cascadeMergeComparison.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.action}</td>
                <td className="border border-gray-300 px-6 py-3">{row.withCascadeMerge}</td>
                <td className="border border-gray-300 px-6 py-3">{row.withoutCascadeMerge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableCompareMerge;
