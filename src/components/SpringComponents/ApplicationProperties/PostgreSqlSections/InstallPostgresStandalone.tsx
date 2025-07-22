import { BatchHighlight, Span, SpanText } from "../../../Highlight";
import psql_data_folder from "../../../../assets/psql_data_folder.jpg";
import batch_command from "../../../../assets/batch_command.jpg";
import start_postgresql_server from "../../../../assets/start_postgresql_server.jpg";
import stop_postgresql_server from "../../../../assets/stop_postgresql_server.jpg";

import pgadmin_1 from "../../../../assets/pgadmin_1.jpg";
import pgadmin_2 from "../../../../assets/pgadmin_2.jpg";
import pgadmin_3 from "../../../../assets/pgadmin_3.jpg";

import { FaDiamond } from "react-icons/fa6";
import ContentTitle from "../../../ContentAnchor";

const InstallPostgresStandalone = ({ anchor }: { anchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentTitle anchor={anchor} />
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
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl tracking-widest text-white">Install Steps </div>
      <ul className="mx-8">
        <li className="my-1 list-decimal">Download the zip file</li>
        <li className="my-1 list-decimal">
          Uninstall it , it will uninstall it to folder <SpanText>pgsql</SpanText> .
        </li>
        <li className="my-1 list-decimal">
          Create a new folder as <Span>pgsql_data</Span>
          <div>
            <img src={psql_data_folder} alt="psql-data-folder-img" className="mx-20 my-10" />
          </div>
        </li>
        <li className="my-1 list-decimal">
          Open CMD , go to directory <Span> C:\Localdata\DB\postgresql\pgsql\bin</Span>
        </li>
        <li className="my-1 list-decimal">
          Type the following command below, It will install inside the folder of <Span>pgsql_data</Span> all the relevant data:
          <div className="my-10">
            <BatchHighlight batchCode={batchCode} />
          </div>
        </li>
        <li className="my-1 list-decimal">
          <div className="my-2">U will be asked to Enter new password for superuser , type the following :</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> username : &nbsp;<Span>postgres</Span>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> password : &nbsp;<Span>postgres</Span>
          </div>
          <div>
            <img src={batch_command} alt="batch-command-img" className="mx-10 my-10" />
          </div>
        </li>
      </ul>
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">Start PostgreSql server</div>
      <div>Paste the command we got (See the image above)</div>
      <div className="my-10">
        <BatchHighlight batchCode={startPostgresqlServer} />
      </div>
      <div>
        <img src={start_postgresql_server} alt="start-postgresql-server-img" className="mx-10 my-10" />
      </div>
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">stop PostgreSql server</div>
      <div>Paste the command we got (See the image above)</div>
      <div className="my-10">
        <BatchHighlight batchCode={stopPostgresqlServer} />
      </div>
      <div>
        <img src={stop_postgresql_server} alt="start-postgresql-server-img" className="mx-10 my-10" />
      </div>
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">start pgAdmin4</div>

      <ul className="mx-8">
        <li className="my-1 list-decimal">
          Go to folder of C:\Localdata\DB\postgresql\pgsql\pgAdmin 4\runtime , click of the <Span>pgAdmin4.exe</Span> file
        </li>
        Type the password <Span>postgres</Span>
        <li className="my-1 list-decimal">Once the pgAdmin tool opens , create new server</li>
        Right click on the servers -{">"} Register -{">"} Server
        <div>
          <img src={pgadmin_1} alt="start-postgresql-server-img" className="mx-10 my-10" />
        </div>
        <li className="my-1 list-decimal">
          Type a name , for example <Span>myServer</Span>
          <div>
            <img src={pgadmin_2} alt="start-postgresql-server-img" className="mx-10 my-10" />
          </div>
        </li>
        <li className="my-1 list-decimal">
          <div className="my-2">In the tab of Connection type the following:</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Hostname : &nbsp;<Span>localhost</Span>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Port : &nbsp;<Span>5432</Span>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> Username : &nbsp;<Span>postgres</Span> &nbsp; (This is the user we created in
            Install steps )
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> password : &nbsp;<Span>postgres</Span> &nbsp; (This is the user we created in
            Install steps )
          </div>
          <div>
            <img src={pgadmin_3} alt="start-postgresql-server-img" className="mx-10 my-10" />
          </div>
        </li>
      </ul>
    </article>
  );
};

export default InstallPostgresStandalone;

const batchCode = `initdb.exe -U postgres -A password -E utf8 -W -D C:\\Localdata\\DB\\postgresql\\pgsql\\pgsql_data`;

const startPostgresqlServer = `C:\\Windows\\System32>cd \\Localdata\\DB\\postgresql\\pgsql\\bin
C:\\Localdata\\DB\\postgresql\\pgsql\\bin>pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile start`;

const stopPostgresqlServer = `C:\\Windows\\System32>cd \\Localdata\\DB\\postgresql\\pgsql\\bin
C:\\Localdata\\DB\\postgresql\\pgsql\\bin>pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile stop`;
