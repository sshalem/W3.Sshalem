/*
/spring/jpa/many2many-bi-lazy#1.IntroMany2Many
Intro Many2Many --> (SPRING)(JPA)(ManyToMany (Bi Lazy))
*/
import { Anchor, Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O1_IntroM2M = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <p>
          Basic concepts are covered in <strong>@OneToMany</strong> intro section (<strong>In-memory, persistent context, Cascade type</strong> )
        </p>
        <p>
          for more comprehansive see <Anchor description="Tansaction Management setions 1-5" href="/spring/jpa/transaction-management"></Anchor>
        </p>
      </div>
      <article>
        Important Notes
        <ULDecimal>
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
        </ULDecimal>
      </article>
      <hr />
      <article className="mt-8">
        In <SpanGrey>@ManyToMany</SpanGrey>
        <ULdisc>
          <Li>
            There is no <SpanGrey>parent–child</SpanGrey> hierarchy (This hierarchy refers only to <SpanGrey>@OneToMany</SpanGrey> ).
          </Li>
          <Li>Both entities are considered equals. For example:</Li>{" "}
          <ULdisc>
            <Li>Student ↔ Course</Li>
          </ULdisc>
          <Li>
            We define an <SpanGrey>owning side</SpanGrey> and an <SpanGrey>inverse side</SpanGrey>
            <ULDecimal>
              <Li>
                Owning side → define :
                <ULdisc>
                  <Li>
                    <SpanGrey>@JoinTable</SpanGrey>
                  </Li>
                  <Li>Helper methods</Li>
                  <Li>
                    <SpanGrey>cascade type</SpanGrey> and <SpanGrey>fetch (Lazy) </SpanGrey> .
                  </Li>
                  <Li>Hibernate checks this side when persisting.</Li>
                </ULdisc>
              </Li>
              <Li>
                Inverse side → uses:
                <ULdisc>
                  <Li>
                    <SpanGrey>mappedBy</SpanGrey>
                  </Li>
                  <Li>
                    define <SpanGrey>fetch (Lazy) </SpanGrey> (both sides need to be defined with Fetch type) .
                  </Li>
                  <Li>
                    <SpanRed>NO</SpanRed> helper methods, <SpanRed>NO</SpanRed> Cascade.
                  </Li>
                  <Li>Hibernate ignores updates here.</Li>
                </ULdisc>
              </Li>
            </ULDecimal>
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
