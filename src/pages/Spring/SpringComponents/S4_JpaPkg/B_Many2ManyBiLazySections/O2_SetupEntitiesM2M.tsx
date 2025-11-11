/*
/spring/jpa/many2many-bi-lazy#2.SetupEntities
Setup Entities --> (SPRING)(JPA)(ManyToMany (Bi Lazy))
*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, SpanSky } from "../../../../../components/Highlight";

const O2_SetupEntitiesM2M = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <div>
          <Anchor
            description="GitHub - @ManyToMany Fetch Lazy"
            href="https://github.com/sshalem/Spring-Boot/tree/main/02-JPA/O4-Many2Many-Bi-Lazy"
          ></Anchor>
        </div>
      </section>
      <section>
        <div>
          Here I will show the best practice for setting up a Bi-Directional <SpanSky>@ManyToMany</SpanSky> mapping Fetch Lazy. The entire code in the
          GitRepo , includes :
          <ULdisc>
            <Li>Full Entity defenition (Including hashcode, equals , G/T/ToStr)</Li>
            <Li>JpaRepositorioes for both entities , with multiple queries examples</Li>
            <Li>Service layer , icluding logic for all possibles options (add, update , delete , delete all , etc...)</Li>
            <Li>Contrller layer</Li>
          </ULdisc>
        </div>
        <DivDoubleBorder>StudentEntity - Owning side</DivDoubleBorder>

        <JavaHighlight javaCode={owning_side}></JavaHighlight>
        {/*  */}
        <DivDoubleBorder>CourseEntity - Inverse side</DivDoubleBorder>
        <JavaHighlight javaCode={invers_side}></JavaHighlight>
      </section>
      {/*  */}
    </MainChildArea>
  );
};

export default O2_SetupEntitiesM2M;

const owning_side = `@Entity
@Table(name = "STUDENT_TB")
public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private long id;
    private String firstName;
    private String lastName;
    private int identityNumber;
    private String email;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "student_course",
            joinColumns = {@JoinColumn(name = "student_id")},
            inverseJoinColumns = {@JoinColumn(name = "course_id")})
    @JsonManagedReference
    private Set<CourseEntity> courses = new HashSet<>();

    public StudentEntity() {
        super();
    }

    public StudentEntity(String firstName, String lastName, int identityNumber, String email) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.identityNumber = identityNumber;
        this.email = email;
    }


    /**
     * Helper Methods for Adding/Removing Course
     */
    public void addCourse(CourseEntity courseEntity) {
        this.courses.add(courseEntity);
        courseEntity.getStudents().add(this);
    }

    public void removeCourse(CourseEntity courseEntity) {
        this.courses.remove(courseEntity);
        courseEntity.getStudents().remove(this);
    }

    // G/T/toString/equals/hashcode
}
`;

const invers_side = `@Entity
@Table(name = "COURSE_TB")
public class CourseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private long id;
    private String courseNumber;
    private String courseName;
    private int learningYear;
    private LocalDate startDate;
    private LocalDate endDate;

    @ManyToMany(mappedBy = "courses", fetch = FetchType.LAZY)
    @JsonBackReference
    private Set<StudentEntity> students;

    public CourseEntity() {
        super();
    }

    public CourseEntity(String courseNumber, String courseName, int learningYear) {
        super();
        this.courseNumber = courseNumber;
        this.courseName = courseName;
        this.learningYear = learningYear;
    }

  // G/T/toString/equals/hashcode
}
`;
