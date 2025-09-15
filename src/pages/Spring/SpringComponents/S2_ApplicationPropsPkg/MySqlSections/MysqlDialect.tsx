import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanBlue } from "../../../../../components/Highlight";

const MysqlDialect = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-4">
        When using java version <SpanBlue>JDK8</SpanBlue> use with <SpanBlue>mysql</SpanBlue> dialect :
        <div className="my-4">
          <ApplicationPropertiesHighlight propertiesCode={mysql_jdk8} />
        </div>
      </div>
      <div className="my-8">
        When using java version <SpanBlue>JDK11</SpanBlue> use with <SpanBlue>mysql</SpanBlue> dialect :
        <div className="my-4">
          <ApplicationPropertiesHighlight propertiesCode={mysql_jdk11} />
        </div>
      </div>
    </MainChildArea>
  );
};

export default MysqlDialect;

const mysql_jdk8 = `# MySql Dialect for to use with MySql 8 on JDK8 is MySQL5Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect`;

const mysql_jdk11 = `# When using java version JDK11 use with mysql dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect`;
