const Table_2ColCompareTransTask2 = () => {
  const data = [
    { providerStatus: "SUCCEEDED", applicationAction: "Mark purchase PAID" },
    { providerStatus: "DECLINED", applicationAction: "Mark purchase FAILED and release inventory" },
    { providerStatus: "PROCESSING", applicationAction: "Keep pending and retry later" },
    { providerStatus: "NOT_FOUND", applicationAction: "Verify provider semantics before retrying or releasing" },
  ];

  return (
    <div className="w-3/4 overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Provider status</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Application action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 px-6 py-3">{row.providerStatus}</td>
              <td className="border border-gray-300 px-6 py-3">{row.applicationAction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table_2ColCompareTransTask2;
