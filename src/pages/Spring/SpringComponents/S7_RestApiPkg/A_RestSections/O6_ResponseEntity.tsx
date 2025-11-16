/*
/spring/rest/rest-api#6.ResponseEntity
ResponseEntity --> (SPRING)(rest)(rest-api)
*/

import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O6_ResponseEntity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-10">
        <article className="my-8 text-2xl font-semibold">⭐ ✅ What is ResponseEntity?</article>
        <SpanGrey>ResponseEntity</SpanGrey> in Spring Boot is a powerful way to fully control the HTTP response—status code, headers, and body.
        <br />
        <br />
        <SpanGrey>ResponseEntity{"<T>"}</SpanGrey> represents the entire HTTP response. It lets you control:
        <ULdisc>
          <Li>HTTP status code (200, 201, 404, 500…)</Li>
          <Li>Response headers</Li>
          <Li>Response body</Li>
        </ULdisc>
        <hr />
        <article className="my-8 text-2xl font-semibold">✅ ResponseEntity Using factory methods</article>
        <p>
          ✔ <strong>Advantages : This is the modern way.</strong>{" "}
        </p>
        <ULdisc>
          <Li>Clear and readable</Li>
          <Li>Automatically sets the status code correctly</Li>
          <Li>No need to specify generics manually</Li>
          <Li>Less boilerplate</Li> Common Factory Methods:
          <ULDecimal>
            <Li>
              <SpanGrey>ok(body)</SpanGrey> - 200 OK
            </Li>
            <Li>
              <SpanGrey>status(code)</SpanGrey> - custom status
            </Li>
            <Li>
              <SpanGrey>notFound()</SpanGrey> - 404
            </Li>
            <Li>
              <SpanGrey>badRequest()</SpanGrey> - 400
            </Li>
            <Li>
              <SpanGrey>noContent()</SpanGrey> - 204
            </Li>
            <Li>
              <SpanGrey>created(URI)</SpanGrey> - 201 + Location header
            </Li>
          </ULDecimal>
        </ULdisc>
        {/*  */}
        {/*  */}
        <hr />
        {/*  */}
        {/*  */}
        <article className="my-8 text-2xl font-semibold">✅ Using the constructor new ResponseEntity{"<>"}(...)</article>
        <p>✔ Advantages</p>
        <ULdisc>
          <Li>More flexible (you can pass body + status + headers)</Li>
          <Li>Works when you want full manual control</Li>
        </ULdisc>
        <p>❌ Disadvantages</p>
        <ULdisc>
          <Li>More verbose</Li>
          <Li>Easier to forget something (like headers)</Li>
        </ULdisc>
        {/*  */}
        {/*  */}
        {/*  */}
        <JavaHighlight javaCode={response_examples}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O6_ResponseEntity;

const response_examples = `// **********************************************
//            1. Return OK with body
// **********************************************
@GetMapping("/user")
public ResponseEntity<String> getUser() {
    return ResponseEntity.ok("User found");
}

@GetMapping("/user")
public ResponseEntity<String> getUser() {
    return new ResponseEntity<>("User found", HttpStatus.OK);
}

// **********************************************
//          2. Return 201 Created
// **********************************************
@PostMapping("/user")
public ResponseEntity<User> createUser(@RequestBody User user) {
    User saved = userService.save(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(saved);
}

@PostMapping("/user")
public ResponseEntity<User> createUser(@RequestBody User user) {
    User saved = userService.save(user);
    return new ResponseEntity<>(saved, HttpStatus.CREATED);  // 201 Created
}

// **********************************************
//        3. Return 404 Not Found
// **********************************************
@GetMapping("/user/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
}

@GetMapping("/user/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return userService.findById(id)
            .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
}


// **********************************************
//            4. Add headers
// **********************************************
@GetMapping("/download")
public ResponseEntity<byte[]> downloadFile() {
    return ResponseEntity.ok()
            .header("Content-Type", "application/pdf")
            .header("Content-Disposition", "attachment; filename=file.pdf")
            .body(pdfBytes);
}

@GetMapping("/download")
public ResponseEntity<byte[]> downloadFile() {
    HttpHeaders headers = new HttpHeaders();
    headers.add("Content-Type", "application/pdf");
    headers.add("Content-Disposition", "attachment; filename=file.pdf");
    return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
}

// **********************************************
//        5. Return empty response
// **********************************************
@DeleteMapping("/user/{id}")
public ResponseEntity<Void> delete(@PathVariable Long id) {
    userService.delete(id);
    return ResponseEntity.noContent().build(); // 204
}

@DeleteMapping("/user/{id}")
public ResponseEntity<Void> delete(@PathVariable Long id) {
    userService.delete(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT) // 204
}
`;
