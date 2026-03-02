/*
/spring/jpa/equals-hashcode
equals() and  hashcode() 
*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O1_IntroHashEquals = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4">
          🎯 To create <SpanYellow>equals()</SpanYellow> and <SpanYellow>hashCode()</SpanYellow> , we must distinguish between:
          <ULDecimal>
            <Li>
              plain JAVA POJO
              <JavaHighlight javaCode={_1_} />
            </Li>
            <Li>
              for JPA Entity
              <JavaHighlight javaCode={_2_} />
            </Li>
          </ULDecimal>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O1_IntroHashEquals;

const _1_ = `public class Customer {    
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}`;

const _2_ = `@Entity
@Table(name = "customer_tb")
public class CustomerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}`;
