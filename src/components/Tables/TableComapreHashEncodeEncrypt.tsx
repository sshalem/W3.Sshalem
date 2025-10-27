const TableComapreHashEncodeEncrypt = () => {
  const comparisonData = [
    {
      feature: "Reversible",
      encryption: "✅ Yes (with key)",
      encoding: "✅ Yes",
      hashing: "❌ No",
    },
    {
      feature: "Purpose",
      encryption: "Confidentiality",
      encoding: "Compatibility",
      hashing: "Integrity/Security",
    },
    {
      feature: "Key Required",
      encryption: "✅ Yes",
      encoding: "❌ No",
      hashing: "❌ No",
    },
    {
      feature: "Common Uses",
      encryption: "Secure data",
      encoding: "Data transmission",
      hashing: "Passwords, checksums",
    },
    {
      feature: "example",
      encryption: "AES, RSA, TLS.",
      encoding: "Base64 encoding turns binary data into ASCII text",
      hashing: "SHA-256, MD5.",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">🔁 Summary Table</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">encryption</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">encoding</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">hashing</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.encryption}</td>
                <td className="border border-gray-300 px-6 py-3">{row.encoding}</td>
                <td className="border border-gray-300 px-6 py-3">{row.hashing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableComapreHashEncodeEncrypt;
