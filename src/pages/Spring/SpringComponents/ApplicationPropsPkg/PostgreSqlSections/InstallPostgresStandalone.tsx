import { BatchHighlight, SpanBlue } from "../../../../../components/Highlight";
import batch_command from "../../../../../assets/batch_command.jpg";
import start_postgresql_server from "../../../../../assets/start_postgresql_server.jpg";
import stop_postgresql_server from "../../../../../assets/stop_postgresql_server.jpg";

import pgadmin_1 from "../../../../../assets/pgadmin_1.jpg";
import pgadmin_2 from "../../../../../assets/pgadmin_2.jpg";
import pgadmin_3 from "../../../../../assets/pgadmin_3.jpg";

import { FaDiamond } from "react-icons/fa6";
import { GitHub, GitHubLiAnchor, IMG, MainChildArea } from "../../../../../components";

const InstallPostgresStandalone = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
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
      {/*  */}
      {/*  */}
      <GitHub>
        <GitHubLiAnchor
          gitLink={"https://github.com/sshalem/Spring-Boot/tree/main/01-Application-Properties-Logging/05_PostgreSql"}
          description={"Git Postgres"}
        />
        <GitHubLiAnchor
          gitLink={
            "https://github.com/sshalem/Spring-Boot/blob/main/01-Application-Properties-Logging/05_PostgreSql/3_Install_Postgres_standalone_windows.md"
          }
          description={"Git Install Postgres standalone on windows"}
        />
      </GitHub>
      {/*  */}
      {/*  */}
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl tracking-widest text-white">Install Steps </div>
      <ul className="mx-8">
        <li className="my-1 list-decimal">Download the zip file</li>
        <li className="my-1 list-decimal">
          Unzip it , it will unzip it to folder <SpanBlue>pgsql</SpanBlue> .
        </li>

        <li className="my-1 list-decimal">
          Open CMD , go to directory <SpanBlue> C:\Localdata\DB\postgresql\pgsql\bin</SpanBlue>
        </li>
        <li className="my-1 list-decimal">
          Type the following command below, It will install inside the folder of <SpanBlue>pgsql_data</SpanBlue> all the relevant data:
          <div className="my-10">
            <BatchHighlight batchCode={batchCode} />
          </div>
        </li>
        <li className="my-1 list-decimal">
          <div className="my-2">U will be asked to Enter new password for superuser , type the following :</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> username : &nbsp;<SpanBlue>postgres</SpanBlue>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> password : &nbsp;<SpanBlue>root</SpanBlue>
          </div>
        </li>
      </ul>
      <IMG img_name={batch_command} />
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">Start PostgreSql server</div>
      <div>Paste the command we got (See the image above)</div>
      <div className="my-10">
        <BatchHighlight batchCode={startPostgresqlServer} />
      </div>

      <IMG img_name={start_postgresql_server} />

      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">stop PostgreSql server</div>
      <div>Paste the command we got (See the image above)</div>
      <div className="my-10">
        <BatchHighlight batchCode={stopPostgresqlServer} />
      </div>

      <IMG img_name={stop_postgresql_server} />

      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">start pgAdmin4</div>

      <ul className="mx-8">
        <li className="my-1 list-decimal">
          Go to folder of C:\Localdata\DB\postgresql\pgsql\pgAdmin 4\runtime , click of the <SpanBlue>pgAdmin4.exe</SpanBlue> file
        </li>
        Type the password <SpanBlue>root</SpanBlue>
        <li className="my-1 list-decimal">Once the pgAdmin tool opens , create new server</li>
        Right click on the servers -{">"} Register -{">"} Server
        <div>
          <IMG img_name={pgadmin_1} />
        </div>
        <li className="my-1 list-decimal">
          Type a name , for example <SpanBlue>myServer</SpanBlue>
          <div>
            <IMG img_name={pgadmin_2} />
          </div>
        </li>
        <li className="my-1 list-decimal">
          <div className="my-2">In the tab of Connection type the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Hostname : &nbsp;<SpanBlue>localhost</SpanBlue>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Port : &nbsp;<SpanBlue>5432</SpanBlue>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Username : &nbsp;<SpanBlue>postgres</SpanBlue> &nbsp; (This is the user we
            created in Install steps )
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> password : &nbsp;<SpanBlue>root</SpanBlue> &nbsp; (This is the user we created in
            Install steps )
          </div>
          <div>
            <IMG img_name={pgadmin_3} />
          </div>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default InstallPostgresStandalone;

const batchCode = `initdb.exe -U postgres -A password -E utf8 -W -D C:\\Localdata\\DB\\postgresql\\pgsql_data`;

const startPostgresqlServer = `C:\\Windows\\System32>cd \\Localdata\\DB\\postgresql\\pgsql\\bin
C:\\Localdata\\DB\\postgresql\\pgsql\\bin>pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile start`;

const stopPostgresqlServer = `C:\\Windows\\System32>cd \\Localdata\\DB\\postgresql\\pgsql\\bin
C:\\Localdata\\DB\\postgresql\\pgsql\\bin>pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile stop`;
