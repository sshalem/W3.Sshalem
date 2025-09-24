const TableAuthenticationCompare = () => {
  const authComparison = [
    {
      feature: "Storage",
      sessionAuth: "Server-side (sessions DB)",
      jwtAuth: "Client-side (localStorage/cookie)",
    },
    {
      feature: "Scalability",
      sessionAuth: "Harder (sticky sessions, shared store)",
      jwtAuth: "Easier (stateless)",
    },
    {
      feature: "Revocation",
      sessionAuth: "Easy (delete session)",
      jwtAuth: "Hard (need blacklist or short expiry)",
    },
    {
      feature: "Token Size",
      sessionAuth: "Small (session ID)",
      jwtAuth: "Larger (header + payload + sig)",
    },
    {
      feature: "Best for",
      sessionAuth: "Traditional web apps",
      jwtAuth: "APIs, microservices, mobile apps",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">sessionAuth</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">jwtAuth</th>
          </tr>
        </thead>
        <tbody>
          {authComparison.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
              <td className="border border-gray-300 px-6 py-3">{row.sessionAuth}</td>
              <td className="border border-gray-300 px-6 py-3">{row.jwtAuth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAuthenticationCompare;
