/*


*/
import { Answer, IMG, Li, MainChildArea, Question, ULDecimal, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight, Redtext, SpanYellow } from "../../../../../components/Highlight";
import transQuestion_3 from "../../../../../assets/transQuestion_3.jpg";

const O3_makeInventoryUpdatesAtomic = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <DivDoubleBorder>The first fix: make inventory updates atomic</DivDoubleBorder>
      <section>
        <div>Before handling payments, let's solve the most fundamental problem: two customers buying the last coupon.</div>
      </section>

      <section>
        <div className="my-8 text-lg font-semibold">Option A — Conditional SQL update</div>
        Instead of reading the quantity into Java and checking it, let PostgreSQL check and decrement it in a single statement.
        <JavaHighlight javaCode={_1_} />
        The repository method can return the number of rows updated:
        <JavaHighlight javaCode={_2_} />
        The result has a precise meaning:
        <ULDecimal>
          <Li>one coupon was successfully reserved.</Li>
          <Li>the coupon doesn't exist or no quantity remains.</Li>
        </ULDecimal>
        <div>PostgreSQL coordinates concurrent updates to the same row.</div>
        <div>
          If only one coupon remains, one transaction can decrement it to zero; the other transaction won't satisfy{" "}
          <Redtext>quantity {">"} 0</Redtext> after the row becomes available for its update.
        </div>
        <div className="my-4">
          <Redtext>Important</Redtext>: this assumes the quantity cannot already be negative. Add a database constraint as an additional safeguard:
          <JavaHighlight javaCode={_3_} />
        </div>
        <div>A constraint protects the database against invalid values even if another application path contains a bug.</div>
      </section>

      <section>
        <div className="my-8 text-lg font-semibold">Option B — Pessimistic locking</div>
        Another valid solution is to lock the coupon row while checking and updating it.
        <JavaHighlight javaCode={_4_} />
        For Spring Boot 2.7, use <SpanYellow>javax.persistence.LockModeType</SpanYellow> instead of
        <SpanYellow>jakarta.persistence.LockModeType</SpanYellow>.
        <div className="my-4">You then perform the read, check, and decrement within the same database transaction.</div>
        <IMG img_name={transQuestion_3}></IMG>
      </section>
    </MainChildArea>
  );
};

export default O3_makeInventoryUpdatesAtomic;

const _1_ = `UPDATE coupons SET quantity = quantity - 1 WHERE id = :couponId AND quantity > 0;`;

const _2_ = `import org.springframework.data.jpa.repository.JpaRepository;
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
}`;

const _3_ = `ALTER TABLE coupons
ADD CONSTRAINT chk_coupon_quantity_nonnegative
CHECK (quantity >= 0);`;

const _4_ = `import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.Lock;

public interface CouponRepository extends JpaRepository<Coupon, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT c FROM Coupon c WHERE c.id = :id")
    Optional<Coupon> findByIdForUpdate(@Param("id") Long id);
}`;
