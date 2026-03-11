import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O2_DependecyAPIGateway2718 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-8 text-lg font-semibold">⭐ Create Spring boot App ApiGateway</p>
        <ULdisc>
          <Li>Creata new Spring boot app</Li>
          <Li>it is another microservice in the Architecture.</Li>
          <Li>An API Gateway is a single entry point for all clients that want to access your microservices.</Li>
          <Li>It sits between the client (web/mobile app) and your backend services and routes requests to the correct service.</Li>
        </ULdisc>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O2_DependecyAPIGateway2718;

const _1_ = `Client
  ├── Customer Service
  ├── Order Service
  ├── Inventory Service
  └── Item Service`;
