import { JavaHighlight } from "../../Highlight";

const H2 = () => {
  return (
    <section>
      <article>
        <div className="text-2xl text-slate-500">H2 Databse basic config </div>
        <JavaHighlight javaCode={h2} />
      </article>
      <article>
        <div className="text-2xl text-slate-500">H2 DBeaver </div>
        <p>
          <a href="https://www.h2database.com/html/main.html">https://www.h2database.com/html/main.html</a>
        </p>
        <p>
          <a href="https://www.h2database.com/html/main.html">https://www.h2database.com/html/main.html</a>
        </p>
        <p>https://www.h2database.com/html/features.html</p>
        <p>C:\Users\User\AppData\Roaming\DBeaverData\drivers\maven\maven-central\com.h2database\h2-2.1.210.jar</p>
        <p>C:\Users\User\AppData\Roaming\DBeaverData\drivers\remote\h2database\h2database\master\LICENSE.txt</p>
      </article>
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

const h2_dbeaver = ``;
