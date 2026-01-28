/*


*/

import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanGrey } from "../../../../../components/Highlight";

const O2_PackageStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Package structure</h2>
        <ULdisc>
          <Li>In FastAPI (Like In spring Boot) , Create a Package , where I store all custom exceptions </Li>
          <Li>
            See below package structure
            <ULDecimal>
              <Li>
                Create <SpanGrey>exceptions</SpanGrey> package
              </Li>
              <Li>
                Create <SpanGrey>student_exceptions.py</SpanGrey> where all custom exceptions for student will be held , the service layer exceptions.
              </Li>
            </ULDecimal>
          </Li>
          <ApplicationPropertiesHighlight propertiesCode={_1_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_PackageStructure;

const _1_ = `app/
├── main.py
├── api/
│   └── student_router.py
├── services/
│   └── student_service.py
├── exceptions/
│   └── student_exceptions.py
├── schemas/
│   └── student.py
`;
