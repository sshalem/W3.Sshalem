/*
/spring/rest/rest-api#6.ResponseEntity
ResponseEntity --> (SPRING)(rest)(rest-api)
*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";

const O6_ResponseEntity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-10">
        <article className="my-8 text-2xl font-semibold">⭐ ResponseEntity</article>
        When Frontend sends an Object :
        <ULdisc>
          <Li>
            Backend should config same Object it its Body wth anotaion <SpanGrey>@RequestBody</SpanGrey>, to receive this data
          </Li>
          <Li>
            <SpanGrey>consumes = MediaType.APPLICATION_JSON_VALUE</SpanGrey> - I get ( <strong>consume</strong> ) from FrontEnd JSON data
          </Li>
          <Li>
            <SpanGrey>produces = MediaType.APPLICATION_JSON_VALUE</SpanGrey> - I retrun ( <strong>produce</strong> ) to FrontEnd JSON data
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O6_ResponseEntity;
