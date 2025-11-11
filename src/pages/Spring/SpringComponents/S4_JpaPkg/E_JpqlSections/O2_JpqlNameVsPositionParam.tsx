/*
/spring/jpa/jpql#2.NameParamsVsPositionParam
Name Params Vs Position Param --> (SPRING)(JPA)(JPQL)
*/
import { DivDoubleBorder, JavaHighlight, SpanGrey, SpanSky } from "../../../../../components/Highlight";
import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O2_JpqlNameVsPositionParam = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>Here’s a clear comparison between JPQL queries using Named Parameters vs Positioned Parameters:</section>
      <div className="my-4">
        🔹 Named Parameters
        <div className="ml-8">
          <ULdisc>
            <Li>Use named placeholders prefixed with a colon (:).</Li>
            <Li>Easier to read and maintain.</Li>
            <Li>Order doesn’t matter.</Li>
            <Li>
              Always use <SpanGrey>Named Parameter</SpanGrey> with <SpanGrey>Native SQL</SpanGrey>
            </Li>
          </ULdisc>
        </div>
      </div>

      <div className="mt-8">
        🔸 Positioned Parameters
        <div className="ml-8">
          <ULdisc>
            <Li>Use question marks (?) followed by a position index.</Li>
            <Li>Parameters must be set in the correct order.</Li>
            <Li>Less readable, but sometimes used for dynamic queries.</Li>
          </ULdisc>
        </div>
      </div>

      <article>
        <DivDoubleBorder>Named Parameter, Position Parameter, Native SQL query </DivDoubleBorder>
        let's see how to Query <br />
        <div className="my-4">
          <ULdisc>
            <Li>Single Entity</Li>
            <Li>2 parameters</Li>
          </ULdisc>
          using <SpanGrey>Named Parameter</SpanGrey>, <SpanGrey>Position Parameter</SpanGrey>, <SpanGrey>Native SQL query</SpanGrey> .
        </div>
        <SpanSky>Named Parameter</SpanSky>
        <JavaHighlight javaCode={id_name_named_param}></JavaHighlight>
        <SpanSky>Position Parameter</SpanSky> <br />
        is related to the position of the value in the query. <br />I prefer to use Named Parameters. From now on , I will show Only 2 options
        <ULdisc>
          <Li>Named Parameters</Li>
          <Li>Native SQL query</Li>
        </ULdisc>
        <JavaHighlight javaCode={id_name_position_param}></JavaHighlight>
        <SpanSky>Native SQL</SpanSky>
        <br />
        <JavaHighlight javaCode={id_name_native_query}></JavaHighlight>
      </article>
      {/* <TableJPQLParameterComparison></TableJPQLParameterComparison> */}
    </MainChildArea>
  );
};

export default O2_JpqlNameVsPositionParam;

// --------------------
// 2 parameters
// --------------------
const id_name_named_param = `@Query("SELECT user from UserEntity user WHERE user.id=:id AND user.name=:name")
UserEntity jpqlFindByIdAndName(@Param("id") long id, @Param("name") String name);`;

const id_name_position_param = `@Query("SELECT user from UserEntity user WHERE user.id = ?1 AND user.name = ?2")
UserEntity posFindByIdAndName(@Param("id") long id, @Param("name") String name);`;

const id_name_native_query = `@Query(value = "SELECT * FROM USERS_TB WHERE id=:id AND name=:name", nativeQuery = true)
UserEntity nativeFindByIdAndName(@Param("id") long id, @Param("name") String name);`;
