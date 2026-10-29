/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JAVA } from "../../../../../components/Highlight";

const O2_CorsMethodLevel = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-2xl font-semibold">✅ Enable CORS at Controller Method Level</article>
        <strong>Pros:</strong>
        <ULdisc>
          <Li>Simple</Li>
          <Li>Fine-grained control</Li>
        </ULdisc>
        <strong>Cons:</strong>
        <ULdisc>
          <Li>Need to repeat on many controllers</Li>
        </ULdisc>
        <Highlight_JAVA code={method_level}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O2_CorsMethodLevel;

const method_level = `@RestController
@RequestMapping("/api")
public class TestController {

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }
}
`;
