/*


*/
import { Answer, Li, MainChildArea, Question, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O3_Concepts = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Customer & Order Models</div>
        <div>Let's recreate both models using the same fields from our previous project, with a bidirectional One-to-Many relationship.</div>
        <ULdisc>
          <Li>Bidirectional relationship using back_populates.</Li>
          <Li>Foreign key from Order to Customer.</Li>
          <Li>Cascade options for parent-child operations.</Li>
          <Li>Lazy loading.</Li>
        </ULdisc>
        <Question>
          Why <SpanEmerald>back_populates</SpanEmerald>?
        </Question>
        <Answer>
          It connects the two sides of the relationship.
          <br />
          This means you can navigate in both directions:
          <Highlight_PYTHON code={_1_} />
        </Answer>
      </section>
    </MainChildArea>
  );
};

export default O3_Concepts;

const _1_ = `  # Customer
orders = relationship("Order", back_populates="customer")

# Order
customer = relationship("Customer", back_populates="orders")
`;
