import { MainChildArea } from "../../../../../components";

const O3_PatternFormatConstraints = ({ anchor }: { anchor: string }) => {
  const data = [
    {
      annotation: '@Pattern(regexp="")',
      description: "Regex pattern match",
      example: '@Pattern(regexp="\\d{10}") private String phone;',
    },
    {
      annotation: "@Email",
      description: "Valid email format",
      example: "@Email private String email;",
    },
    {
      annotation: "@Past",
      description: "Date must be in the past",
      example: "@Past private LocalDate birthDate;",
    },
    {
      annotation: "@PastOrPresent",
      description: "Date ≤ today",
      example: "@PastOrPresent private LocalDate startDate;",
    },
    {
      annotation: "@Future",
      description: "Date > today",
      example: "@Future private LocalDate eventDate;",
    },
    {
      annotation: "@FutureOrPresent",
      description: "Date ≥ today",
      example: "@FutureOrPresent private LocalDate deadline;",
    },
  ];

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h1 className="mb-4 text-2xl font-bold">Pattern Format Constraints</h1>
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

export default O3_PatternFormatConstraints;
