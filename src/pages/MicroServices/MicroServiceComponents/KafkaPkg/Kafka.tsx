import { Outlet, useLocation } from "react-router-dom";

const Kafka = () => {
  let location = useLocation();

  return <section>{location.pathname === "/microservices/kafka" ? <div className="text-3xl">Kafka page ...</div> : <Outlet />}</section>;
};

export default Kafka;
