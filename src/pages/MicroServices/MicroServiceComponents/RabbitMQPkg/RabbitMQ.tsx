import { Outlet, useLocation } from "react-router-dom";

const RabbitMQ = () => {
  let location = useLocation();

  return <section>{location.pathname === "/microservices/rabbitmq" ? <div className="text-3xl">RabbitMQ page ...</div> : <Outlet />}</section>;
};

export default RabbitMQ;
