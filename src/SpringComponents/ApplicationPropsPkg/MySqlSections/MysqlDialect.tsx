import { ContentAnchor, CopyCode } from "../../../components";
import { ApplicationPropertiesHighlight, Span } from "../../../Highlight";

const MysqlDialect = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <div className="my-4">
        When using java version <Span>JDK8</Span> use with <Span>mysql</Span> dialect :
        <div className="my-4">
          <CopyCode code={mysql_jdk8}>
            <ApplicationPropertiesHighlight propertiesCode={mysql_jdk8} />
          </CopyCode>
        </div>
      </div>
      <div className="my-8">
        When using java version <Span>JDK11</Span> use with <Span>mysql</Span> dialect :
        <div className="my-4">
          <CopyCode code={mysql_jdk11}>
            <ApplicationPropertiesHighlight propertiesCode={mysql_jdk11} />
          </CopyCode>
        </div>
      </div>
    </article>
  );
};

export default MysqlDialect;

const mysql_jdk8 = `# MySql Dialect for to use with MySql 8 on JDK8 is MySQL5Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect`;

const mysql_jdk11 = `# When using java version JDK11 use with mysql dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect`;
