const InstallPostgresStandalone = ({ idAnchor }: { idAnchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={idAnchor}>
      <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">
        Install PostgreSql standalone on windows
      </div>
      <div className="my-4">Links :</div>
      <ul className="mx-8">
        <li className="list-disc">
          <a href="https://www.youtube.com/watch?v=btxwPwnU-oI" target="_blank" className="text-blue-500">
            https://www.youtube.com/watch?v=btxwPwnU-oI
          </a>
        </li>
        <li className="list-disc">
          <a href="https://roytuts.com/how-to-install-postgresql-zip-archive-in-windows/" target="_blank" className="text-blue-500">
            https://roytuts.com/how-to-install-postgresql-zip-archive-in-windows/
          </a>
        </li>
      </ul>
      <div className="my-4 text-xl">Steps</div>
      <ul className="mx-8">
        <li className="list-decimal">Download the zip file</li>
        <li className="list-decimal">Uninstall it , it will uninstall it to folder pgsql .</li>
        <li className="list-decimal">Create a new folder as pgsql_data </li>
      </ul>
    </article>
  );
};

export default InstallPostgresStandalone;
