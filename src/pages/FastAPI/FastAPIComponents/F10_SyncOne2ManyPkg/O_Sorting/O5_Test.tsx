/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O5_Test = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Postman</div>
        <ULdisc>
          <Li>Via Postman send following url , check the response</Li>
          <Li>
            Add the pagination & Sorting parameters to your existing GET endpoint:
            <Highlight_PYTHON code={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_Test;

const _1_ = `GET /api/customers/paginated/sorted?page=1&size=5&sort_by=first_name&direction=asc
GET /api/customers/paginated/sorted?page=1&size=5&sort_by=age&direction=desc
GET /api/customers/paginated/sorted?page=2&size=10&sort_by=email&direction=asc`;
