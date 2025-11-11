/*
/spring/jpa/entity-validation#2.SizeRangeConstraints
Size Range Constraints --> (SPRING)(JPA)(entity validation)
*/
import { MainChildArea } from "../../../../../components";

const O2_SizeRangeConstraints = ({ anchor }: { anchor: string }) => {
  const data = [
    {
      annotation: "@Size(min=, max=)",
      description: "String, Collection, Map size / length",
      example: "@Size(min=3, max=20) private String password;",
    },
    {
      annotation: "@Min(value=)",
      description: "Numeric minimum",
      example: "@Min(18) private int age;",
    },
    {
      annotation: "@Max(value=)",
      description: "Numeric maximum",
      example: "@Max(100) private int age;",
    },
    {
      annotation: "@Positive",
      description: "Value must be > 0",
      example: "@Positive private int quantity;",
    },
    {
      annotation: "@PositiveOrZero",
      description: "Value ≥ 0",
      example: "@PositiveOrZero private int balance;",
    },
    {
      annotation: "@Negative",
      description: "Value < 0",
      example: "@Negative private int debt;",
    },
    {
      annotation: "@NegativeOrZero",
      description: "Value ≤ 0",
      example: "@NegativeOrZero private int offset;",
    },
  ];

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h1 className="mb-4 text-2xl font-bold">Size Range Constraints</h1>
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

export default O2_SizeRangeConstraints;
