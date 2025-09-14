import { Link } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanRed, SpanSky } from "../../../../../components/Highlight";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";

const O1_IntroM2M = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <p>
          Basic concepts are covered in <strong>@OneToMany</strong> intro section (<strong>In-memory, persistent context, Cascade type</strong> )
        </p>
        <p>
          for more comprehansive see{" "}
          <Link to={"/spring/jpa/transaction-management"} className="tracking-wider text-blue-500">
            Tansaction Management setions 1-5
          </Link>
        </p>
      </div>
      <article>
        Important Notes
        <ULdisc>
          <Li>Always use helper methods (addRole, removeRole) → avoids inconsistent states between both sides.</Li>
          <Li>
            Don’t use <strong>orphanRemoval</strong> with <strong>@ManyToMany</strong> (doesn’t make sense, because the role can belong to multiple
            users).
          </Li>
          <Li>
            You can enable <strong>{"cascade = {(CascadeType.PERSIST, CascadeType.MERGE)}"}</strong> if you want roles to be auto-created when adding
            to users.
          </Li>
          <Li>
            Prefer <SpanGreen>Set</SpanGreen> over <SpanRed>List</SpanRed> to avoid duplicates in join tables.
          </Li>
        </ULdisc>
      </article>
      <hr />
      <article className="mt-4">
        In <strong>@ManyToMany</strong>
        <ULdisc>
          <Li>
            There is no <SpanRed>parent–child</SpanRed> hierarchy.
          </Li>
          <Li>Both entities are considered equals. For example:</Li>{" "}
          <ULdisc>
            <Li>Student ↔ Course</Li>
          </ULdisc>
          <Li>
            Neither side is the parent. (Only in <strong>@OneToMany</strong> we refer this way <strong>Parent ↔ Child</strong>)
          </Li>
          <Li>
            We define an <strong>owning side</strong> and an <strong>inverse side</strong>:
            <ULdisc>
              <Li>
                <strong>Owning side</strong> → define <strong>@JoinTable</strong>, <strong>Helper methods</strong>
                <strong>cascade type</strong> and <strong>fetch (Lazy) </strong> . Hibernate checks this side when persisting.
              </Li>
              <Li>
                <strong>Inverse side</strong> → uses <strong>mappedBy</strong>, define <strong>fetch (Lazy) </strong> (both sides need to be defined
                with Fetch type) . <br /> <strong>NO</strong> helper methods, <strong>NO</strong> Cascade. Hibernate ignores updates here.
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </article>

      <hr />
      <article className="mt-4">
        The most complicated operations we are doing , are the operations of:
        <ULdisc>
          <Li>
            <strong>Adding</strong>
            <ULdisc>
              <Li>addCourseToStudent - implemented</Li>
              <Li>addStudentToCourse - is same as adding Course To Student, thus No need to implement this</Li>
            </ULdisc>
          </Li>
          <Li>
            <strong>Removing/Deleting from StudentDaoImpl</strong>
            <ULdisc>
              <Li>deleteStudentByIdentityNumber(int identityNumber)</Li>
              <Li>removeAllStudentsFromCourse(String courseNumber)</Li>
              <Li>deleteAllStudents()</Li>
            </ULdisc>
          </Li>
          <Li>
            <strong>Removing/Deleting from CourseDaoImpl</strong>
            <ULdisc>
              <Li>deleteCourseByCourseNumber(String courseNumber)</Li>
              <Li>removeCourseFromStudentByCourseNumber(int identityNumber, String courseNumber)</Li>
              <Li>removeAllCoursesFromStudent(int identityNumber)</Li>
              <Li>deleteAllCourses()</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </article>
    </MainChildArea>
  );
};

export default O1_IntroM2M;
