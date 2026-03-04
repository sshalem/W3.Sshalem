/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../components";
import Table_3ColComapreJDKversion from "../../../../components/Tables/Table_3ColComapreJDKversion";

const SpringJDKCompatibility = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <ULdisc>
          <Li>With JDK 11 you can use Spring Boot up to the 2.7.x line (e.g., 2.7.18).</Li>
          <Li>Spring Boot 3.x and higher require Java 17+, so they won’t run on JDK 11. [endoflife.date], [docs.spring.io]</Li>
          <Li>
            Why?
            <ULdisc>
              <Li>The Spring team’s current system requirements specify Java 17+ for Boot 3.x/4.x. (docs.spring.io)</Li>
              <Li>Community-maintained compatibility matrices show Boot 2.7 supports Java 8–21, while Boot 3.x requires Java 17+. (endoflife)</Li>
              <Li>
                In general, the key requirement for running Spring Boot 2.7.18 is Java 8 or higher (up to and including Java 21), which all recent IDE
                versions support.{" "}
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        ✅ Practical guidance
        <ULdisc>
          <Li>If you must stay on JDK 11, pick Spring Boot 2.7.18 (the last 2.7 patch).</Li>
          <Li>If you can upgrade your JDK, moving to Java 17+ opens the door to Spring Boot 3.x and beyond.</Li>
        </ULdisc>
        ✅ new projects are often advised to start on newer versions (17 or 21)
      </section>
      <Table_3ColComapreJDKversion />
    </MainChildArea>
  );
};
export default SpringJDKCompatibility;
