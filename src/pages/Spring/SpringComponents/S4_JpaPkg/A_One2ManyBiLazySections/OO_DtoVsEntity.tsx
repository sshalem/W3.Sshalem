import { Answer, Li, MainChildArea, Question, ULdisc } from "../../../../../components";
import { SpanBlue, SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const OO_DtoVsEntity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <Question>
          <div className="text-lg font-semibold">
            Why with Fetch Lazy, when I return <SpanBlue>Parent Entity</SpanBlue> (Not DTO) from Controller, it also retruns it's children ?
          </div>
        </Question>
        <Answer>
          <ULdisc>
            <Li>
              The problem is that serialization accesses the lazy collection (calls the <strong>getter methods</strong> of{" "}
              <strong>getRoles() </strong> ) , which triggers DB fetch.
            </Li>
            <Li>
              The best practice is <SpanGreen>use DTOs</SpanGreen>. Don't return <SpanRed> entities directly in REST APIs</SpanRed>.
            </Li>
            <Li>
              Lazy loading in <strong>JPA/Hibernate</strong> means:
              <ULdisc>
                <Li>
                  The collection (roles) is a <strong>proxy</strong>.
                </Li>
                <Li>It will not be loaded from the DB until you access it.</Li>
              </ULdisc>
            </Li>
            <Li>
              When Spring Boot sends a <strong>UserEntity</strong> as a REST response, <strong>Jackson</strong> calls the{" "}
              <strong>getter methods</strong>
              (getRoles()), (<strong>even if LAZY</strong>) which triggers Hibernate to fetch the collection, because Jackson wants to{" "}
              <strong>serialize it into JSON</strong>.
            </Li>
            <Li>So even though the mapping is lazy, serialization forces initialization.</Li>
            <Li>
              ✅ <SpanGreen>to conclude</SpanGreen>,
              <ULdisc>
                <Li>
                  <strong>Return DTOs</strong> . And best practice , retrun from the <SpanGreen>controller</SpanGreen> not from{" "}
                  <SpanRed>service layer</SpanRed>.
                </Li>
                <Li>
                  If you return Entities from the controller, the children will be serialized by Jackson, unless you suppress them{" "}
                  <strong>(@JsonIgnore / @JsonView).</strong>{" "}
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </Answer>
        <Question>
          <div className="text-lg font-semibold">
            With Fetch Lazy , we Add annotations of <SpanGrey>@JsonManagedReference / @JsonBackReference</SpanGrey> ? What they do?
          </div>
        </Question>
        <Answer>
          These annotations tell Jackson:
          <ULdisc>
            <Li>
              <SpanGrey>Serialize</SpanGrey> this relationship, but <SpanGrey>prevent infinite recursion</SpanGrey> in bidirectional associations.
            </Li>
            <Li>
              When Jackson serializes <SpanGrey>UserEntity</SpanGrey>, it sees roles and says: ➡️
              <strong>"I need to serialize this collection too."</strong>
            </Li>
            <Li>
              But since roles is LAZY and the Hibernate session is already closed (transaction ended before serialization), it tries to initialize the
              proxy → <SpanGrey>💥 LazyInitializationException</SpanGrey> .
            </Li>
          </ULdisc>
        </Answer>
        <Question>
          <div className="text-lg font-semibold">
            🔹 Why <SpanGrey>@JsonIgnore</SpanGrey> solved it
          </div>
        </Question>
        <Answer>
          Jackson simply skips the roles field during <SpanGrey>serialization</SpanGrey>.
          <ULdisc>
            <Li>➡️ That means it never tries to touch the lazy proxy.</Li>
            <Li>➡️ No lazy load attempt → no error.</Li>
          </ULdisc>
        </Answer>
        So, the difference is:
        <ULdisc>
          <Li>
            <strong>@JsonManagedReference / @JsonBackReference</strong> → Jackson does serialize the relationship → triggers lazy loading, to prevent
            this, we retrun DTO in contrller layer
          </Li>
          <Li>
            <strong>@JsonIgnore</strong> → Jackson skips the relationship → No Serialization → no lazy loading, no error.
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default OO_DtoVsEntity;
