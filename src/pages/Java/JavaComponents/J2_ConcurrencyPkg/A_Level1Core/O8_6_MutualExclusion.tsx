/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O8_6_MutualExclusion = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          Mutual exclusion means:
          <ULdisc>
            <Li>Only one thread at a time is allowed to execute a particular critical section.</Li>
            <Li>Threads competing for this lock cannot simultaneously execute the protected critical section.</Li>
          </ULdisc>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O8_6_MutualExclusion;
