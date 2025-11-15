/*
/spring/rest/rest-api#4.@PathVariable
@PathVariable --> (SPRING)(rest)(rest-api)
*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O4_PathVariable = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-10">
        <article className="my-8 text-2xl font-semibold">⭐ @RequestBody</article>
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
        <JavaHighlight javaCode={request_body}></JavaHighlight>
      </section>

      <hr />

      <section className="my-10">
        <article className="my-8 text-2xl font-semibold">⭐ @PathVariable</article>
        <ULdisc>
          <Li>
            The Frontend sends a GET request with url <SpanGrey>http://localhost:8080/api/getMethod/1/shabtay</SpanGrey> .
          </Li>
          <Li>
            The Backend extracts the values from the URI path, using the <SpanGrey>@PathVariable</SpanGrey>. (They are called mandatory identifiers)
          </Li>
          <Li>
            <SpanGrey>{"{id}"}</SpanGrey> is refering to <SpanGrey>@PathVariable long id</SpanGrey> , names must match
          </Li>
          <Li>
            <SpanGrey>{"{firstName}"}</SpanGrey> is refering to <SpanGrey>@PathVariable String firstName</SpanGrey> , names must match
          </Li>
        </ULdisc>

        <JavaHighlight javaCode={path_variable}></JavaHighlight>
      </section>

      <hr />
    </MainChildArea>
  );
};

export default O4_PathVariable;

const request_body = `@PostMapping(path = "/postMethod", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public Person createPerson(@RequestBody Person person) {
    System.out.println(person);
    return person;
}`;

const path_variable = `@GetMapping(path = "/getMethod/{id}/{firstName}", produces = MediaType.APPLICATION_JSON_VALUE)
public Person getPerson(@PathVariable String firstName, @PathVariable long id) {
    return new Person("shab", "sayhsc", 159, "male");
}`;
