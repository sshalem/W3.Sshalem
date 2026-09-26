/*


*/
import { Outlet, useLocation } from "react-router-dom";
import { Subject } from "../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../components/Highlight";

const DataStructures = () => {
  let location = useLocation();
  return (
    <section>
      {location.pathname === "/java/concurrency" ? (
        <Subject title="Concurrency & Multi Threading ...">
          {
            <section className="my-8">
              <article className="my-8">
                LEVEL 1 — CORE JAVA CONCURRENCY
                <ApplicationPropertiesHighlight propertiesCode={_1_} />
              </article>
              <article className="my-8">
                LEVEL 2 — PROFESSIONAL JAVA CONCURRENCY
                <ApplicationPropertiesHighlight propertiesCode={_2_} />
              </article>
              <article className="my-8">
                LEVEL 3 — ADVANCED CONCURRENCY
                <ApplicationPropertiesHighlight propertiesCode={_3_} />
              </article>
              <article className="my-8">
                LEVEL 4 — MODERN JAVA + SPRING
                <p>This is where I would connect everything to the type of backend development you're learning.</p>
                <ApplicationPropertiesHighlight propertiesCode={_4_} />
              </article>
              <article className="my-8">
                LEVEL 5 — CONCURRENCY ENGINEERING
                <p>This is where I would connect everything to the type of backend development you're learning.</p>
                <ApplicationPropertiesHighlight propertiesCode={_5_} />
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
export default DataStructures;

const _1_ = `   01. Concurrency Fundamentals
   02. Processes & Threads
   03. Creating Threads
   04. Thread Lifecycle
   05. Runnable & Callable
   06. Race Conditions
   07. Critical Sections
   08. synchronized
   09. volatile & Visibility
   10. Atomicity & Atomic Classes
   11. Java Memory Model`;

const _2_ = `   12. Executor Framework
   13. Thread Pools
   14. ExecutorService Lifecycle
   15. Future
   16. CompletableFuture
   17. Concurrent Collections
   18. BlockingQueue
   19. Producer–Consumer
   20. Lock / ReentrantLock
   21. ReadWriteLock
   22. Synchronization Utilities`;

const _3_ = `   23. Deadlocks
   24. Livelocks
   25. Starvation
   26. Thread Safety
   27. Immutability
   28. ThreadLocal
   29. Fork/Join
   30. Parallel Streams
   31. Advanced Atomic Operations
   32. Concurrency Patterns
   33. CPU vs I/O Bound
   34. Database Concurrency`;

const _4_ = `   35. Spring @Async
   36. Spring Thread Pools
   37. REST API Concurrency
   38. Microservices Concurrency
   39. Virtual Threads
   40. Structured Concurrency
   41. Scoped Values`;

const _5_ = `    42. Testing Concurrent Code
    43. Debugging Concurrent Applications
    44. Performance & Tuning`;
