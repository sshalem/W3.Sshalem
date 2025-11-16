/*
/spring/rest/cors#2.CorsCodeSnippets
Cors Code Snippets --> (SPRING)(rest)(rest-api)
*/

import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O3_CorsClassLevel = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">✅ Enable CORS at Controller Class Level</article>

        <JavaHighlight javaCode={class_level}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O3_CorsClassLevel;

const class_level = `@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello!";
    }
}
`;
