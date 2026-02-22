/*


*/
import { Answer, Li, MainChildArea, Question, ULdisc } from "../../../../../components";

const OX_IO_SeniorQuestions = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <Question>Q: How would you design file upload service handling 5GB files with 500 concurrent users?</Question>
        <Answer>
          Expected Answer
          <ULdisc>
            <Li>Stream-based processing</Li>
            <Li>No loading into memory</Li>
            <Li>NIO transfer</Li>
            <Li>Chunked upload</Li>
            <Li>Backpressure</Li>
            <Li>Temp storage</Li>
            <Li>Async processing</Li>
            <Li>Possibly S3 direct upload</Li>
          </ULdisc>
        </Answer>
      </section>
    </MainChildArea>
  );
};
export default OX_IO_SeniorQuestions;
