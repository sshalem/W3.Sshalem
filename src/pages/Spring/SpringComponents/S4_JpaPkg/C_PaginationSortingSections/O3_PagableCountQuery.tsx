/*


*/
import { Anchor, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_JAVA, SpanGreen, SpanGrey } from "../../../../../components/Highlight";

const O3_PagableCountQuery = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <p className="my-4 text-lg font-semibold"> 🧩 What Is countQuery?</p>
          When you use pagination (Pageable) with Spring Data JPA, Spring actually runs two SQL queries behind the scenes:
          <div className="my-4">
            <ULDecimal>
              <Li>
                Main query → fetches the actual page of data (with <SpanGrey>LIMIT</SpanGrey> and <SpanGrey>OFFSET</SpanGrey> )
              </Li>
              <Li>
                Count query → calculates the total number of records matching your query (used for totalElements and totalPages in{" "}
                <SpanGrey>{"Page<T>"} </SpanGrey> )
              </Li>
              <Highlight_JAVA code={generated_sql}></Highlight_JAVA>
            </ULDecimal>
          </div>
        </article>
      </section>
      <hr />
      {/*  */}
      {/*  */}
      {/*  */}
      <section className="my-8">
        <article>
          <p className="my-4 text-lg font-semibold"> 🧠 Normally — No Need to Define It</p>
          If you use derived queries (like <SpanGrey>findByStatus(...)</SpanGrey>) or <SpanGrey>findAll(Pageable pageable)</SpanGrey>, Spring
          automatically generates both the main query and the count query.
          <div className="my-4">
            ✅ Example:
            <Highlight_JAVA code={example_code}></Highlight_JAVA>
            Spring auto-generates:
            <Highlight_JAVA code={generate_sql}></Highlight_JAVA>
          </div>
        </article>
      </section>
      <hr />

      {/*  */}
      {/*  */}
      {/*  */}
      <section className="my-8">
        <article>
          <p className="my-4 text-lg font-semibold"> ⚙️ When You Need countQuery</p>
          When you use a <SpanGrey>custom JPQL</SpanGrey> or <SpanGrey>native query with @Query</SpanGrey>, Spring cannot always automatically figure
          out how to count the total records correctly.
          <br />
          That’s where you manually define a <SpanGreen>countQuery</SpanGreen>.
          <div className="my-4">
            <ULDecimal>
              <Li>
                <SpanGrey>value</SpanGrey> query runs with LIMIT and OFFSET
              </Li>
              <Li>
                <SpanGrey>countQuery</SpanGrey> runs without pagination — just to count total matching rows.
              </Li>
            </ULDecimal>
            <p className="my-4 text-lg font-semibold">🧱 Example with Native Query</p>
            <p>
              I used the <SpanGrey>countQuery</SpanGrey> a lot in the project of{" "}
              <Anchor
                description="Jobify Full Stack (see GitHub code)"
                href="https://github.com/sshalem/FullStack/blob/main/06_FullStack_jobify_V2/jobify-backend-v2-Multipart-File-upload/src/main/java/com/jobify/v2/repository/JobRepository.java"
              ></Anchor>
              <Highlight_JAVA code={native_count_query}></Highlight_JAVA>
            </p>
          </div>
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O3_PagableCountQuery;

const generated_sql = `-- Paginated query -- 
SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 20;

-- Count query (for total records) --
SELECT COUNT(*) FROM users;`;

const example_code = `Page<User> findByActive(boolean active, Pageable pageable);`;

const generate_sql = `SELECT * FROM user WHERE active = true LIMIT ? OFFSET ?;
SELECT COUNT(*) FROM user WHERE active = true;`;

const native_count_query = `@Query(value = "SELECT * FROM student s WHERE s.age > :age ORDER BY s.name ASC",
       countQuery = "SELECT COUNT(*) FROM student s WHERE s.age > :age",
       nativeQuery = true)
Page<Student> findStudentsOlderThan(@Param("age") int age, Pageable pageable);`;
