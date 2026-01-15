const Table_2ColCompareSpringVsFastAPI = () => {
  const springToFastApiMapping = [
    { springFeature: '@RestController("/api")', fastApiEquivalent: 'APIRouter(prefix="/api")' },
    { springFeature: "consumes", fastApiEquivalent: "Body(...), Depends(...)" },
    { springFeature: "produces", fastApiEquivalent: "response_model=..." },
    { springFeature: "headers", fastApiEquivalent: "Header(...)" },
    { springFeature: "params", fastApiEquivalent: "Query(...)" },
    { springFeature: "@PathVariable", fastApiEquivalent: "function args" },
    { springFeature: "@RequestParam", fastApiEquivalent: "Query()" },
    { springFeature: "@RequestBody", fastApiEquivalent: "Pydantic model" },
    { springFeature: "@ResponseBody", fastApiEquivalent: "default in FastAPI" },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">Spring vs FastAPI Terminology</h1>
      {/*  */}
      <div className="w-1/2 overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">spring Feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">fastApi Equivalent</th>
            </tr>
          </thead>
          <tbody>
            {springToFastApiMapping.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-6 py-3">{row.springFeature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.fastApiEquivalent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_2ColCompareSpringVsFastAPI;
