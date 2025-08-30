import { Anchor, MainChildArea } from "../../../../../components";

const O1_IntroAuditing = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      JPA Auditing Intro{" "}
      <Anchor
        description="JPA Auditing - Java Techie "
        href="https://www.youtube.com/watch?v=Pc7Une_5rMs&list=PLVz2XdJiJQxxdOhu-xmEUYDzY_Pz8cRGa&ab_channel=JavaTechie"
      ></Anchor>
      <div className="my-8">
        I used it in my{" "}
        <Anchor
          description="e-commerce"
          href="https://github.com/sshalem/FullStack/tree/main/09-E-commerce/e-commerce-backend/src/main/java/com/ecommerce/audit"
        ></Anchor>{" "}
        project , where I have multiple users (ADMIN, COMPANY, CUSTOMER) , thus I config it accordingly (Use this for multiple mtype of users).
      </div>
    </MainChildArea>
  );
};

export default O1_IntroAuditing;
