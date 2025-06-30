import { ApplicationPropertiesHighlight, XmlHighlight } from "../../Highlight";

const H2 = () => {
  return (
    <section className="">
      {/*       
      <article className="my-2">
        <div className="mb-8 text-2xl text-black underline">H2 Databse basic config </div>
        <JavaHighlight javaCode={h2} />
      </article> 
      */}
      <article className="my-5">
        <div className="mb-8 text-2xl text-black underline">H2 Databse basic config </div>
        <ApplicationPropertiesHighlight propertiesCode={h2} />
      </article>
      {/*  */}
      <article className="my-5">
        <div className="mb-8 text-2xl text-black underline">H2 DBeaver </div>
        <div>links for H2 DBeaver config</div>
        <ul className="list-disc pl-8">
          <li>
            <a href="https://www.h2database.com/html/main.html" className="text-blue-700">
              https://www.h2database.com/html/main.html
            </a>
          </li>
          <li>
            <a href="https://www.h2database.com/html/features.html" className="text-blue-700">
              https://www.h2database.com/html/features.html
            </a>
          </li>
        </ul>

        <div className="mt-5">need to check what are this paths for</div>
        <ul className="list-decimal pl-8">
          <li>C:\Users\User\AppData\Roaming\DBeaverData\drivers\maven\maven-central\com.h2database\h2-2.1.210.jar</li>
          <li>C:\Users\User\AppData\Roaming\DBeaverData\drivers\remote\h2database\h2database\master\LICENSE.txt</li>
        </ul>
      </article>
      {/*  */}
      <article className="my-2">
        <div className="mb-8 text-2xl text-black underline">XML code </div>
        <XmlHighlight xmlCode={xmlCode} />
      </article>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default H2;

const h2 = `spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

# Enabling H2 Console
spring.h2.console.enabled=true

# Custom H2 Console URL from /h2-console to /h2
spring.h2.console.path=/h2

# console color enabled
spring.output.ansi.enabled=always`;

const xmlCode = `<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
	<groupId>org.thymeleaf.extras</groupId>
	<artifactId>thymeleaf-extras-springsecurity6</artifactId>
	<!-- Temporary explicit version to fix Thymeleaf bug -->
	<version>3.1.1.RELEASE</version>
</dependency>
<dependency>
	<groupId>org.springframework.security</groupId>
	<artifactId>spring-security-test</artifactId>
	<scope>test</scope>
</dependency>`;
