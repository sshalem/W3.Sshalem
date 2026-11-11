/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const data = [
  { option: "save-update", behavior: "Adding a Customer can also add its associated Orders to the session." },
  { option: "merge", behavior: "Merge operations propagate to Orders." },
  { option: "refresh-expire", behavior: "Refresh/expire operations propagate." },
  { option: "expunge", behavior: "Removing Customer from session also expunges Orders." },
  { option: "all", behavior: "includes the first five options." },
  { option: "delete", behavior: "Deleting Customer also deletes its Orders. delete-orphan is added separately." },
  { option: "delete-orphan", behavior: "Removing an Order from Customer's collection deletes that Order." },
];

const O4_Cascade = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Cascade</div>
        <ULdisc>
          <Li>
            We configured:
            <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>
            <p className="mb-8 font-semibold"> Here is what it means:</p>
            <div className="w-full max-w-4xl overflow-x-auto bg-white p-4 font-sans text-base text-[#111111]">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="w-1/4 pb-3 pr-6 font-semibold text-[#111111]">Cascade option</th>
                    <th className="w-3/4 pb-3 pl-6 font-semibold text-[#111111]">Behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f4f6]">
                  {data.map((item, index) => (
                    <tr key={index} className="transition-colors hover:bg-[#fafafa]">
                      <td className="alignment-top py-3.5 pr-6">
                        <code className="rounded bg-[#f3f4f6] px-1.5 py-0.5 font-mono text-base text-[#374151]">{item.option}</code>
                      </td>
                      <td className="alignment-top py-3.5 pl-6 leading-relaxed text-[#374151]">{item.behavior}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_Cascade;

const _1_ = `cascade="all, delete-orphan"`;
