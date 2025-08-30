const TableEntityValidation = () => {
  const data = [
    {
      feature: "Mapping style",
      modelMapper: "Runtime (reflection)",
      mapStruct: "Compile-time (code generation)",
    },
    {
      feature: "Performance",
      modelMapper: "Slower",
      mapStruct: "Very fast",
    },
    {
      feature: "Type safety",
      modelMapper: "Errors at runtime",
      mapStruct: "Errors at compile-time",
    },
    {
      feature: "Setup",
      modelMapper: "Almost zero config",
      mapStruct: "Needs mapper interfaces + annotations",
    },
    {
      feature: "Flexibility",
      modelMapper: "Dynamic, less strict",
      mapStruct: "Explicit, strict",
    },
    {
      feature: "Best for",
      modelMapper: "Small/quick apps",
      mapStruct: "Large/enterprise apps",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">ModelMapper vs MapStruct</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">ModelMapper</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">MapStruct</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.modelMapper}</td>
                <td className="border border-gray-300 px-6 py-3">{row.mapStruct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableEntityValidation;
