/*
/spring/jpa/jpql#6.QueryDates
Query Dates --> (SPRING)(JPA)(JPQL)
*/
import { Anchor, Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O6_QueryDates = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        here are diffrent examples from different projects where I used to Query dates
        <article className="my-8">
          <p className="text-lg font-semibold">🧩 CouponManageSystem</p>
          <ULdisc>
            <Li>
              form <SpanGrey>CouponManageSystem</SpanGrey>
            </Li>
            <Li>
              I used <SpanGrey>Date</SpanGrey> here (Since at the time it was common to use date)
            </Li>
            <Li>
              Next example below I use <SpanGrey>LocalDateTime</SpanGrey>
            </Li>
            <Li>
              see GitHub reference code -{" "}
              <Anchor
                description="CompanyRepository from CouponManageSystem"
                href="https://github.com/sshalem/FullStack/blob/main/08-Original_coupon-manage-system/src/main/java/com/system/repository/CompanyRepository.java"
              ></Anchor>
            </Li>
            <JavaHighlight javaCode={coupon_manage_system}></JavaHighlight>
          </ULdisc>
        </article>
        {/*  */}
        {/*  */}
        <article className="my-8">
          <p className="text-lg font-semibold">🧩 CMS</p>
          <ULdisc>
            <Li>
              form <SpanGrey>CMS-Coupon-Manage-System</SpanGrey> , which is a modified and upgrade to the previous project (Includes security)
            </Li>
            <Li>
              I use <SpanGrey>LocalDateTime</SpanGrey> and <SpanRed>NOT Date</SpanRed>
            </Li>
            <Li>
              see GitHub reference code -{" "}
              <Anchor
                description="CompanyRepository from CMS-Coupon-Manage-System"
                href="https://github.com/sshalem/FullStack/blob/main/08-CMS-coupon-manage-system/src/main/java/com/cms/repository/CompanyRepository.java"
              ></Anchor>
            </Li>
            <JavaHighlight javaCode={cms}></JavaHighlight>
          </ULdisc>
        </article>
        {/*  */}
      </section>
    </MainChildArea>
  );
};

export default O6_QueryDates;

const coupon_manage_system = `/**
	 * This Query : Joins between Company entity and Coupons entity (using  comp.coupons AS cp ) ,
	 * then search for coupons per Company ID And between dates (startDate, endDate)
	 * @param compId
	 * @param startingDate
	 * @param endingDate
	 * @return List of Coupon
	 */
	// This Query : Joins between Company entity and Coupons entity (using  comp.coupons AS cp ) ,
	// then search for coupons per Company ID And between dates (startDate, endDate)  
	@Query("SELECT cp FROM COMPANY comp JOIN comp.coupons AS cp WHERE comp.id=:id AND cp.startDate>=:startDate AND cp.endDate<=:endDate")
	List<Coupon> findCouponBetweenDates(@Param("id") long compId, @Param("startDate") Date startingDate, @Param("endDate") Date endingDate);`;

const cms = `	@Query("SELECT cp FROM CompanyEntity comp JOIN comp.companyCoupons AS cp WHERE comp.id=:id AND cp.startDate>=:startDate AND cp.endDate<=:endDate")
	List<CouponEntity> findCompanyCouponsBetweenDates(@Param("id") long compId, @Param("startDate") LocalDateTime startingDate, @Param("endDate") LocalDateTime endingDate);`;
