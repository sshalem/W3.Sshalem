import { ContentAnchor } from "../../../components";
import { Span } from "../../../Highlight";

const JsonObject = ({ anchor }: { anchor: string }) => {
  return (
    <article className="mb-10 mt-5 scroll-mt-[1.5rem]" id={anchor.replace(/ /g, "")}>
      <ContentAnchor anchor={anchor} />
      <div className="mt-2">
        <Span>JSON</Span> - JavaScript Object Notation <br />
        JSON object are key/value pairs :
        <ul className="mx-8 list-disc">
          <li className="my-1">key (or name) - on the left side ,is always in double quotes.</li>
          <li className="my-1">
            value
            <ul className="mx-8 list-disc">
              <li className="my-1">key (or name) - on the left side ,is always in double quotes.</li>
              <li className="my-1">value </li>
            </ul>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default JsonObject;

const simpleJsonCode = `{
    "id" : 2058,
    "title" : "JAVA Title",
    "description" : "Many to many",
    "published": true
    "courses" : null
}`;

const nestedJsonObjectCode = `{
    "id" : 2058,
    "title" : "JAVA Title",
    "description" : "Many to many",
    "published": true
    "address" : {
    			"street" : "100 begin ",
			"city" : "holon"
		}
}`;

const nestedJsonObjectArrayCode = `{
	"id": 14,
	"firstName": "Mario",
	"lastName": "Rossi",
	"active": true,
	"address": {
		"street": "100 Main St",
		"city": "Philadelphia",
		"state": "Pennsylvania",
		"zip": "19103",
		"country": "USA"
	},
	"languages" : ["Java", "C#", "Python", "Javascript"]
}`;
