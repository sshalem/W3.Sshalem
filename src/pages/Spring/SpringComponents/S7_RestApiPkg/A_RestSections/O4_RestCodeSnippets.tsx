/*
/spring/rest/rest-api#2.RestCodeSnippets
Rest Code Snippets --> (SPRING)(rest)(rest-api)
*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanGrey } from "../../../../../components/Highlight";

const O4_RestCodeSnippets = ({ anchor }: { anchor: string }) => {
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

      <section className="my-10">
        <article className="my-8 text-2xl font-semibold">⭐ @RequestParam</article>
        <ULdisc>
          <Li>
            <SpanGrey>@RequestParam</SpanGrey> is used to extract query parameters from the URL of an HTTP request.
          </Li>
          <Li>
            It’s commonly used in <SpanGrey>GET</SpanGrey> requests but can also work with <SpanGrey>POST</SpanGrey> if parameters are sent as part of
            the query string.
          </Li>
          <Li>
            FrontEnd sends <SpanGrey>GET</SpanGrey> request as follows <SpanGrey>http://localhost:8080/api/getAll?id=1&firsName=shbatay</SpanGrey>
          </Li>
          <Li>
            The Query Params from the url are seperated by <SpanGrey>&</SpanGrey> sign.
          </Li>
          <Li>Backend read the QueryParams from url</Li>
        </ULdisc>
        <JavaHighlight javaCode={request_param_1}></JavaHighlight>
        <SpanGrey>@RequestParam</SpanGrey> also has optional parameters :
        <ULdisc>
          <Li>
            <SpanGrey>required</SpanGrey> - can be true/false (true = mandatory, false = NOT mandatory)
          </Li>
          <Li>
            <SpanGrey>defaultValue</SpanGrey> - setting default value
          </Li>
          <Li>
            If I send a url like this <SpanGrey>http://localhost:8080/api/getAll/required</SpanGrey> w/o any prameters in the url I get result of{" "}
            <SpanGreen>null shalem</SpanGreen>
            <ULdisc>
              <Li>
                <SpanGrey>null</SpanGrey> , because id is null
              </Li>
              <Li>shalem</Li> because there is no value assign , thus default value is shalem
            </ULdisc>
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={request_param_required_default}></JavaHighlight>I can also multiple values for the same key:
      </section>
    </MainChildArea>
  );
};

export default O4_RestCodeSnippets;

const request_body = `@PostMapping(path = "/postMethod", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
public Person createPerson(@RequestBody Person person) {
    System.out.println(person);
    return person;
}`;

const path_variable = `@GetMapping(path = "/getMethod/{id}/{firstName}", produces = MediaType.APPLICATION_JSON_VALUE)
public Person getPerson(@PathVariable String firstName, @PathVariable long id) {
    return new Person("shab", "sayhsc", 159, "male");
}`;

const request_param_1 = `@GetMapping(path = "/getAll")
public ResponseEntity<List<Person>> getAllPersons(@RequestParam long id, @RequestParam String firsName) {
    return ResponseEntity.ok().body(personServiceImpl.getAllPersons());
}`;

const request_param_required_default = `	@GetMapping(path = "/getAll/required")
	public ResponseEntity<List<Person>> getAllPersonsRequired(
			@RequestParam(required = false) Long id,
			@RequestParam(required = true, defaultValue = "shalem") String firsName) {
		System.out.println(id + " " + firsName) ;		
		return ResponseEntity.ok().body(personServiceImpl.getAllPersons());
	}`;

// const request_param_list_parameters = `
// @GetMapping("/items")
// public String getItems(@RequestParam List<String> ids) {
//     return "Items: " + String.join(", ", ids);
// }`;
