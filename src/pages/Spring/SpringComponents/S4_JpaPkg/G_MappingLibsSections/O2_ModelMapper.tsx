/*
/spring/jpa/mapping-libs#2.ModelMapper
Model Mapper --> (SPRING)(JPA)(Mapping Libs)
*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O2_ModelMapper = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-xl"> 1️⃣ What is ModelMapper?</p>
        <ULdisc>
          <Li>ModelMapper is a Java library that helps you map one object to another.</Li>
          <Li>
            Commonly used for converting:
            <ULdisc>
              <Li>Entity → DTO</Li>
              <Li>DTO → Entity</Li>
            </ULdisc>
          </Li>
          <Li>Avoids writing repetitive setter/getter mapping code.</Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-8 text-xl">2️⃣ Add ModelMapper Dependency</p>
        <ULdisc>
          <Li>
            If you are using Maven, add (from <SpanYellow>mvnrepository</SpanYellow> )
          </Li>
          <XmlHighlight xmlCode={_1_} />
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <p className="my-8 text-xl">3️⃣ usage</p>
        <ULdisc>
          <JavaHighlight javaCode={_2_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_ModelMapper;

const _1_ = `<!-- Source: https://mvnrepository.com/artifact/org.modelmapper/modelmapper -->
<dependency>
    <groupId>org.modelmapper</groupId>
    <artifactId>modelmapper</artifactId>
    <version>3.2.6</version>
    <scope>compile</scope>
</dependency>
`;

const _2_ = `CustomerEntity entity = ...;
CustomerDTO dto = modelMapper.map(entity, CustomerDTO.class);`;
