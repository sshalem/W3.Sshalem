/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";

const parameters = [
  { name: "page", defaultVal: "1", description: "Page number" },
  { name: "size", defaultVal: "10", description: "Number of records" },
  { name: "sort_by", defaultVal: "id", description: "Column to sort by" },
  { name: "direction", defaultVal: "asc", description: "Sorting direction" },
];

const O1_IntroSorting = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Sorting</div>
        <div>We'll implement:</div>
        <ULDecimal>
          <Li>Dynamic sorting by selected columns.</Li>
          <Li>ASC and DESC.</Li>
          <Li>Validation of allowed sorting columns.</Li>
          <Li>Default sorting.</Li>
          <Li>Pagination and sorting together.</Li>
          <Li>Protection against SQL injection through sorting parameters.</Li>
        </ULDecimal>
        <div className="my-8 text-xl font-semibold">Define the API behavior</div>
        <ULDecimal>
          <Li>
            We'll support these query parameters:
            <div className="ml-32 w-full max-w-4xl overflow-x-auto rounded-lg bg-white p-6">
              <table className="w-full border-collapse text-left font-sans text-sm text-[#111827]">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="pb-3 pr-4 font-semibold text-[#111827]">Parameter</th>
                    <th className="px-4 pb-3 font-semibold text-[#111827]">Default</th>
                    <th className="pb-3 pl-4 font-semibold text-[#111827]">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f4f6]">
                  {parameters.map((param, index) => (
                    <tr key={index} className="transition-colors hover:bg-[#f9fafb]">
                      {/* Parameter Name */}
                      <td className="py-4 pr-4 align-middle">
                        <span className="inline-block rounded bg-[#f3f4f6] px-2 py-1 font-mono text-xs text-[#1f2937]">{param.name}</span>
                      </td>
                      {/* Default Value */}
                      <td className="px-4 py-4 align-middle">
                        <span className="inline-block rounded bg-[#f3f4f6] px-2 py-1 font-mono text-xs text-[#1f2937]">{param.defaultVal}</span>
                      </td>
                      {/* Description */}
                      <td className="py-4 pl-4 align-middle text-[#374151]">{param.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Li>
          <Li>
            We'll allow sorting by:
            <ULdisc>
              <Li>id</Li>
              <Li>first_name</Li>
              <Li>last_name</Li>
              <Li>email</Li>
              <Li>age</Li>
            </ULdisc>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroSorting;
