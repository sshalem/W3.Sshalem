import { Outlet, useLocation } from "react-router-dom";
import { Answer, Li, Question, Subject, ULdisc } from "../../../../components";

const Architecture = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/microservices/architecture" ? (
        <Subject title="Architecture ...">
          {
            <section className="my-8">
              <p className="my-8 text-xl font-semibold">🧠 The Real Shift: Monolith → Distributed System</p>
              <article className="my-8">
                <p>In monolith you worry about:</p>
                <ULdisc>
                  <Li>Layering (Controller → Service → Repo)</Li>
                  <Li>Transactions</Li>
                  <Li>Modularity</Li>
                  <Li>Performance</Li>
                </ULdisc>
              </article>
              <article className="my-8">
                <p>In microservices you worry about:</p>
                <ULdisc>
                  <Li>Network latency</Li>
                  <Li>Partial failures</Li>
                  <Li>Data consistency</Li>
                  <Li>Service boundaries</Li>
                  <Li>Observability</Li>
                  <Li>Deployment independence</Li>
                </ULdisc>
              </article>
              <article className="my-8">
                <p>🎯 Interview-Level Talking Points</p>
                <Question>“How would you design a scalable microservices system?”</Question>
                <Answer>
                  Need to say ,as senior-level:
                  <ULdisc>
                    <Li>Domain-driven boundaries (What is it)</Li>
                    <Li>Event-driven backbone (What is it?)</Li>
                    <Li>Stateless services(What is it?) </Li>
                    <Li>Kubernetes-native(What is it?)</Li>
                    <Li>Observability-first (waht is it?)</Li>
                    <Li>Eventual consistency via Saga (Waht is it?)</Li>
                    <Li>No shared database</Li>
                  </ULdisc>
                </Answer>
              </article>
              <article className="my-8">
                <p>Now let’s go deeper , check the following in ChatGPT:</p>
                <ULdisc>
                  <Li>🔥 Deep dive into Saga implementation (with real example)</Li>
                  <Li>🔥 Failure scenario design (what breaks first?)</Li>
                  <Li>🔥 Scaling & performance tuning in K8s</Li>
                  <Li>🔥 Kafka design best practices</Li>
                  <Li>🔥 Real enterprise folder structure</Li>
                  <Li>🔥 Interview-level tricky questions</Li>
                </ULdisc>
              </article>
            </section>
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

export default Architecture;
