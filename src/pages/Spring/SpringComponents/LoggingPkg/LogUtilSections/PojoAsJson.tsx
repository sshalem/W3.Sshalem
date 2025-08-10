import { InternalArticle, MainChildArea } from "../../../../../components";
import { JavaHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../../components/Highlight";

const PojoAsJson = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mb-5">
        There are times where I want to display a JAVA Object (POJO) as JSON format , for convinience. <br />
        to do that I will use the <SpanBlue>JACKSON</SpanBlue> library.
        <InternalArticle articleTitle="JACKSON - JSON Data Binding">
          <ul className="mx-8 list-disc">
            <li className="my-1">Data Binding is the process of converting JSON data to a JAVA POJO </li>
            <li className="my-1">Also known as : mapping, Serialization/Deserialization , Marshalling/Unmarshalling</li>
            <li className="my-1">
              <SpanBlue>Spring</SpanBlue> uses the <SpanBlue>JACKSON</SpanBlue> Project behind the scene.
            </li>
            <li className="my-1">
              <SpanBlue>JACKSON</SpanBlue> handles data binding between JSON and JAVA POJO.
            </li>
          </ul>
          <div className="mb-2 mt-8">
            <SpanBlue>JACKSON</SpanBlue> data Binding API:
          </div>
          <ul className="mx-8 list-disc">
            <li className="my-1">
              Package: <SpanBlue>com.fasterxml.jackson.databind</SpanBlue>
            </li>
            <li className="my-1">Supports XML and JSON</li>
            <li className="my-1">
              By default <SpanBlue>JACKSON</SpanBlue> calls appropriate <SpanBlue>getter/setter methods</SpanBlue>
            </li>
          </ul>
        </InternalArticle>
        <InternalArticle articleTitle="Spring and Jackson Support">
          <div>
            The following things are done automatically , behind the scene by <SpanBlue>JACKSON</SpanBlue> project ,When building{" "}
            <SpanBlue>Spring REST</SpanBlue> &nbsp; applications :
          </div>
          <ul className="mx-8 list-disc">
            <li className="my-1">Spring will automatically handle Jackson Integration</li>
            <li className="my-1">JSON data being passed to REST controller is converted to POJO</li>
            <li className="my-1">JAVA object being returned from REST controller is converted to JSON</li>
            <li className="my-1">
              To Convert JAVA POJO to JSON- Jackson project calls
              <SpanGreen> getter methods</SpanGreen>
              &nbsp; on POJO.
            </li>
            <li className="my-1">
              To Convert JSON to JAVA POJO - Jackson project calls
              <SpanRed> setter methods</SpanRed>
              &nbsp; on POJO. (It doesn't access internal private fields directly.)
            </li>
          </ul>
        </InternalArticle>
        <ul className="mx-8 list-disc"></ul>
      </div>
      <div className="my-5">Code , converting a POJO to JSON using Jackson</div>
      <JavaHighlight javaCode={pojoAsJsonCode} />

      <div className="my-5">here is how I present the POJO ,as JSON in console</div>
      <JavaHighlight javaCode={jsonPresentationCode} />
    </MainChildArea>
  );
};

export default PojoAsJson;

const pojoAsJsonCode = `@SpringBootApplication
public class LoggingProjApplication {

	public static void main(String[] args) throws JsonProcessingException {
		SpringApplication.run(LoggingProjApplication.class, args);

		Person person = new Person("first", "last", 50);

		ObjectMapper mapper = new ObjectMapper();
		String data = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(person);
		System.out.println(data);
	}
}`;

const jsonPresentationCode = `{
  "firstName" : "first",
  "lastName" : "last",
  "age" : 50
}`;
