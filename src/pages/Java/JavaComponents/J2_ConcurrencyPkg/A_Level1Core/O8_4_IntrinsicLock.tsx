/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, JavaHighlight, Redtext } from "../../../../../components/Highlight";
import Table_2ColSynchronizedIntrinsicLock from "../../../../../components/Tables/Table_2ColSynchronizedIntrinsicLock";

const O8_4_IntrinsicLock = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          <ULdisc>
            <Li>
              An <Redtext>intrinsic lock</Redtext> (also called a <Redtext>monitor lock</Redtext>) is the built-in lock that every Java object has.
            </Li>
            <Li>
              Java uses it when you write <Redtext>synchronized</Redtext>.
            </Li>
            <ApplicationPropertiesHighlight propertiesCode={_4_} />
            <Table_2ColSynchronizedIntrinsicLock />
          </ULdisc>
          <JavaHighlight javaCode={_1_} />
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_4_IntrinsicLock;

// const _0_ = `synchronized method
// synchronized block
// intrinsic lock
// monitor
// mutual exclusion
// object lock
// static synchronization
// class lock`;

const _1_ = `// 1. Synchronized instance method
// The lock is the object itself: 
synchronized (this) {
    // lock this
    // Critical section
}


// 2. Synchronized static method
// The lock is the Class object:
synchronized (Counter.class) {
    // ...
}



// 2. Synchronized static method
// The lock is the Class object:
synchronized (Counter.class) {
    // locks obj
}
`;

const _4_ = `                 synchronized
                      │
          ┌───────────┴───────────┐
          │                       │
   synchronized(obj)       synchronized method
          │                       │
          ▼                       ▼
      locks obj               locks this
          │                       │
          └───────────┬───────────┘
                      ▼
             object's intrinsic
                / object lock
                      │
                      ▼
                   monitor
`;
