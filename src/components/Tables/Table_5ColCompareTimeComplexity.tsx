const Table_5ColCompareTimeComplexity = () => {
  const timeComplexArray = [{ Structure: "Array", Access: "O(1)", Search: "O(n)", Insert: "❌", Delete: "❌" }];

  const timeComplexList = [
    { Structure: "ArrayList", Access: "O(1)", Search: "O(n)", Insert: "O(n)", Delete: "O(n)" },
    { Structure: "LinkedList", Access: "O(n)", Search: "O(n)", Insert: "O(1)", Delete: "O(1)" },
  ];

  const timeComplexSet = [
    { Structure: "HashSet", Add: "O(1) avg", Remove: "O(1) avg", Contains: "O(1) avg", Ordering: "❌ None" },
    { Structure: "LinkedHashSet", Add: "O(1)", Remove: "O(1)", Contains: "O(1)", Ordering: "✅ Insertion" },
    { Structure: "TreeSet", Add: "O(log n)", Remove: "O(log n)", Contains: "O(log n)", Ordering: "✅ Sorted" },
  ];

  const timeComplexMap = [
    { Structure: "HashMap", Put: "O(1) avg", Get: "O(1) avg", Remove: "O(1) avg", Ordering: "❌ None" },
    { Structure: "LinkedHashMap", Put: "O(1)", Get: "O(1)", Remove: "O(1)", Ordering: "✅ Insertion" },
    { Structure: "TreeMap", Put: "O(log n)", Get: "O(log n)", Remove: "O(log n)", Ordering: "✅ Sorted" },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">🔍 Time Complexity Array</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Structure</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Access</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Search</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Insert</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Delete</th>
            </tr>
          </thead>
          <tbody>
            {timeComplexArray.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.Structure}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Access}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Search}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Insert}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Delete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}
      <div className="my-4"></div>
      <h1 className="mb-4 text-2xl font-bold">🔍 Time Complexity List</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Structure</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Access</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Search</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Insert</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Delete</th>
            </tr>
          </thead>
          <tbody>
            {timeComplexList.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.Structure}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Access}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Search}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Insert}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Delete}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}
      <div className="my-4"></div>

      <h1 className="mb-4 text-2xl font-bold">🔍 Time Complexity Set</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Structure</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Add</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Remove</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Contains</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Ordering</th>
            </tr>
          </thead>
          <tbody>
            {timeComplexSet.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.Structure}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Add}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Remove}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Contains}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Ordering}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  */}
      <div className="my-4"></div>

      <h1 className="mb-4 text-2xl font-bold">🔍 Time Complexity Map</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Structure</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Put</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Get</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Remove</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Ordering</th>
            </tr>
          </thead>
          <tbody>
            {timeComplexMap.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.Structure}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Put}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Get}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Remove}</td>
                <td className="border border-gray-300 px-6 py-3">{row.Ordering}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_5ColCompareTimeComplexity;
