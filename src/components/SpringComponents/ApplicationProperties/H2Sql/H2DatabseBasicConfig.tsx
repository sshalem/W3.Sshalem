import { ApplicationPropertiesHighlight } from "../../../Highlight";

const H2DatabseBasicConfig = ({ idAnchor }: { idAnchor: string }) => {
  return (
    <article className="my-5 scroll-mt-[1.5rem]" id={idAnchor}>
      <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">H2 Databse basic config </div>
      <ApplicationPropertiesHighlight propertiesCode={h2} />
    </article>
  );
};

export default H2DatabseBasicConfig;

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
