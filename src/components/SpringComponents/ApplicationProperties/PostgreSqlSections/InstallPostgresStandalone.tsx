import { Span, SpanText } from "../../../Highlight";
import psql_data_folder from "../../../../assets/psql_data_folder.jpg";

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
      <div className="my-8 inline-block rounded-md bg-emerald-500 px-2 py-1 text-white">Install Steps </div>
      <ul className="mx-8">
        <li className="list-decimal">Download the zip file</li>
        <li className="list-decimal">
          Uninstall it , it will uninstall it to folder <SpanText>pgsql</SpanText> .
        </li>
        <li className="list-decimal">
          Create a new folder as <Span>pgsql_data</Span>
          <div>
            <img src={psql_data_folder} alt="psql-data-folder-img" className="mx-20 my-10" />
          </div>
        </li>
        <li className="list-decimal">
          Open CMD , go to directory <Span> C:\Localdata\DB\postgresql\pgsql\bin</Span>
        </li>
        <li className="list-decimal">
          Type the following command below, It will install inside the folder of <Span>pgsql_data</Span> all the relevant data:
          
        </li>
      </ul>
    </article>
  );
};

export default InstallPostgresStandalone;
