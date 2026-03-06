/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { DivDoubleBorder, JavaHighlight } from "../../../../../components/Highlight";
import SpanYellow from "./../../../../../components/Highlight/SpanYellow";

const O4_RestTemplateCommunication = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          In prev sections , I just created 2 simple services :
          <ULdisc>
            <Li>CustomerService</Li>
            <Li>OrderService</Li>
          </ULdisc>
        </article>
        Now , I want to see how I can communicate between these services , example A Client wants to make an order:
        <ULdisc>
          <Li>
            Client Sends Post Request to <strong>CustomerService</strong>{" "}
          </Li>
          <Li>
            <strong>CustomerService</strong> send Post request (using <SpanYellow>RestTemplate</SpanYellow>) to <strong>OrderService</strong>
          </Li>
        </ULdisc>
      </section>
      <hr />
      <section className="my-8">
        <DivDoubleBorder>RestTemplate</DivDoubleBorder>
        <ULdisc>
          <Li>
            <SpanYellow>RestTemplate</SpanYellow> is included in <SpanYellow>Spring Boot Starter Web</SpanYellow>
          </Li>
          <Li>I will show how to create and use it</Li>
        </ULdisc>
        <DivDoubleBorder>Step 1: create RestTemplate bean</DivDoubleBorder>
        <ULdisc>
          <Li>
            Create a configuration class in <SpanYellow>CustomerService</SpanYellow> and expose a <SpanYellow>RestTemplate bean</SpanYellow>
            <JavaHighlight javaCode={_1_}></JavaHighlight>
          </Li>
        </ULdisc>
        <DivDoubleBorder>Step 2: use RestTemplate bean in service layer</DivDoubleBorder>

        <ULdisc>
          <Li>
            Let's use <SpanYellow>RestTemplate</SpanYellow> In order to send POST/GET/PUT/DELETE requests to order service{" "}
          </Li>
          <Li>
            Autowire <SpanYellow>RestTemplate</SpanYellow> to CustomerServiceImpl class , Or my preferation , config it in{" "}
            <strong>constructor</strong>
            <JavaHighlight javaCode={_2_}></JavaHighlight>
          </Li>
          <Li>
            Create 2 methods , which I use <SpanYellow>RestTemplate</SpanYellow>
            <ULdisc>
              <Li>
                <strong>addOrderToCustomer</strong>
              </Li>
              <Li>
                <strong>getOrdersOfCustomerByFirstName</strong>
              </Li>
              <Li>
                Let's explain <strong>addOrderToCustomer</strong> code below
                <ULdisc>
                  <Li>
                    <SpanYellow>http://localhost:9001/order/add</SpanYellow> - this is <strong>API endpoint URL</strong> of{" "}
                    <SpanYellow>OrderService</SpanYellow>
                  </Li>
                  <Li>Use the API url and sent POST request using RestTemplate</Li>
                </ULdisc>
              </Li>
              <JavaHighlight javaCode={_4_}></JavaHighlight>
              <Li>here is the method Implemantation</Li>
            </ULdisc>
            <JavaHighlight javaCode={_3_}></JavaHighlight>
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_RestTemplateCommunication;

const _1_ = `package com.customer.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import SpanYellow from './../../../../../components/Highlight/SpanYellow';

@Configuration
public class ConfigClass {

    @Bean
    public ModelMapper getModelMapper() {
        return new ModelMapper();
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}`;

const _2_ = `@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;
    private final ModelMapper modelMapper;
    private final RestTemplate restTemplate;

    public CustomerServiceImpl(CustomerRepository customerRepository, ModelMapper modelMapper, RestTemplate restTemplate) {
        this.customerRepository = customerRepository;
        this.modelMapper = modelMapper;
        this.restTemplate = restTemplate;
    }
}`;

const _3_ = `    @Override
    public CustomerResponseDto addOrderToCustomer(OrderEntity order, String firstName) {
        CustomerEntity customerEntity = customerRepository.findByFirstName(firstName);
        order.setCustomerId(customerEntity.getId());
        String postUrl = "http://localhost:9001/order/add";
        OrdersResponse ordersResponse = restTemplate.postForObject(postUrl, order, OrdersResponse.class);
        CustomerResponseDto customerResponseModel = modelMapper.map(customerEntity, CustomerResponseDto.class);
        List<OrderEntity> orders = null;
        if (ordersResponse != null) {
            orders = ordersResponse.getOrders();
        }
        customerResponseModel.setOrders(orders);
        return customerResponseModel;
    }`;

const _4_ = `OrdersResponse ordersResponse = restTemplate.getForObject(getUrl, OrdersResponse.class);`;
