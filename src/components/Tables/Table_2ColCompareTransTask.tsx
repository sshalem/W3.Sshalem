const Table_2ColCompareTransTask = () => {
  const data = [
    { event: "Coupon is sold out", correctAction: "Reject before charging" },
    { event: "Purchase record cannot be saved", correctAction: "Inventory decrement rolls back" },
    { event: "Payment is definitively declined", correctAction: "Mark failed and release reserved inventory" },
    { event: "Payment outcome is unknown", correctAction: "Keep pending and reconcile" },
    { event: "Payment succeeds and PAID is saved", correctAction: "Purchase confirmed" },
    { event: "Payment succeeds but saving PAID fails", correctAction: "Retry/reconcile using the same provider payment identity" },
  ];

  return (
    <div className="w-3/4 overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Event</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Correct action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="border border-gray-300 px-6 py-3">{row.event}</td>
              <td className="border border-gray-300 px-6 py-3">{row.correctAction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table_2ColCompareTransTask;
