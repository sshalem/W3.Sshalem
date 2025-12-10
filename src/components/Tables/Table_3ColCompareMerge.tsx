import { SpanGreen, SpanRed } from "../Highlight";

const Table_3ColCompareMerge = () => {
  const cascadeMergeComparison = [
    {
      operation: "Parent update",
      withCascadeMerge: "✅ Merged (Update) automatically",
      withoutCascadeMerge: "✅ Merged (Update) automatically",
    },
    {
      operation: "Existing child update",
      withCascadeMerge: "✅ Merged (Update) automatically",
      withoutCascadeMerge: "❌ Ignored unless manually merge()",
    },
    {
      operation: "New child added",
      withCascadeMerge: "✅ Merged (Update) automatically",
      withoutCascadeMerge: "❌ Must persist() manually",
    },
    {
      operation: "Child removed (with orphanRemoval)",
      withCascadeMerge: "✅ Merged (Update) automatically",
      withoutCascadeMerge: "❌ Ignored unless manually removed",
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
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Operation on Parent/Children</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">
                <SpanGreen>With</SpanGreen>CascadeType.MERGE
              </th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">
                <SpanRed>Without</SpanRed>CascadeType.MERGE
              </th>
            </tr>
          </thead>
          <tbody>
            {cascadeMergeComparison.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.operation}</td>
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

export default Table_3ColCompareMerge;
