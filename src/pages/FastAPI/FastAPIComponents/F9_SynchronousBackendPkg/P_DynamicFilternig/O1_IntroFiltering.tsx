/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanEmerald } from "../../../../../components/Highlight";

const mappings = [
  { parameter: "first_name", purpose: "Exact first-name match", sql: "first_name = ?" },
  { parameter: "last_name", purpose: "Exact last-name match", sql: "last_name = ?" },
  { parameter: "email", purpose: "Email match", sql: "email = ?" },
  { parameter: "min_age", purpose: "Minimum age", sql: "age >= ?" },
  { parameter: "max_age", purpose: "Maximum age", sql: "age <= ?" },
];

const O1_IntroFiltering = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Dynamic filtering</div>
        <div>
          <SpanEmerald>Dynamic filtering</SpanEmerald> means the client can send different combinations of optional filtering parameters, and the
          Repository builds the SQL query accordingly.
        </div>
        <ULdisc>
          <Li>Why is it called dynamic?</Li>
          <Li>Because the client doesn't have to provide all parameters.</Li>
          <Li>The Repository adds only the conditions for parameters that were actually provided.</Li>
          <Li>
            For our Customer API, imagine supporting:
            <div className="mx-auto w-full max-w-4xl overflow-x-auto rounded-lg bg-white p-6">
              <table className="w-full border-collapse text-left font-sans text-base text-[#111827]">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="pb-3 pr-4 font-semibold text-[#111827]">Parameter</th>
                    <th className="px-4 pb-3 font-semibold text-[#111827]">Purpose</th>
                    <th className="pb-3 pl-4 font-semibold text-[#111827]">SQL equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f4f6]">
                  {mappings.map((row, index) => (
                    <tr key={index} className="transition-colors hover:bg-[#f9fafb]">
                      {/* Parameter */}
                      <td className="py-4 pr-4 align-middle">
                        <span className="inline-block rounded bg-[#f3f4f6] px-2 py-1 font-mono text-xs text-[#1f2937]">{row.parameter}</span>
                      </td>
                      {/* Purpose */}
                      <td className="px-4 py-4 align-middle text-[#374151]">{row.purpose}</td>
                      {/* SQL Equivalent */}
                      <td className="py-4 pl-4 align-middle">
                        <span className="inline-block rounded bg-[#f3f4f6] px-2 py-1 font-mono text-xs text-[#1f2937]">{row.sql}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Li>
        </ULdisc>
        <div className="my-8 text-xl font-semibold">Define the API behavior</div>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroFiltering;
