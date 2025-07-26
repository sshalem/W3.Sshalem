import { ContentAnchor, InternalArticle } from "../../../components";
import { JavaHighlight, Span } from "../../../Highlight";

const PojoAsJson = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <div className="mb-5">
        There are times where I want to display a JAVA Object (POJO) as JSON format , for convinience. <br />
        to do that I will use the <Span>JACKSON</Span> library.
        <InternalArticle articleTitle="JACKSON - JSON Data Binding">
          <ul className="mx-8 list-disc">
            <li className="my-1">Data Binding is the process of converting JSON data to a JAVA POJO </li>
            <li className="my-1">Also known as : mapping, Serialization/Deserialization , Marshalling/Unmarshalling</li>
            <li className="my-1">
              <Span>Spring</Span> uses the <Span>JACKSON</Span> Project behind the scene.
            </li>
            <li className="my-1">
              <Span>JACKSON</Span> handles data binding between JSON and JAVA POJO.
            </li>
          </ul>
          <div className="mb-2 mt-8">
            <Span>JACKSON</Span> data Binding API:
          </div>
          <ul className="mx-8 list-disc">
            <li className="my-1">
              Package: <Span>com.fasterxml.jackson.databind</Span>
            </li>
            <li className="my-1">Supports XML and JSON</li>
            <li className="my-1">
              By default <Span>JACKSON</Span> calls appropriate <Span>getter/setter methods</Span>
            </li>
          </ul>
        </InternalArticle>
        <InternalArticle articleTitle="Spring and Jackson Support">
          <div>
            The following things are done automatically , behind the scene by <Span>JACKSON</Span> project ,When building <Span>Spring REST</Span>{" "}
            &nbsp; applications :
          </div>
          <ul className="mx-8 list-disc">
            <li className="my-1">Spring will automatically handle Jackson Integration</li>
            <li className="my-1">JSON data being passed to REST controller is converted to POJO</li>
            <li className="my-1">JAVA object being returned from REST controller is converted to JSON</li>
            <li className="my-1">
              To Convert JAVA POJO to JSON- Jackson project calls
              <span className="text-emerald-500"> getter methods</span>
              &nbsp; on POJO.
            </li>
            <li className="my-1">
              To Convert JSON to JAVA POJO - Jackson project calls
              <span className="text-red-500"> setter methods</span>
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
    </article>
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
