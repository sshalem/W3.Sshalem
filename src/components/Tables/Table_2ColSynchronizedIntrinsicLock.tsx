const Table_2ColSynchronizedIntrinsicLock = () => {
  const data = [
    {
      Code: "synchronized void foo()",
      Intrinsiclock: "this",
    },
    {
      Code: "static synchronized void foo()",
      Intrinsiclock: "ClassName.class",
    },
    {
      Code: "synchronized(obj) {}",
      Intrinsiclock: "obj",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Intrinsic lock</h1>
      {/*  */}
      <div className="w-3/5 overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Code</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Instance lock (Intrinsic lock)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="w-1/3 border border-gray-300 px-6 py-3">{row.Code}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Intrinsiclock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColSynchronizedIntrinsicLock;
