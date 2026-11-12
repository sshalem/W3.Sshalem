/*


*/
import { MainChildArea } from "../../../../../components";

const steps = [
  {
    number: 1,
    title: "Service calls Repository",
    code: "repository.create(data)",
    description: null,
  },
  {
    number: 2,
    title: "Repository adds the object",
    code: "db.add(customer)",
    description: "The object becomes pending in the SQLAlchemy session.",
  },
  {
    number: 3,
    title: "Repository flushes",
    code: "db.flush()",
    description: "SQL INSERT executes inside the current transaction. The database generates the ID.",
  },
  {
    number: 4,
    title: "Repository refreshes",
    code: "db.refresh(customer)",
    description: "Reloads the object from the database.",
  },
  {
    number: 5,
    title: "Service commits",
    code: "db.commit()",
    description: "The transaction becomes permanent.",
  },
];

const O1_1_TransactionLifCycle = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Transaction Life cycle</div>
      </section>
      <div dir="ltr" className="min-h-screen bg-[#f4f7f6] p-8 font-sans text-slate-900">
        <div className="max-w-3xl">
          {/* כותרת ראשית */}
          <h2 className="mb-6 text-xl font-semibold tracking-tight text-slate-900">Transaction lifecycle</h2>

          {/* רשימת השלבים */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.number} className="flex items-stretch gap-4">
                {/* עמודת מספר וקו אנכי */}
                <div className="flex w-4 flex-col items-center">
                  <span className="text-[15px] font-medium leading-6 text-slate-500">{step.number}</span>
                  <div className="mt-1.5 w-[1.5px] flex-1 bg-slate-200" />
                </div>

                {/* תוכן השלב */}
                <div className="flex-1 pb-1">
                  <h3 className="text-[16px] font-semibold leading-6 text-slate-900">{step.title}</h3>

                  {/* בלוק הקוד */}
                  <div className="mt-2">
                    <code className="inline-block rounded-md bg-[#eaefed] px-2.5 py-1 font-mono text-[14px] text-slate-800">{step.code}</code>
                  </div>

                  {/* תיאור (אם קיים) */}
                  {step.description && <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.description}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* תגית סטטוס תחתונה */}
          <div className="mt-6">
            <span className="inline-flex items-center rounded-md bg-[#d8f3e5] px-2.5 py-1 text-[13px] font-semibold text-[#15803d]">
              Transaction committed
            </span>
          </div>
        </div>
      </div>
    </MainChildArea>
  );
};

export default O1_1_TransactionLifCycle;
