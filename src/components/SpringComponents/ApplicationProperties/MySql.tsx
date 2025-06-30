import { ApplicationPropertiesHighlight } from "../../Highlight";

const MySql = () => {
  return (
    <section>
      {/*       
      <article className="my-5">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">H2 Databse basic config </div>
        <ApplicationPropertiesHighlight propertiesCode={h2} />
      </article>
      */}
      <article className="my-5">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql dialect{" "}
        </div>
        <div>When using java version JDK8 use with mysql dialect :</div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_jdk8} />
        <div>When using java version JDK8 use with mysql dialect :</div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_jdk11} />
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql basic config
        </div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_basic} />
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql detailes config
        </div>
        {/*  */}
        {/*  */}

        <div>Question : </div>
        <div>What is difference between spring.jpa.show-sql=true & logging.level.org.hibernate.SQL=debug ?</div>
        <div>Answer :</div>
        <div>spring.jpa.show-sql=true - show the the logging w/o the the time stamp and the package name</div>
        <div>logging.level.org.hibernate.SQL=debug - shows the logging as below: with the time stamp and the package name</div>
        <ApplicationPropertiesHighlight
          propertiesCode={`2021-04-21 12:02:27.553 DEBUG 496 --- [ restartedMain] org.hibernate.SQL : drop table if exists customer`}
        />

        <div>Better to use the following :</div>
        <ApplicationPropertiesHighlight
          propertiesCode="logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
spring.jpa.properties.hibernate.format_sql=true"
        />
        {/*  */}
        {/*  */}
        <div className="my-8 inline-block rounded-md bg-sky-400 px-2 py-1 text-xl font-semibold capitalize tracking-wider text-white">
          MySql detailes config
        </div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_detailed_config} />
      </article>

      {/*  */}
      {/*  */}
      <article className="my-5">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql comprehansive properties config{" "}
        </div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_comprehansive_config} />
      </article>
      {/*  */}
      {/*  */}
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default MySql;

const mysql_jdk8 = `# MySql Dialect for to use with MySql 8 on JDK8 is MySQL5Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect`;

const mysql_jdk11 = `# When using java version JDK11 use with mysql dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect`;

const mysql_basic = `# ===============================
# 		DATA SOURCE
# =============================== 
spring.datasource.url=jdbc:mysql://localhost:3306/{the_name_of_DB_Schema_in_MySql_DB}?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

# ===============================
# 	 	JPA / HIBERNATE
# ===============================
 
# Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true
# Regarding this property
# see the project of LAZY Loading, I explain it there
spring.jpa.open-in-view=false`;

const mysql_detailed_config = `# ===============================
# 		DATA SOURCE
# =============================== 
spring.datasource.url=jdbc:mysql://localhost:3306/{the_name_of_Schema_in_DB}?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root
 
# ===============================
# 	 	JPA / HIBERNATE
# ===============================
 
#Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true

# spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

spring.jpa.properties.hibernate.generate_statistics=true

# Disable OSIV
spring.jpa.open-in-view=false

# MySql Dialect to use with MySql 8 on JDK8 is MySQL5Dialect
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5Dialect

# MySql Dialect to use with MySql 8 on JDK11 is MySQL8Dialect
# spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect

spring.jpa.hibernate.naming-strategy = org.hibernate.cfg.ImprovedNamingStrategy

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true

# =================================================================================
# to Initialize DB by using a file of "data.sql" 
# need to set the following features
# =================================================================================
spring.datasource.platform=mysql
spring.datasource.initialization-mode=always


# ==========================================
# format the returned error format 
# when exception is thrown back to client
# ==========================================

# Better not to use this , since it gave issue's
# server.error.path=true
server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true`;

const mysql_comprehansive_config = `spring.datasource.url=jdbc:mysql://localhost:3306/{the_name_of_Schema_in_DB}?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=root

# JPA / HIBERNATE 
# Spring will create a schema
spring.jpa.hibernate.ddl-auto=create
spring.jpa.generate-ddl=true

### spring.jpa.show-sql=true & 
### logging.level.org.hibernate.SQL=debug 
### Do the same , but with difference

spring.jpa.show-sql=true
# show the the logging w/o the the time stamp and the package name 
# Hibernate: drop table if exists customer

logging.level.org.hibernate.SQL=debug
# shows the logging as below: with the time satamp and the package name 
# 2021-04-21 12:02:27.553 DEBUG 496 --- [  restartedMain] org.hibernate.SQL   : drop table if exists customer

# shows the statistics regarding the SQL queries
spring.jpa.properties.hibernate.generate_statistics=true

# Regarding this property
# see the project of LAZY Loading, I explain it there
spring.jpa.open-in-view=false
spring.jpa.properties.hibernate.format_sql=true

# I don't remember what this is for (need to check)
spring.jpa.hibernate.naming-strategy = org.hibernate.cfg.ImprovedNamingStrategy

# ===========================================
# 	dev-tools (Need to add dependency)
# ===========================================
spring.devtools.restart.enabled=true

# =================================================================================
# to Initialize DB by using a file of "data.sql" 
# need to set the following features
# =================================================================================
spring.datasource.platform=mysql
spring.datasource.initialization-mode=always

# ==========================================
# format the returned error format 
# when exception is thrown back to client
# ==========================================

# Better not to use this , since it gave issue's
# server.error.path=true
server.error.include-binding-errors=always
server.error.include-exception=true
server.error.include-message=always
server.error.include-stacktrace=never
server.error.whitelabel.enabled=true`;
