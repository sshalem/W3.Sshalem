/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanYellow } from "../../../../../components/Highlight";

const O1_MultiThreadingIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg">🧵 What Are Threads in Java?</p>
          <ULdisc>
            <Li>
              In Java, a thread is a lightweight unit of execution that allows a program to perform multiple tasks concurrently (multithreading).
            </Li>
            <Li>Threads help improve performance and responsiveness, especially in applications like servers, games, and GUI programs.</Li>
            <Li>A thread is a separate path of execution within a program. </Li>
            <Li>
              Every Java program has at least one thread — the <SpanYellow>main</SpanYellow> thread.
            </Li>
            <Li>
              Think of it like this
              <ULdisc>
                <Li>
                  A <SpanYellow>process</SpanYellow> = a running <strong>program</strong>
                </Li>
                <Li>
                  A <SpanYellow>thread</SpanYellow> = a <strong>task</strong> running inside that <strong>program</strong>
                </Li>
              </ULdisc>
            </Li>
            <Li>A single Java program can run multiple threads simultaneously — this is called multithreading.</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O1_MultiThreadingIntro;
