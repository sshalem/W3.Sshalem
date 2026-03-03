import { BatchHighlight, SpanYellow } from "../../../../../components/Highlight";
import batch_command from "../../../../../assets/batch_command.jpg";
import start_postgresql_server from "../../../../../assets/start_postgresql_server.jpg";
import stop_postgresql_server from "../../../../../assets/stop_postgresql_server.jpg";

import pgadmin_1 from "../../../../../assets/pgadmin_1.jpg";
import pgadmin_2 from "../../../../../assets/pgadmin_2.jpg";
import pgadmin_3 from "../../../../../assets/pgadmin_3.jpg";

import { FaDiamond } from "react-icons/fa6";
import { GitHub, GitHubLiAnchor, IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";

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
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl tracking-widest text-white">Step 1 : Install Steps </div>
      <ul className="mx-8">
        <li className="my-1 list-decimal">Download the zip file</li>
        <li className="my-1 list-decimal">
          Unzip it , it will unzip it to folder <SpanYellow>pgsql</SpanYellow> .
        </li>

        <li className="my-1 list-decimal">
          Open CMD , go to directory <SpanYellow> C:\Localdata\DB\postgresql\pgsql\bin</SpanYellow>
          <div className="my-10">
            <BatchHighlight batchCode={_2_} />
          </div>
        </li>
        <li className="my-1 list-decimal">
          Type the following command below, It will install inside the folder of <SpanYellow>pgsql_data</SpanYellow> all the relevant data:
          <div className="my-10">
            <BatchHighlight batchCode={batchCode} />
          </div>
        </li>
        <li className="my-1 list-decimal">
          <div className="my-2">U will be asked to Enter new password for superuser , type the following :</div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> username : &nbsp;<SpanYellow>postgres</SpanYellow>
          </div>
          <div className="my-1 ml-8 flex">
            <FaDiamond className="mr-2 self-center text-[0.6rem]" /> password : &nbsp;<SpanYellow>postgres</SpanYellow>
          </div>
        </li>
      </ul>
      <IMG img_name={batch_command} />
      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">
        Step 2 : Start PostgreSql server
      </div>
      <div>
        In order to be able to launch <SpanYellow>PgAdmin4</SpanYellow> , we need to
        <ULdisc>
          <Li>
            <SpanYellow>start PostgreSql server</SpanYellow>
          </Li>
          <Li>
            Otherwise , PgAdmin4 will give <SpanYellow>connection failed</SpanYellow>
          </Li>
          <Li>Thus, copy/paste command below</Li>
        </ULdisc>
      </div>
      <div className="my-10">
        <BatchHighlight batchCode={startPostgresqlServer} />
        <IMG img_name={start_postgresql_server} />
      </div>
      <div>
        Instead of writing the commands ,Better solution to:
        <ULdisc>
          <Li>
            Create a batch file <SpanYellow>psql_start.bat</SpanYellow> on desktop
          </Li>
          <Li>Copy/Paste the commands below</Li>
          <Li>Run the batch file</Li>
          <BatchHighlight batchCode={_start_} />
        </ULdisc>
      </div>

      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">
        Step 3 : stop PostgreSql server
      </div>
      <div>
        I must <SpanYellow>stop PostgreSql server</SpanYellow> , otherwise
        <ULdisc>
          <Li>If I try to run again the server, I get error</Li>
          <Li>
            Thus run commands below to <SpanYellow>stop PostgreSql server</SpanYellow>
          </Li>
          <Li>of Paste the command we got (See the image above)</Li>
        </ULdisc>
      </div>
      <div className="my-10">
        <BatchHighlight batchCode={stopPostgresqlServer} />
      </div>

      <IMG img_name={stop_postgresql_server} />

      <div>
        Instead of writing the commands ,Better solution to:
        <ULdisc>
          <Li>
            Create a batch file <SpanYellow>psql_stop.bat</SpanYellow> on desktop
          </Li>
          <Li>Copy/Paste the commands below</Li>
          <Li>Run the batch file</Li>
          <BatchHighlight batchCode={_stop_} />
        </ULdisc>
      </div>

      <div className="my-8 inline-block rounded-md bg-teal-500 px-2 py-1 text-xl capitalize tracking-widest text-white">Step 4 : start pgAdmin4</div>

      <ULDecimal>
        <Li>
          We must <SpanYellow>start PostgreSql server</SpanYellow> , otherwise connection will fail
        </Li>
        <Li>
          Go to folder of <SpanYellow>C:\Localdata\DB\postgresql\pgsql\pgAdmin 4\runtime</SpanYellow>
          <ULdisc>
            <Li>
              click of the <SpanYellow>pgAdmin4.exe</SpanYellow>
            </Li>
            <Li>
              Type the password <SpanYellow>postgres</SpanYellow>
            </Li>
          </ULdisc>
        </Li>
        <Li>
          Once the pgAdmin tool opens , need to create new server
          <ULdisc>
            <Li>
              Right click on the <SpanYellow>Servers</SpanYellow> -{">"} <SpanYellow>Register</SpanYellow> -{">"} <SpanYellow>Server</SpanYellow>
              <IMG img_name={pgadmin_1} />
            </Li>
            <Li>
              On the <SpanYellow>General</SpanYellow> tab Type a name , for example <SpanYellow>myServer</SpanYellow>
              <IMG img_name={pgadmin_2} />
            </Li>
          </ULdisc>
        </Li>
        <Li>
          In the tab of <SpanYellow>Connection</SpanYellow> tab type the following:
          <ULdisc>
            <Li>
              Hostname : &nbsp;<SpanYellow>localhost</SpanYellow>
            </Li>
            <Li>
              Port : &nbsp;<SpanYellow>5432</SpanYellow>
            </Li>
            <Li>
              Username : &nbsp;<SpanYellow>postgres</SpanYellow> &nbsp; (This is the user we created in Install steps )
            </Li>
            <Li>
              password : &nbsp;<SpanYellow>postgres</SpanYellow> &nbsp; (This is the user we created in Install steps )
            </Li>
            <IMG img_name={pgadmin_3} />
          </ULdisc>
        </Li>
      </ULDecimal>
    </MainChildArea>
  );
};

export default InstallPostgresStandalone;

const batchCode = `initdb.exe -U postgres -A password -E utf8 -W -D C:\\Localdata\\DB\\postgresql\\pgsql_data`;

const startPostgresqlServer = `C:\\Windows\\System32>cd \\Localdata\\DB\\postgresql\\pgsql\\bin
C:\\Localdata\\DB\\postgresql\\pgsql\\bin>pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile start`;

const stopPostgresqlServer = `C:\\Windows\\System32>cd \\Localdata\\DB\\postgresql\\pgsql\\bin
C:\\Localdata\\DB\\postgresql\\pgsql\\bin>pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile stop`;

const _2_ = `C:\\Localdata\\DB\\postgresql\\pgsql\\bin`;

const _start_ = `cd \\Localdata\\DB\\postgresql\\pgsql\\bin
pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile start
cmd /k`;

const _stop_ = `cd \Localdata\DB\postgresql\pgsql\bin
pg_ctl -D ^"C^:^\\Localdata^\\DB^\\postgresql^\\pgsql^_data^" -l logfile stop
cmd /k`;
