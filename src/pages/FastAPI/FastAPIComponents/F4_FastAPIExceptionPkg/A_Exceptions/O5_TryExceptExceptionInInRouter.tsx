/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O5_TryExceptExceptionInInRouter = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Raise Exception in Service (Domain)</h2>
        <ULdisc>
          <Li>In router call the function form srvice layer, Surraound with try/except block </Li>
          <Li>
            Raise <SpanYellow>HTTPException</SpanYellow> in router{" "}
          </Li>
          <PythonHighlight pythonCode={_2_} />
          <Li>Response in Postman</Li>
          <ApplicationPropertiesHighlight propertiesCode={_3_} />
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_TryExceptExceptionInInRouter;

const _2_ = `@router.get("/checkError")
def check_error():
    try:
        student_email = student_email_check("shalem")
        return student_email
    except UserNotFoundError as e:
        raise HTTPException(status_code=409, detail=e.message)
`;

const _3_ = `{
    "detail": "User with email 'shalem' already exists"
}`;
