/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, Highlight_JAVA, SpanYellow } from "../../../../../components/Highlight";

const O5_ImplementDBlayer = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>Implement the DB Layer</DivDoubleBorder>
      <section>
        <div>
          The following example uses Spring Boot 2.7.18, Java 17, Spring Data JPA and PostgreSQL, matching the kind of stack you've been learning. It
          uses javax.persistence imports.
        </div>
      </section>
      <section>
        <div className="my-8 text-2xl font-semibold">Coupon entity</div>
        <div>
          For real systems, I recommend managing production schema changes through Flyway or Liquibase instead of relying on automatic schema updates.
        </div>
        <Highlight_JAVA code={_1_} />
      </section>
      <section>
        <div className="my-8 text-2xl font-semibold">Purchase status</div>
        <div>
          We need <SpanYellow>PENDING_PAYMENT</SpanYellow> because a purchase can exist before the payment outcome is known.
        </div>
        <Highlight_JAVA code={_2_} />
      </section>
      <section>
        <div className="my-8 text-2xl font-semibold">Purchase entity</div>
        <div>Notice two important design decisions: </div>
        <ULdisc>
          <Li>
            The purchase stores the price at the time of purchase. Changing the coupon's current price later should not change the amount charged for
            an existing purchase.
          </Li>
          <Li>
            The idempotency key uniquely identifies the purchase request. Retrying the same request must not create a second purchase or charge.
          </Li>
        </ULdisc>
        <div>
          The client should send an idempotency key for each intended purchase, and the backend should associate that key with the authenticated
          customer.
        </div>
        <div>Never trust a customer ID supplied by the client as proof of identity.</div>
        <Highlight_JAVA code={_3_} />
      </section>
      <section>
        <div className="my-8 text-2xl font-semibold">Repositories</div>
        <div>The conditional update is the concurrency-control mechanism.</div>
        <div>
          The unique database constraint on <SpanYellow>idempotency_key</SpanYellow> protects against duplicate purchase creation.
        </div>
        <br />
        <div>The idempotency key must also be checked for ownership and request consistency;</div>
        <div>a client must not be able to reuse another customer's key to access or alter that customer's purchase.</div>
        <Highlight_JAVA code={_4_} />
      </section>
    </MainChildArea>
  );
};

export default O5_ImplementDBlayer;

const _1_ = `import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(
    name = "coupons",
    constraints = @UniqueConstraint(
        name = "uk_coupon_name",
        columnNames = "name"
    )
)
public class Coupon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    protected Coupon() {
    }

    public Coupon(String name, int quantity, BigDecimal price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }
}`;

const _2_ = `public enum PurchaseStatus {
    PENDING_PAYMENT,
    PAID,
    FAILED
}`;

const _3_ = `import javax.persistence.*;
import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(
    name = "purchases",
    uniqueConstraints = {
        @UniqueConstraint(
            name = "uk_purchase_idempotency",
            columnNames = "idempotency_key"
        )
    }
)
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "coupon_id", nullable = false)
    private Long couponId;

    @Column(name = "customer_id", nullable = false)
    private Long customerId;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PurchaseStatus status;

    @Column(name = "idempotency_key", nullable = false)
    private String idempotencyKey;

    @Column(name = "payment_reference")
    private String paymentReference;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    protected Purchase() {
    }

    public Purchase(
            Long couponId,
            Long customerId,
            BigDecimal amount,
            String idempotencyKey) {

        this.couponId = couponId;
        this.customerId = customerId;
        this.amount = amount;
        this.idempotencyKey = idempotencyKey;
        this.status = PurchaseStatus.PENDING_PAYMENT;
        this.createdAt = Instant.now();
    }

    public Long getId() {
        return id;
    }

    public Long getCouponId() {
        return couponId;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public PurchaseStatus getStatus() {
        return status;
    }

    public String getIdempotencyKey() {
        return idempotencyKey;
    }

    public String getPaymentReference() {
        return paymentReference;
    }

    public void markPaid(String paymentReference) {
        this.status = PurchaseStatus.PAID;
        this.paymentReference = paymentReference;
    }

    public void markFailed() {
        this.status = PurchaseStatus.FAILED;
    }
}`;

const _4_ = `import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CouponRepository extends JpaRepository<Coupon, Long> {

    @Modifying
    @Query(value = """
        UPDATE coupons
        SET quantity = quantity - 1
        WHERE id = :couponId
          AND quantity > 0
        """, nativeQuery = true)
    int reserveOne(@Param("couponId") Long couponId);

    @Modifying
    @Query(value = """
        UPDATE coupons
        SET quantity = quantity + 1
        WHERE id = :couponId
        """, nativeQuery = true)
    int releaseOne(@Param("couponId") Long couponId);
}
    


import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {

    Optional<Purchase> findByIdempotencyKey(String key);
}`;
