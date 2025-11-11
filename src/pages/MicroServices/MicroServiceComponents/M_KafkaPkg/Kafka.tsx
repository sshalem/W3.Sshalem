/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Anchor } from "../../../../components";

const Kafka = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/microservices/kafka" ? (
        <section className="my-8 text-2xl">
          <div>
            From course on udemy{" "}
            <Anchor
              description="apache kafka - Ramesh Fadatare "
              href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/learn/lecture/35997454#overview"
            ></Anchor>{" "}
          </div>
          <div>
            part of course{" "}
            <Anchor
              description="Building Microservices with Spring Boot & Spring Cloud"
              href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/?couponCode=25BBPMXINACTIVE"
            ></Anchor>
          </div>
        </section>
      ) : (
        <Outlet />
      )}
    </section>
  );
};

export default Kafka;
