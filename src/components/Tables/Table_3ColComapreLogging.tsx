const Table_3ColComapreLogging = () => {
  const data = [
    {
      name: "(none)",
      path: "(none)",
      description: "Console only logging.",
    },
    {
      name: "Specific file (for example, my.log)",
      path: "(none)",
      description: "Writes to the location specified by logging.file.name. The location can be absolute or relative to the current directory.",
    },
    {
      name: "(none)",
      path: "Specific directory (for example, /var/log)",
      description:
        "Writes spring.log to the directory specified by logging.file.path. The directory can be absolute or relative to the current directory.",
    },
    {
      name: "Specific file",
      path: "Specific directory",
      description:
        "Writes to the location specified by logging.file.name and ignores logging.file.path. The location can be absolute or relative to the current directory.",
    },
  ];

  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead className="bg-blue-500 text-lg text-white">
          <tr>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">logging.file.name</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">logging.file.path</th>
            <th className="border border-gray-300 px-3 py-2 text-start font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-6 py-3">{row.name}</td>
              <td className="border border-gray-300 px-6 py-3">{row.path}</td>
              <td className="border border-gray-300 px-6 py-3">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table_3ColComapreLogging;
