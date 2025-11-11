/*


*/
import { Anchor, IMG, MainChildArea } from "../../../../../components";
import { XmlHighlight } from "../../../../../components/Highlight";
import security_9 from "../../../../../assets/security_9.jpg";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import { useMemo } from "react";

const O1_POM = ({ anchor }: { anchor: string }) => {
  // 1. I Memoize Syntax Highlighter , for better perfromance
  // 2. This fixes , the DropDown issue I have , when I click the Show/Hide content
  const renderPOM = useMemo(() => <XmlHighlight xmlCode={pom} />, [pom]);

  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🔑 GitHub link</p>
        <ULdisc>
          <Li>
            🔑 GitHub project link ⇨{" "}
            <Anchor
              description="Spring boot Version v2.6.11 - POM & Dependencies"
              href="https://github.com/sshalem/Spring-Boot/blob/main/08-Spring-Security/03_JWT/O2-jwt-authorities-v2-6-11/pom.xml"
            ></Anchor>{" "}
          </Li>
        </ULdisc>
      </section>
      <hr />

      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧩 Dependencies + POM file</p>
        <article>
          <ULdisc>
            <Li>
              <SpanGrey>H2</SpanGrey>, <SpanGrey>MySql</SpanGrey>, <SpanGrey>Popstgres</SpanGrey> - I add dependencies , so I can work on every DB
              environment
            </Li>
            <Li>
              <SpanGrey>Dev-tools</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>JPA</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>WEB</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>Spring-Security</SpanGrey>
            </Li>
            <Li>
              <SpanGrey>jjwt-api</SpanGrey> , <SpanGrey>jjwt-impl</SpanGrey> , <SpanGrey>jjwt-jackson</SpanGrey>
            </Li>
          </ULdisc>
        </article>
        <IMG img_name={security_9}></IMG>
        {renderPOM}
      </section>
    </MainChildArea>
  );
};

export default O1_POM;

const pom = `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.6.11</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.backend</groupId>
	<artifactId>O2-jwt-with-authorities</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>O2-jwt-with-authorities</name>
	<description>demo JWT with authorities</description>
	<properties>
		<java.version>11</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-security</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>

		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
		</dependency>

		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<scope>runtime</scope>
		</dependency>

		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<scope>runtime</scope>
		</dependency>


		<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt-api -->
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-api</artifactId>
			<version>0.11.5</version>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-impl</artifactId>
			<version>0.11.5</version>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>io.jsonwebtoken</groupId>
			<artifactId>jjwt-jackson</artifactId> <!-- or jjwt-gson if Gson is preferred -->
			<version>0.11.5</version>
			<scope>runtime</scope>
		</dependency>


		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
`;
