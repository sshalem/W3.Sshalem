import { Answer, MainChildArea, Question } from "../../../../../components";
import { SpanGreen, SpanRed } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const OO_DtovsEntity = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section>
        <Question>
          <div className="text-lg font-semibold">
            Why with Fetch Lazy, when I retrun Parent Entity from Controller it also retruns it's children ?
          </div>
        </Question>
        <Answer>
          <ULdisc>
            <Li>The problem is that serialization accesses the lazy collection, which triggers DB fetch.</Li>
            <Li>
              The best practice is <SpanRed>not to return entities directly in REST APIs</SpanRed> — <SpanGreen>use DTOs</SpanGreen>.
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
                  <strong>Return DTOs</strong> . and best practice , retrun from the controller not from service layer.
                </Li>
                <Li>
                  If you return Entities from the controller, the children will be serialized by Jackson, unless you suppress them{" "}
                  <strong>(@JsonIgnore / @JsonView).</strong>{" "}
                </Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </Answer>
      </section>
    </MainChildArea>
  );
};

export default OO_DtovsEntity;
