import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_PaginationUtilize = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        {/*  */}
        {/*  */}
        <article>
          <p className="text-lg font-semibold"> ✅ Example with Controller and Repository</p>
          <div className="my-4">
            <ULdisc>
              <Li>
                <SpanGrey>page</SpanGrey> - Zero-based page index , Example : <SpanGrey>0 = first page</SpanGrey>
              </Li>
              <Li>
                <SpanGrey>size</SpanGrey> - Number of elements (records) per page, 10
              </Li>
              <Li>
                <SpanGrey>sort</SpanGrey> - Sort direction and property
              </Li>
            </ULdisc>
            The SQL Query that will run for the Pagination is (OFFSET refers to the page number example :OFFSET 0 is first page, OFFSET 2 is third
            page)
            <ULdisc>
              <Li>
                <SpanGrey>PageRequest.of(page, size)</SpanGrey> - SQL keyword <SpanGrey>LIMIT + OFFSET</SpanGrey> Defines which slice of data to fetch
              </Li>
              <Li>
                <SpanGrey>Sorting (optional)</SpanGrey> - SQL keyword <SpanGrey>ORDER BY</SpanGrey> Defines order of rows
              </Li>
              <Li>
                <SpanGrey>Page{"<T>"} result</SpanGrey> - SQL Uses both <SpanGrey>SELECT + COUNT</SpanGrey> queries , Holds data + metadata
              </Li>
            </ULdisc>
            <JavaHighlight javaCode={sql_query}></JavaHighlight>
            Repository & Controller code
            <JavaHighlight javaCode={example_with_controller}></JavaHighlight>
          </div>
        </article>
      </section>

      {/*  */}
      {/*  */}
      {/*  */}
      <section className="my-8">
        <article>
          <p className="text-lg font-semibold">
            <SpanGrey>Page{"<User>"}</SpanGrey> JSON response
          </p>
          <div className="my-4">
            This returns a JSON like:
            <JavaHighlight javaCode={json_repsonse}></JavaHighlight>
            <ULDecimal>
              <Li>
                <SpanGrey>content</SpanGrey> ➡️ The actual data list returned for the current page. For example, if you’re requesting page 0 with size
                10, this contains up to 10 users.
              </Li>
              <Li>
                <SpanGrey>totalElements</SpanGrey> ➡️ The total number of records that match the query across all pages. (If your database has 42
                users total, this will be 42.)
              </Li>
              <Li>
                <SpanGrey>totalPages</SpanGrey> ➡️ The number of total pages available given your page size. ({" "}
                <SpanGrey>totalPages = ceil(totalElements / size)</SpanGrey> )
              </Li>
              <Li>
                <SpanGrey>size</SpanGrey> ➡️ The maximum number of elements per page (the “page size” you requested).
              </Li>
              <Li>
                <SpanGrey>number</SpanGrey> ➡️ The current page index, starting from 0 (zero-based index).
                <ULdisc>
                  <Li>0 → first page</Li>
                  <Li>1 → second page</Li>
                  <Li>4 → fifth page</Li>
                </ULdisc>
              </Li>
            </ULDecimal>
          </div>
        </article>
      </section>
      {/*  */}
      {/*  */}
      {/*  */}
    </MainChildArea>
  );
};

export default O2_PaginationUtilize;

const sql_query = `SELECT * FROM users ORDER BY id ASC LIMIT 10 OFFSET 0;`;

const example_with_controller = `// *************************
// ***    Repository    ****
// *************************
public interface UserRepository extends JpaRepository<User, Long> {
    Page<User> findAll(Pageable pageable);
}

// *************************
// ***    Controller    ****
// *************************
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public Page<User> getUsers(@RequestParam(defaultValue = "0") int page,
                               @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("id").descending());
        return userRepository.findAll(pageable);
    }
}
`;

const json_repsonse = `{
  "content": [ { "id": 1, "name": "Alice" }, ... ],
  "totalElements": 42,
  "totalPages": 5,
  "size": 10,
  "number": 0
}
`;
