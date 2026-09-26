/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";

const O1_SingletonIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>The Singleton design pattern ensures that a class has only one instance and provides a global access point to that instance.</div>
        <article className="my-4">🔹 Why Use Singleton?</article>
        <ULdisc>
          <Li>To control access to shared resources (e.g., configuration, logging, caching)</Li>
          <Li>To avoid multiple object creation</Li>
          <Li>To save memory</Li>
          <Li>To provide a global access point</Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};
export default O1_SingletonIntro;
