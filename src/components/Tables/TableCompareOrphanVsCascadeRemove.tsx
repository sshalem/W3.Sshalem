const TableCompareOrphanVsCascadeRemove = () => {
  const behaviors = [
    {
      orphanRemoval: "❌ false",
      cascadeRemove: "❌ false",
      removingChild: "Child is just disassociated (FK set to null if nullable). Child row stays in DB.",
      deletingParent: "Parent is deleted only. Children remain → likely foreign key violation unless FK is nullable.",
    },
    {
      orphanRemoval: "✅ true",
      cascadeRemove: "❌ false",
      removingChild: "Child is deleted from DB when removed from collection.",
      deletingParent: "Parent is deleted only. Children remain → likely foreign key violation unless you manually delete children first.",
    },
    {
      orphanRemoval: "❌ false",
      cascadeRemove: "✅ true",
      removingChild: "Child is just disassociated, stays in DB.",
      deletingParent: "Parent is deleted → Hibernate will also delete all children automatically (cascade).",
    },
    {
      orphanRemoval: "✅ true",
      cascadeRemove: "✅ true",
      removingChild: "Child is deleted from DB when removed from collection.",
      deletingParent: "Parent is deleted → Hibernate will also delete all children automatically (cascade).",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">orphanRemocal vs Cascade.Remove</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">orphanRemoval</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">cascadeRemove</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">removingChild</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">deletingParent</th>
            </tr>
          </thead>
          <tbody>
            {behaviors.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.orphanRemoval}</td>
                <td className="border border-gray-300 px-6 py-3">{row.cascadeRemove}</td>
                <td className="border border-gray-300 px-6 py-3">{row.removingChild}</td>
                <td className="border border-gray-300 px-6 py-3">{row.deletingParent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableCompareOrphanVsCascadeRemove;
