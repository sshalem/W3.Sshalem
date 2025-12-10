const Table_4ColAuditingCompare = () => {
  const auditingComparison = [
    {
      feature: "Purpose",
      springDataJpaAuditing: "Track who/when",
      hibernateEnvers: "Track what/when/who (full history)",
      springDataEnvers: "Spring-friendly access to Envers",
    },
    {
      feature: "Stores previous values?",
      springDataJpaAuditing: "❌",
      hibernateEnvers: "✅",
      springDataEnvers: "✅",
    },
    {
      feature: "Creates audit tables?",
      springDataJpaAuditing: "❌",
      hibernateEnvers: "✅ (*_AUD)",
      springDataEnvers: "✅ (*_AUD)",
    },
    {
      feature: "Tracks who made change?",
      springDataJpaAuditing: "✅ (via @CreatedBy, etc.)",
      hibernateEnvers: "✅ (via custom revision entity)",
      springDataEnvers: "✅ (same as Envers)",
    },
    {
      feature: "Tracks timestamps?",
      springDataJpaAuditing: "✅",
      hibernateEnvers: "✅",
      springDataEnvers: "✅",
    },
    {
      feature: "Tracks changed fields?",
      springDataJpaAuditing: "❌",
      hibernateEnvers: "✅",
      springDataEnvers: "✅",
    },
    {
      feature: "Restores old versions?",
      springDataJpaAuditing: "❌",
      hibernateEnvers: "✅",
      springDataEnvers: "✅",
    },
    {
      feature: "Dependency needed",
      springDataJpaAuditing: "Included in Spring Data JPA",
      hibernateEnvers: "hibernate-envers",
      springDataEnvers: "spring-data-envers (depends on Envers)",
    },
    {
      feature: "Integration style",
      springDataJpaAuditing: "Simple annotations",
      hibernateEnvers: "Manual API (AuditReader)",
      springDataEnvers: "Repository-based (RevisionRepository)",
    },
    {
      feature: "Setup complexity",
      springDataJpaAuditing: "⭐ Easy",
      hibernateEnvers: "⚙️ Moderate",
      springDataEnvers: "🔧 Easy",
    },
    {
      feature: "Use case",
      springDataJpaAuditing: "Lightweight metadata",
      hibernateEnvers: "Full audit trail",
      springDataEnvers: "Same as Envers, with Spring convenience",
    },
  ];

  return (
    <section className="my-8">
      <h1 className="mb-4 text-2xl font-bold">🔍 Side-by-Side Comparison Table</h1>
      {/*  */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full border-collapse">
          <thead className="bg-blue-500 text-lg text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">feature</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Spring Jpa Auditing</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Hibernate Envers</th>
              <th className="border border-gray-300 px-3 py-2 text-start font-medium">Spring Data Envers</th>
            </tr>
          </thead>
          <tbody>
            {auditingComparison.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-6 py-3">{row.feature}</td>
                <td className="border border-gray-300 px-6 py-3">{row.springDataJpaAuditing}</td>
                <td className="border border-gray-300 px-6 py-3">{row.hibernateEnvers}</td>
                <td className="border border-gray-300 px-6 py-3">{row.springDataEnvers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table_4ColAuditingCompare;
