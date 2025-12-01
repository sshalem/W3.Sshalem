/*
/spring/logging/LogUtil#jsonobject
json object --> (SPRING)(Logging)(LogUtil)
*/
import { MainChildArea } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanBlue } from "../../../../../components/Highlight";

const JsonObject = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="mt-2">
        <SpanBlue>JSON</SpanBlue> - JavaScript Object Notation . JSON object are key/value pairs :
        <ul className="mx-8 list-disc">
          <li className="my-1">
            key (or name) - on left side
            <ul className="mx-8 list-disc">
              <li className="my-1"> always in double quotes.</li>
            </ul>
          </li>
          <li className="my-1">
            value - on right side
            <ul className="mx-8 list-disc">
              <li className="my-1">String - String value always in double quotes</li>
              <li className="my-1">Number - w/o quotes </li>
              <li className="my-1">null - w/o quotes </li>
              <li className="my-1">boolen - true/false w/o quotes </li>
            </ul>
          </li>
        </ul>
      </div>
      <DivDoubleBorder>example of JSON presentation</DivDoubleBorder>
      <div className="my-5">simple json presentation</div>
      <JavaHighlight javaCode={simpleJsonCode} />

      <div className="my-5">nested Json Object presentation</div>
      <JavaHighlight javaCode={nestedJsonObjectCode} />

      <div className="my-5">nested Json Object with Array</div>
      <JavaHighlight javaCode={nestedJsonObjectArrayCode} />
    </MainChildArea>
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
