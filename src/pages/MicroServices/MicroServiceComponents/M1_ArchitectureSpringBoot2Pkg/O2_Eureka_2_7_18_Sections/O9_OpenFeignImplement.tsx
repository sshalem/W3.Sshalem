/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow, XmlHighlight } from "../../../../../components/Highlight";

const O9_OpenFeignImplement = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">1. Add the OpenFeign Dependency</article>
        <ULdisc>
          <Li>
            Remove the <SpanYellow>RestTemplate</SpanYellow> bean (If @RestTemplate bean is enabled){" "}
          </Li>
          <Li>
            In Customer Service (the <strong>caller service</strong> ) add Dependency:
            <XmlHighlight xmlCode={_1_} />
          </Li>
          <Li>
            This starter already includes integration with:
            <ULdisc>
              <Li>Spring Cloud LoadBalancer</Li>
              <Li>Eureka</Li>
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">2. Enable Feign Clients</article>
        <ULdisc>
          <Li>
            In <SpanYellow>CustomerServiceApplication</SpanYellow> main class add <SpanYellow>@EnableFeignClients</SpanYellow> annotaion
          </Li>
          <Li>This tells Spring to scan for Feign interfaces.</Li>
          <JavaHighlight javaCode={_2_} />
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">3. Create a Feign Client Interface</article>
        <ULdisc>
          <Li>
            Instead of <SpanYellow>RestTemplate</SpanYellow>, create an <SpanYellow>interface</SpanYellow>.
          </Li>
          <Li>
            create <SpanYellow>client package</SpanYellow>
          </Li>
          <Li>✅ Key idea Feign interface = copy of the REST API contract of the remote service.</Li>
          <Li>
            Even though your Feign client is an interface, Spring automatically generates the implementation at runtime, so you don’t implement it
            yourself.
          </Li>
          <Li>Spring registers Feign as a Spring bean.</Li>
          <Li>
            Important:
            <ULdisc>
              <Li>
                <SpanYellow>name = "ORDER-SERVICE"</SpanYellow> must match <SpanYellow>spring.application.name=ORDER-SERVICE</SpanYellow> as
                registered in Eureka.
              </Li>
            </ULdisc>
          </Li>
          <JavaHighlight javaCode={_3_} />
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold"> 4. Inject the Feign Client</article>
        <ULdisc>
          <Li>
            Even though your Feign client is an interface, Spring automatically generates the implementation at runtime, so you don’t implement it
            yourself.
          </Li>
          <Li>There is no implementation class.</Li>
          <JavaHighlight javaCode={_4_} />
          use it as follows :
          <JavaHighlight javaCode={_5_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O9_OpenFeignImplement;

const _1_ = `<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>`;

const _2_ = `@SpringBootApplication
@EnableFeignClients
public class CustomerServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(CustomerServiceApplication.class, args);
    }
}`;

const _3_ = `import com.customer.sharedDto.OrderEntity;
import com.customer.sharedDto.OrdersResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "ORDER-SERVICE" ,path = "/order")
public interface OrderClient {

    @PostMapping("/add")
    public OrdersResponse addOrderToCustomer(@RequestBody OrderEntity orderEntity);

    @GetMapping("/{customerId}/getAll")
    public OrdersResponse getAllOrdersForCustomer(@PathVariable long customerId);
}`;

const _4_ = `@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper modelMapper;
    private final OrderClient orderClient;

    public CustomerServiceImpl(CustomerRepository customerRepository, ModelMapper modelMapper , OrderClient orderClient ) {
        this.customerRepository = customerRepository;
        this.modelMapper = modelMapper;
        this.orderClient = orderClient;
    }`;

const _5_ = `OrdersResponse ordersResponse = orderClient.addOrderToCustomer(order);

// for GET request
OrdersResponse ordersResponse = orderClient.getAllOrdersForCustomer(customerEntity.getId());`;
