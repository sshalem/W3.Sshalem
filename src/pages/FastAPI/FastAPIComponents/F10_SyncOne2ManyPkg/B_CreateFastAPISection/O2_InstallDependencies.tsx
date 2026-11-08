/*


*/
import { IMG, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";
import fastApi_4 from "../../../../../assets/fastApi_4.jpg";

const O2_InstallDependencies = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">Install the dependencies</div>
        <div></div>
        <ULDecimal>
          <Li>
            Open the PyCharm terminal and execute:
            <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
          </Li>
          <Li>
            Now install our initial dependencies: <Highlight_ApplicationProperties code={_2_}></Highlight_ApplicationProperties>
          </Li>
          <Li>
            Verify the installations: (I can choose either command)
            <Highlight_ApplicationProperties code={_3_}></Highlight_ApplicationProperties>
          </Li>
          <Li>
            Now generate our dependency file:
            <Highlight_ApplicationProperties code={_4_}></Highlight_ApplicationProperties>
            <ULdisc>
              <Li>
                The command created a file of <SpanEmerald>requirements.txt</SpanEmerald> with all the dependencies packages
              </Li>
              <Li>This is similar to maintaining your Maven dependency configuration</Li>
              <Li>
                although <SpanEmerald>requirements.txt</SpanEmerald> records <em className="font-semibold">installed package versions</em> rather than
                declaring dependency constraints like <SpanYellow>Maven's</SpanYellow> <SpanYellow>pom.xml</SpanYellow>.
              </Li>
            </ULdisc>
            <IMG img_name={fastApi_4}></IMG>
          </Li>
          <Li>
            Here is what each dependency does:
            <div className="my-8">
              A small distinction: <SpanEmerald>Uvicorn</SpanEmerald> is an <SpanEmerald>ASGI server</SpanEmerald>, whereas{" "}
              <SpanYellow>Tomcat</SpanYellow> is a <SpanYellow>Servlet container</SpanYellow>.
              <br />
              They serve similar deployment roles but use different application protocols.
            </div>
            <article className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-gray-200 bg-white text-sm shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 font-bold text-gray-800">
                    <th className="px-6 py-3.5">Dependency</th>
                    <th className="px-6 py-3.5">Purpose</th>
                    <th className="px-6 py-3.5">Java equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  <tr>
                    <td className="px-6 py-3">
                      <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-xs">fastapi</code>
                    </td>
                    <td className="px-6 py-3">Backend framework</td>
                    <td className="px-6 py-3">Spring Boot Web</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">
                      <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-xs">uvicorn</code>
                    </td>
                    <td className="px-6 py-3">ASGI application server</td>
                    <td className="px-6 py-3">Embedded Tomcat (conceptually)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">
                      <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-xs">sqlalchemy</code>
                    </td>
                    <td className="px-6 py-3">ORM and SQL toolkit</td>
                    <td className="px-6 py-3">Hibernate/JPA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">
                      <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-xs">psycopg</code>
                    </td>
                    <td className="px-6 py-3">PostgreSQL driver</td>
                    <td className="px-6 py-3">PostgreSQL JDBC Driver</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">
                      <code className="rounded border border-gray-100 bg-gray-50 px-1.5 py-0.5 font-mono text-xs">pydantic-settings</code>
                    </td>
                    <td className="px-6 py-3">Application configuration</td>
                    <td className="px-6 py-3">Spring configuration properties</td>
                  </tr>
                </tbody>
              </table>
            </article>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O2_InstallDependencies;

const _1_ = `python -m pip install --upgrade pip`;

const _2_ = `pip install fastapi "uvicorn[standard]" sqlalchemy "psycopg[binary]" pydantic-settings`;

const _3_ = `pip list
pip freeze`;

const _4_ = `pip freeze > requirements.txt`;
