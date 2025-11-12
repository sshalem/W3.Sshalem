/*
/spring/rest/rest-api#2.RestCodeSnippets
Rest Code Snippets --> (SPRING)(rest)(rest-api)
*/

import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanGrey } from "../../../../../components/Highlight";
import ULdisc from "./../../../../../components/ui/ULdisc";

const O2_RequestMapping = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="my-4 text-xl font-semibold">✅ @RequestMapping Meta-Annotation attributes</div>
        <ULDecimal>
          <Li>
            <SpanGrey>name</SpanGrey> - A logical name for the mapping (optional). (Mostly used for tooling or documentation purposes. )
          </Li>
          <Li>
            <SpanGrey>value</SpanGrey> - Alias for <strong>path</strong>. Defines the URL pattern(s) for the mapping. (value is the default attribute,
            I can omit the name eg : <SpanGrey>@RequestMapping("/users")</SpanGrey> shorthand for value )
          </Li>
          <Li>
            <SpanGrey>path</SpanGrey> - Same as <strong>value</strong> (introduced for clarity).
            <ULdisc>
              <Li>path = clearer, recommended for new projects. </Li>
              <Li>value = older, still widely used, and allows shorthand.</Li>
            </ULdisc>
          </Li>
          <Li>
            <SpanGrey>method</SpanGrey> - HTTP methods (GET, POST, etc.).
          </Li>
          <Li>
            <SpanGrey>params</SpanGrey> - Required query parameters.
          </Li>
          <Li>
            <SpanGrey>headers</SpanGrey> - Required headers.
          </Li>
          <Li>
            <SpanGrey>consumes</SpanGrey> - Media types the method consumes.
          </Li>
          <Li>
            <SpanGrey>produces</SpanGrey> - Media types the method produces.
          </Li>
        </ULDecimal>
      </section>
      <hr />
      <section className="my-8">
        <div className="my-4 text-xl font-semibold">✅ My Prefered usage</div>
        <SpanGrey>@RequestMapping</SpanGrey> can be used at
        <ULDecimal>
          <Li>Class Level</Li>
          <Li>Method Level , with specific HTTP method</Li>
        </ULDecimal>
        I prefere to use it on <SpanGrey>Class Level</SpanGrey> and in method level use the. <br />
        Spring provides shortcut annotations that internally use <SpanGrey>@RequestMapping</SpanGrey> with a fixed HTTP method:
        <ULDecimal>
          <Li>@GetMapping</Li>
          <Li>@PostMapping </Li>
          <Li>@PutMapping</Li>
          <Li>@DeleteMapping</Li>
          <Li>@PatchMapping</Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O2_RequestMapping;
