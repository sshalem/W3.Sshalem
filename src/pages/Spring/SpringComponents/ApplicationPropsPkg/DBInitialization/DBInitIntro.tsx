import { FaDiamond } from "react-icons/fa6";
import { MainChildArea } from "../../../../../components";
import { Span } from "../../../../../components/Highlight";

const DBInitIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-2">In this section , Let's see how we can :</div>
      <ul className="ml-8 list-disc">
        <li className="my-1 ml-5">
          our own schema , w/o giving spring to create it for us by using a <Span>schema.sql</Span> file
        </li>
        <li className="my-1 ml-5">
          how to initialize the tables with data , using <Span>data.sql</Span> file
        </li>
        <li className="my-1 ml-5">
          how to create multiple <Span>schema-${`platform`}.sql</Span> during development
        </li>
        <li className="my-1 ml-5">
          how to create multiple <Span>data-${`platform`}.sql</Span> during development
        </li>
      </ul>
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
