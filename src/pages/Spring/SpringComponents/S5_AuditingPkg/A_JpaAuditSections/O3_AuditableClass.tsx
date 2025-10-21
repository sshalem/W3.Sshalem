import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey } from "../../../../../components/Highlight";

const O3_AuditableClass = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article className="my-8">
        <p className="my-6 text-xl font-semibold">✅ Step 1: Autitable Class with Audit Fields</p>
        <ULdisc>
          <Li>
            create an <SpanGrey>Auditable</SpanGrey> class
          </Li>
          <Li>
            Add the Audit fields <strong>createdBy , createdDate , lastModifiedBy , lastModifiedDate</strong>{" "}
          </Li>
          <Li>
            also add <strong>equals</strong> and <strong>hashCode</strong>
          </Li>
          <Li>
            Annotate the class with :
            <ULdisc>
              <Li>
                <SpanGrey>@MappedSuperclass</SpanGrey>
              </Li>
              <Li>
                <SpanGrey>@EntityListeners(AuditingEntityListener.class)</SpanGrey>
              </Li>
            </ULdisc>
            <Li>
              See the fields validation I added ( <SpanGrey>insertable</SpanGrey>, <SpanGrey>nullable</SpanGrey> , <SpanGrey>updatable</SpanGrey>)
            </Li>
          </Li>
          <Li>
            <p className="my-2">
              See GitHub project{" "}
              <Anchor
                description="O1-Audit-Spring-JPA"
                href="https://github.com/sshalem/Spring-Boot/tree/main/10-Auditing/O1-Audit-Spring-JPA"
              ></Anchor>
            </p>
          </Li>
          <JavaHighlight javaCode={autidatble}></JavaHighlight>
        </ULdisc>
        <hr />
        {/*  */}
        {/*  */}
      </article>
    </MainChildArea>
  );
};

export default O3_AuditableClass;

const autidatble = `import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public class Auditable {

	@CreatedBy
	@Column(nullable = false, updatable = false)
	private String createdBy;

	@CreatedDate
	@Column(nullable = false, updatable = false)
	private LocalDateTime createdDate;

	@LastModifiedBy
	@Column(insertable = false)
	private String lastModifiedBy;

	@LastModifiedDate
	@Column(insertable = false)
	private LocalDateTime lastModifiedDate;

	public Auditable() {
		super();
	}

  // Getters , Setter , hashCode , equals , 
}`;
