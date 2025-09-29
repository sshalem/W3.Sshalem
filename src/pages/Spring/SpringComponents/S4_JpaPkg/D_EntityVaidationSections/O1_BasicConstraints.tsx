import { MainChildArea } from "../../../../../components";

const O1_BasicConstraints = ({ anchor }: { anchor: string }) => {
  const data = [
    {
      annotation: "@NotNull",
      description: "The value must not be null",
      example: "@NotNull private String name;",
    },
    {
      annotation: "@NotEmpty",
      description: "The value must not be null or empty (for String, Collection, Map)",
      example: "@NotEmpty private List<String> items;",
    },
    {
      annotation: "@NotBlank",
      description: "The string must not be null or blank (ignores spaces)",
      example: "@NotBlank private String username;",
    },
    {
      annotation: "@Null",
      description: "The value must be null",
      example: "@Null private String middleName;",
    },
  ];

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h1 className="mb-4 text-2xl font-bold">Basic Constraints</h1>
        {/*  */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border-collapse">
            <thead className="bg-blue-500 text-lg text-white">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-start font-medium">annotation</th>
                <th className="border border-gray-300 px-3 py-2 text-start font-medium">description</th>
                <th className="border border-gray-300 px-3 py-2 text-start font-medium">example</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-6 py-3">{row.annotation}</td>
                  <td className="border border-gray-300 px-6 py-3">{row.description}</td>
                  <td className="border border-gray-300 px-6 py-3">{row.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O1_BasicConstraints;
