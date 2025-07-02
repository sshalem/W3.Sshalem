import { useState } from "react";
import { ApplicationPropertiesHighlight, JavaHighlight, Span } from "../../Highlight";

const MySql = () => {
  const [content, setContent] = useState<boolean>(false);

  const handleShowContent = () => {
    setContent(!content);
  };

  return (
    <section>
      <article className="select-none">
        <div className={`${content ? `w-2/5` : `w-56`} bg-[#f9f9f9] p-2 capitalize`}>
          <span className="mx-2 font-semibold">contents</span>
          <span className="font-extralight text-red-400" onClick={handleShowContent}>
            [{content ? "hide" : "show"}]
          </span>
        </div>
        <ul className="text-sm capitalize text-red-400">
          <li>
            <a href="#mysql_dialect">mysql dialect</a>
          </li>
          <li>
            <a href="#mysql_basic_config">mysql basic config</a>
          </li>
          <li>
            <a href="#MySql_comprehansive_properties_config">MySql comprehansive properties config</a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </article>
      {/*       
      <article className="my-5 scroll-mt-[7rem]">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">H2 Databse basic config </div>
        <ApplicationPropertiesHighlight propertiesCode={h2} />
      </article>
      */}
      <article className="my-5 scroll-mt-[7rem]" id="mysql_dialect">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql dialect
        </div>
        <div className="my-4">
          When using java version <Span>JDK8</Span> use with <Span>mysql</Span> dialect :
          <p className="my-4">
            <ApplicationPropertiesHighlight propertiesCode={mysql_jdk8} />
          </p>
        </div>
        <div className="my-8">
          When using java version <Span>JDK11</Span> use with <Span>mysql</Span> dialect :
          <p className="my-4">
            <ApplicationPropertiesHighlight propertiesCode={mysql_jdk11} />
          </p>
        </div>
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5 scroll-mt-[7rem]" id="mysql_basic_config">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql basic config
        </div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_basic} />
      </article>

      {/*  */}
      {/*  */}

      <article className="my-5 scroll-mt-[7rem]">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql detailes config
        </div>
        {/*  */}
        {/*  */}

        <div>
          <div className="text-xl font-semibold">Question : </div>
          <p className="ml-4">
            What is difference between <Span> spring.jpa.show-sql=true</Span> to <Span>logging.level.org.hibernate.SQL=debug</Span> ?
          </p>
        </div>
        <div>
          <div className="text-xl font-semibold">Answer :</div>
          <p className="my-2 ml-4">
            <Span>spring.jpa.show-sql=true</Span> - show the the logging w/o the the time stamp and the package name
          </p>
          <p className="my-2 ml-4">
            <Span> logging.level.org.hibernate.SQL=debug</Span> - shows the logging as below: with the time stamp and the package name
          </p>

          <p className="my-6 ml-4">
            <Span> 2021-04-21 12:02:27.553 DEBUG 496 --- [ restartedMain] org.hibernate.SQL : drop table if exists customer</Span>
          </p>
        </div>

        <div>Better to use the following :</div>
        <ApplicationPropertiesHighlight propertiesCode={propertiesCode} />
        {/*  */}
        {/*  */}

        <div className="my-8 inline-block rounded-md bg-sky-400 px-2 py-1 text-xl font-semibold capitalize tracking-wider text-white">
          MySql detailes config
        </div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_detailed_config} />
      </article>

      {/*  */}
      {/*  */}
      <article className="my-5 scroll-mt-[7rem]" id="MySql_comprehansive_properties_config">
        <div className="mb-8 inline-block rounded-md bg-sky-600 px-2 py-1 text-2xl font-semibold capitalize tracking-wider text-white">
          MySql comprehansive properties config
        </div>
        <ApplicationPropertiesHighlight propertiesCode={mysql_comprehansive_config} />
      </article>
      {/*  */}
      {/*  */}

      <JavaHighlight javaCode={javaCode}></JavaHighlight>
      <div className="my-8 h-4">{/* {this div is only for dividing} */}</div>
    </section>
  );
};

export default MySql;

const javaCode = `package com.bezkoder.spring.login.security.jwt;

import java.security.Key;
import java.util.Date;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Component;
import org.springframework.web.util.WebUtils;

import com.bezkoder.spring.login.security.services.UserDetailsImpl;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtils {
  private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

  @Value("$\{bezkoder.app.jwtSecret}")
  private String jwtSecret;

  @Value("$\{bezkoder.app.jwtExpirationMs}")
  private int jwtExpirationMs;

  @Value("$\{bezkoder.app.jwtCookieName}")
  private String jwtCookie;

  public String getJwtFromCookies(HttpServletRequest request) {
    Cookie cookie = WebUtils.getCookie(request, jwtCookie);
    if (cookie != null) {
      return cookie.getValue();
    } else {
      return null;
    }
  }

  public ResponseCookie generateJwtCookie(UserDetailsImpl userPrincipal) {
    String jwt = generateTokenFromUsername(userPrincipal.getUsername());
    ResponseCookie cookie = ResponseCookie.from(jwtCookie, jwt).path("/api").maxAge(24 * 60 * 60).httpOnly(true).build();
    return cookie;
  }

  public ResponseCookie getCleanJwtCookie() {
    ResponseCookie cookie = ResponseCookie.from(jwtCookie, null).path("/api").build();
    return cookie;
  }

  public String getUserNameFromJwtToken(String token) {
    return Jwts.parserBuilder().setSigningKey(key()).build()
        .parseClaimsJws(token).getBody().getSubject();
  }
  
  private Key key() {
    return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
  }

  public boolean validateJwtToken(String authToken) {
    try {
      Jwts.parserBuilder().setSigningKey(key()).build().parse(authToken);
      return true;
    } catch (MalformedJwtException e) {
      logger.error("Invalid JWT token: {}", e.getMessage());
    } catch (ExpiredJwtException e) {
      logger.error("JWT token is expired: {}", e.getMessage());
    } catch (UnsupportedJwtException e) {
      logger.error("JWT token is unsupported: {}", e.getMessage());
    } catch (IllegalArgumentException e) {
      logger.error("JWT claims string is empty: {}", e.getMessage());
    }

    return false;
  }
  
  public String generateTokenFromUsername(String username) {   
    return Jwts.builder()
              .setSubject(username)
              .setIssuedAt(new Date())
              .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
              .signWith(key(), SignatureAlgorithm.HS256)
              .compact();
  }
}`;

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
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE
spring.jpa.properties.hibernate.format_sql=true`;
