const TableCompareParameterAnnotations = () => {
  const annotations = [
    { annotation: "@RequestBody", purpose: "Binds the HTTP request body to a Java object (JSON/XML → Object)." },
    { annotation: "@PathVariable", purpose: "Extracts a value from the URI path." },
    { annotation: "@RequestParam", purpose: "Extracts query parameters from the URL." },
    { annotation: "@RequestHeader", purpose: "Reads HTTP headers." },
    { annotation: "@CookieValue", purpose: "Reads cookies from the request." },
    { annotation: "@ModelAttribute", purpose: "Binds form data or query params to a model object." },
    { annotation: "@RequestPart", purpose: "Handles multipart/form-data (file uploads)." },
    { annotation: "@SessionAttribute", purpose: "Accesses session attributes." },
    { annotation: "@Valid / @Validated", purpose: "Triggers validation on the bound object." },
  ];

  return (
    <div className="w-3/4 overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">annotation</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">purpose</th>
          </tr>
        </thead>
        <tbody>
          {annotations.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 px-6 py-3">{row.annotation}</td>
              <td className="border border-gray-300 px-6 py-3">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCompareParameterAnnotations;
