import JavaHighlight from "../JavaHighlight";

const ApplicationProperties = () => {
  return (
    <div>
      <JavaHighlight javaCode={H2_properties}></JavaHighlight>
    </div>
  );
};

export default ApplicationProperties;

const H2_properties = `spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Enabling H2 Console
spring.h2.console.enabled=true

# Custom H2 Console URL from /h2-console to /h2
spring.h2.console.path=/h2

# console color enabled
spring.output.ansi.enabled=always  
`;
