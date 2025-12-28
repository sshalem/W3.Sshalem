const Table_3ColCompareJarDeploy = () => {
  const deploymentComparison = [
    {
      aspect: "Setup",
      jarOnly: "Very simple",
      jarWithNginx: "Medium",
    },
    {
      aspect: "Security",
      jarOnly: "Basic",
      jarWithNginx: "Strong",
    },
    {
      aspect: "SSL handling",
      jarOnly: "Harder",
      jarWithNginx: "Easy",
    },
    {
      aspect: "Performance",
      jarOnly: "OK",
      jarWithNginx: "Better",
    },
    {
      aspect: "Static files",
      jarOnly: "Java handles",
      jarWithNginx: "NGINX handles",
    },
    {
      aspect: "Load balancing",
      jarOnly: "No",
      jarWithNginx: "Yes",
    },
    {
      aspect: "Zero-downtime deploy",
      jarOnly: "No",
      jarWithNginx: "Yes",
    },
    {
      aspect: "Production readiness",
      jarOnly: "⚠️ Limited",
      jarWithNginx: "✅ Recommended",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-xl font-bold">Side-by-side comparison</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              {/* <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th> */}
              <th className="w-2/12 border border-gray-300 px-3 py-2 text-start font-medium">Aspect</th>
              <th className="w-2/12 border border-gray-300 px-3 py-2 text-start font-medium">jar Only</th>
              <th className="w-2/12 border border-gray-300 px-3 py-2 text-start font-medium">jar With Nginx</th>
            </tr>
          </thead>
          <tbody>
            {deploymentComparison.map((row, index) => (
              <tr key={index}>
                {/* <td className="border border-gray-300 px-6 py-3">{row.feature}</td> */}
                <td className="border border-gray-300 px-6 py-3">{row.aspect}</td>
                <td className="border border-gray-300 px-6 py-3">{row.jarOnly}</td>
                <td className="border border-gray-300 px-6 py-3">{row.jarWithNginx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_3ColCompareJarDeploy;
