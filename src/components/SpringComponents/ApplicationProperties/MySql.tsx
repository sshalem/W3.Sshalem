import { useEffect, useRef, useState } from "react";
import { ApplicationPropertiesHighlight, Span } from "../../Highlight";

const MySql = () => {
  const [showContent, setShowContent] = useState<boolean>(true);
  const [contentHeight, setContentHeight] = useState<number>();

  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleShowContent = () => {
    setShowContent(!showContent);
    if (sessionStorage.getItem("scrollHeight") !== null) {
      const value = JSON.parse(sessionStorage.getItem("scrollHeight") as string);
      setContentHeight(value);
    }
  };

  useEffect(() => {
    if (ulRef.current !== null) {
      // console.log(ulRef.current.scrollHeight);
      sessionStorage.setItem("scrollHeight", JSON.stringify(ulRef.current.scrollHeight + 16));
      setContentHeight(ulRef.current.scrollHeight + 16);
    }
  }, []);

  return (
    <section>
      {/* Start Contents */}
      <article className="content-sm content-md content-lg content-xl content-basic">
        <div className="mb-0 w-[100%] bg-gray-800 px-2 py-1 text-center capitalize">
          <span className="ml-2 text-sm font-semibold tracking-wider text-white">contents </span>
          <span className={`${showContent ? `text-red-400` : `text-teal-400`} cursor-pointer text-xs`} onClick={handleShowContent}>
            [{showContent ? " hide " : " show "}]
          </span>
        </div>

        <ul
          ref={ulRef}
          style={showContent ? { height: `${contentHeight}px` } : { height: "0px" }}
          className={`${showContent ? "pt-3" : "py-0"} overflow-hidden bg-slate-200 px-1 text-xs lowercase text-teal-700 transition-[height] duration-100 ease-in-out`}
        >
          <li>
            <a href="#mysql_dialect" className="hover:underline">
              mysql dialect
            </a>
          </li>
          <li>
            <a href="#OSIV" className="hover:underline">
              osiv
            </a>
          </li>
          <li>
            <a href="#mysql_basic_config" className="hover:underline">
              mysql basic config
            </a>
          </li>
          <li>
            <a href="#MySql_detailed_config" className="hover:underline">
              mysql detailed config
            </a>
          </li>
          <li>
            <a href="#MySql_comprehansive_properties_config" className="hover:underline">
              mysql comprehansive properties config
            </a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </article>
      {/* End Contents */}

      {/*       
      <article className="my-5 scroll-mt-[1.5rem]"> 
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">XXXX</div>
        <ApplicationPropertiesHighlight propertiesCode={h2} />
      </article>
      */}

      <article className="my-5 scroll-mt-[1.5rem]" id="mysql_dialect">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">MySql dialect</div>
        <div className="my-4">
          When using java version <Span>JDK8</Span> use with <Span>mysql</Span> dialect :
          <div className="my-4">
            <ApplicationPropertiesHighlight propertiesCode={mysql_jdk8} />
          </div>
        </div>
        <div className="my-8">
          When using java version <Span>JDK11</Span> use with <Span>mysql</Span> dialect :
          <div className="my-4">
            <ApplicationPropertiesHighlight propertiesCode={mysql_jdk11} />
          </div>
        </div>
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5 scroll-mt-[1.5rem]" id="OSIV">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">OSIV</div>
        <div className="my-4">Regarding this property , see the project of LAZY Loading, I explain it there</div>
        <ApplicationPropertiesHighlight propertiesCode={osiv} />
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5 scroll-mt-[1.5rem]" id="mysql_basic_config">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">MySql basic config</div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_basic} />
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5 scroll-mt-[1.5rem]" id="MySql_detailed_config">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">MySql detailed config</div>
        <div>
          <div className="mb-4 text-xl font-semibold text-red-500 underline">Question : </div>
          <p className="ml-4">
            What is difference between <Span> spring.jpa.show-sql=true</Span> to <Span>logging.level.org.hibernate.SQL=debug</Span> ?
          </p>
        </div>
        <div>
          <div className="mb-4 text-xl font-semibold text-green-500 underline">Answer :</div>
          <p className="my-2 ml-4">
            1. <Span>spring.jpa.show-sql=true</Span> - show the the logging w/o the the time stamp and the package name
          </p>
          <p className="my-2 ml-4">
            2. <Span> logging.level.org.hibernate.SQL=debug</Span> - shows the logging with the time stamp and the package name
          </p>
        </div>

        <div>Better to use the following :</div>
        <ApplicationPropertiesHighlight propertiesCode={propertiesCode} />

        <div className="my-8">
          here below , I give example of <Span>application.properties</Span> with explaination:
        </div>

        <ApplicationPropertiesHighlight propertiesCode={mysql_detailed_config} />
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5 scroll-mt-[1.5rem]" id="MySql_comprehansive_properties_config">
        <div className="mb-8 inline-block bg-gray-800 px-2 py-2 font-semibold capitalize tracking-wider text-white">
          MySql comprehansive properties config
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

const propertiesCode = `logging.level.org.hibernate.SQL=DEBUG
# Once I insert Data to DB , it will show the meta data inserted
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
spring.jpa.properties.hibernate.format_sql=true`;

const osiv = `# Disable OSIV
spring.jpa.open-in-view=false`;
