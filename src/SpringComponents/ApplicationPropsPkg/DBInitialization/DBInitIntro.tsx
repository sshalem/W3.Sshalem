import { FaDiamond } from "react-icons/fa6";
import { MainChildArea } from "../../../components";

const DBInitIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-5">
        from spring docs
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a href="https://docs.spring.io/spring-boot/how-to/data-initialization.html" target="_blank" className="tracking-wider text-blue-500">
            https://docs.spring.io/spring-boot/how-to/data-initialization.html
          </a>
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a
            href="https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-hibernate"
            target="_blank"
            className="tracking-wider text-blue-500"
          >
            https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-hibernate
          </a>
        </div>
        <div className="my-1 ml-8 flex">
          <FaDiamond className="mr-2 self-center text-[0.6rem]" /> &nbsp;
          <a
            href="https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-basic-sql-scripts"
            target="_blank"
            className="tracking-wider text-blue-500"
          >
            https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-basic-sql-scripts
          </a>
        </div>
      </div>
    </MainChildArea>
  );
};

export default DBInitIntro;
