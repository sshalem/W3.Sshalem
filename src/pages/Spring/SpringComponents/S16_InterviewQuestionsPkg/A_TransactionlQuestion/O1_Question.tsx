/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA, SpanYellow } from "../../../../../components/Highlight";

const O1_Question = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Task 1 — Backend: Transactional correctness</DivDoubleBorder>
      <section>
        <div className="text-lg font-semibold">Scenario</div>
        <ULdisc>
          <Li>You are developing a coupon purchasing system using Spring Boot, Spring Data JPA and PostgreSQL.</Li>
          <Li>A customer purchases a coupon. </Li>
          <Li>Each coupon has a limited quantity, and customers must not be charged for a purchase that fails.</Li>
          <Li>Here is a simplified service:</Li>
          <Highlight_JAVA code={_1_}></Highlight_JAVA>
          <Li>Assume two customers try to buy the last available coupon at almost exactly the same time.</Li>
          <Li>
            Also assume the payment provider may successfully charge a customer even if your application subsequently encounters a database error.
          </Li>
        </ULdisc>
        <div className="mb-4 text-lg font-semibold">Assignment</div>

        <div>Answer these four questions. I will include code and SQL where appropriate.</div>
        <ULDecimal>
          <Li>
            <div>
              <SpanYellow>Identify the bugs</SpanYellow>
            </div>
            What can go wrong in this implementation? Explain at least three distinct failure scenarios, including the concurrent purchase case.
          </Li>
          <Li>
            <div>
              <SpanYellow>Design the solution</SpanYellow>
            </div>
            How would you change the service and database interaction to prevent overselling? Explain the transaction boundaries and any database
            locking or atomic update strategy you would use.
          </Li>

          <Li>
            <div>
              <SpanYellow>Handle payment failures</SpanYellow>
            </div>
            Suppose the payment succeeds but saving the purchase fails. How would you prevent the customer from being charged without receiving the
            coupon? Would you use a database transaction, compensation, an outbox, a saga, or another approach? Explain your choice.
          </Li>

          <Li>
            <div>
              <SpanYellow>Demonstrate correctness</SpanYellow>
            </div>
            Describe the tests you would write to verify that two concurrent buyers cannot purchase the same last coupon and that payment/database
            failures are handled correctly.
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O1_Question;

const _1_ = `@Service
@RequiredArgsConstructor
public class PurchaseService {

    private final CouponRepository couponRepository;
    private final PurchaseRepository purchaseRepository;
    private final PaymentService paymentService;

    public Purchase purchase(Long couponId, Long customerId) {

        Coupon coupon = couponRepository.findById(couponId)
                .orElseThrow(() -> new RuntimeException("Coupon not found"));

        if (coupon.getQuantity() <= 0) {
            throw new RuntimeException("Sold out");
        }

        coupon.setQuantity(coupon.getQuantity() - 1);
        couponRepository.save(coupon);

        paymentService.charge(customerId, coupon.getPrice());

        Purchase purchase = new Purchase(customerId, couponId);

        return purchaseRepository.save(purchase);
    }
}`;
