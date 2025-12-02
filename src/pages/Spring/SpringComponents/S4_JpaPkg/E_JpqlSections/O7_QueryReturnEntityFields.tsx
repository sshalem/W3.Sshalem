/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O7_QueryReturnPojoFields = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        let's look in the following scenario:
        <ULDecimal>
          <Li>If I have an Entity class with multiple fields</Li>
          <Li>
            I want to query my DB, and return only <SpanGrey>specific fields</SpanGrey> of that Entity.
          </Li>
          <Li>Recommended Approach: JPQL with DTO Constructor Projection</Li>
          <Li>It's possible to use native SQL (See ChatGPT for instructions), but only for complex queries</Li>
          <JavaHighlight javaCode={job_entity}></JavaHighlight>
        </ULDecimal>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <p className="text-lg font-semibold"> ✅ Recommended Approach: JPQL with DTO Constructor Projection</p>
          <ULdisc>
            <Li>Since I'm working with a JPA Entity and want to return only a few fields</Li>
            <Li>Best clean way, create DTO (projection) with matching constructor to the fields we want.</Li>
            <Li>
              The constructor expression syntax ( <SpanGrey>new com.example.dto.ClassName(...)</SpanGrey> ) works only in JPQL — not in native SQL.
            </Li>
            <Li>Create a 🗂️ Repository Query (JPQL Constructor Expression).</Li>
          </ULdisc>
        </article>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <p className="text-lg font-semibold">✅ Step 1: Create a DTO</p>
          <ULdisc>
            <Li>Use appropriate types that match your entity fields exactly.</Li>
            <JavaHighlight javaCode={dto}></JavaHighlight>
          </ULdisc>
        </article>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <p className="text-lg font-semibold">✅ Step 2: Add a JPQL Query to Your Repository</p>
          <ULdisc>
            <Li>🗂️ Repository Query (JPQL Constructor Expression)</Li>
            <JavaHighlight javaCode={jpql}></JavaHighlight>
          </ULdisc>
        </article>
        {/*  */}
      </section>
    </MainChildArea>
  );
};

export default O7_QueryReturnPojoFields;

const job_entity = `@Entity
@Table(name = "JOBS_TB")
public class JobEntity {
	@Id
	@GeneratedValue(generator = "UUID")	
	private UUID id;
	private String company;
	private String position;
	private Status status;
	private JobType jobType;
	private String jobLocation;
	private LocalDateTime createdAt;
	private LocalDateTime updatedOn;
  // 
  //`;

const dto = `public class JobSummaryDTO {

    private String company;
    private String position;
    private String jobLocation;

    public JobSummaryDTO(String company, String position, String jobLocation) {
        this.company = company;
        this.position = position;
        this.jobLocation = jobLocation;
    }

    // Getters (setters if needed)
}`;

const jpql = `public interface JobRepository extends JpaRepository<Job, UUID> {

    @Query("SELECT new com.example.dto.JobSummaryDTO(j.company, j.position, j.jobLocation) FROM Job j")
    List<JobSummaryDTO> findAllJobSummaries();

}`;
