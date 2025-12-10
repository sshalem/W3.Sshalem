/*
/spring/application-properties/command-line-initialization#1.CommlineRunnerIntro
CommlineRunner Intro --> (SPRING)(ApplicationProperties)(CommlineRunner Intro)
*/
import { MainChildArea } from "../../../../../components";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import TableCompareDBInit from "../../../../../components/Tables/Table_4ColCompareDBInit";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";

const O1_CommLineRunnerIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
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

export default O1_CommLineRunnerIntro;
