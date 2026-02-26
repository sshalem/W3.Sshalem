/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Anchor, Subject } from "../../../../components";

const RabbitMQ = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/microservices/rabbitmq" ? (
        <Subject title="Rabbit MQ ...">
          {
            <div>
              <section className="my-8">
                <div className="text-2xl">
                  From course on udemy{" "}
                  <Anchor
                    description="RabbitMQ - Ramesh Fadatare "
                    href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/learn/lecture/35929576#overview"
                  ></Anchor>{" "}
                </div>
                <div className="text-2xl">
                  part of course{" "}
                  <Anchor
                    description="Building Microservices with Spring Boot & Spring Cloud"
                    href="https://www.udemy.com/course/building-microservices-with-spring-boot-and-spring-cloud/?couponCode=25BBPMXINACTIVE"
                  ></Anchor>
                </div>
              </section>
            </div>
          }
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default RabbitMQ;
