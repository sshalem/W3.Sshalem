import { FaDiamond } from "react-icons/fa6";
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { SpanBlue, SpanGrey } from "../../../../../components/Highlight";
import TableCompareDBInit from "../../../../../components/Tables/TableCompareDBInit";

const O1_DBInitIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div className="my-2">In this section , Let's see how we can :</div>
      <ul className="ml-8 list-disc">
        <li className="my-1 ml-5">
          our own schema , w/o giving spring to create it for us by using a <SpanBlue>schema.sql</SpanBlue> file
        </li>
        <li className="my-1 ml-5">
          how to initialize the tables with data , using <SpanBlue>data.sql</SpanBlue> file
        </li>
        <li className="my-1 ml-5">
          how to create multiple <SpanBlue>schema-${`platform`}.sql</SpanBlue> during development
        </li>
        <li className="my-1 ml-5">
          how to create multiple <SpanBlue>data-${`platform`}.sql</SpanBlue> during development
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
      <section className="my-8">
        ⭐⭐⭐ <br /> <br /> what is the difference between <SpanGrey>CommandLineRunner</SpanGrey> to <SpanGrey>@PostConstruct</SpanGrey> and{" "}
        <SpanGrey>data.sql</SpanGrey> ?
        <br />
        <br />
        ⭐⭐⭐ <br /> <br /> <SpanGrey>CommandLineRunner</SpanGrey> , <SpanGrey>@PostConstruct</SpanGrey>, and <SpanGrey>data.sql</SpanGrey> are three
        different mechanisms in Spring Boot used for <br /> <strong>initializing data or running logic at application startup</strong>, <br /> but
        they serve different purposes, have different scopes, and are executed at different phases of the app lifecycle.
        <TableCompareDBInit></TableCompareDBInit>
        <p className="text-lg font-semibold">⏱️ Order of Execution</p>
        <div className="my-8">
          <p>If you use all three, this is roughly the order:</p>
          <ULDecimal>
            <Li>schema.sql (if present)</Li>
            <Li>data.sql</Li>
            <Li>Beans initialized → @PostConstruct methods run</Li>
            <Li>Spring context ready → CommandLineRunner.run() executed</Li>
          </ULDecimal>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O1_DBInitIntro;
