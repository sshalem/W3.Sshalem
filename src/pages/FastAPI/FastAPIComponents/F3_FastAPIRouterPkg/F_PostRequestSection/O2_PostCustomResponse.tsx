/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_PostCustomResponse = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>POST with JSON body (Pydantic model), and retrun a Response</Li>
          <Li>
            I retrun using <SpanYellow>response_model</SpanYellow> which behind the scene :
            <ULdisc>
              <Li> uses JSONResponse (serialization) </Li>
              <Li>jsonable_encoder (prepareing a JSON structured Object)</Li>
              <Li>Validation</Li>
              <Li>Field Filtering</Li>
              <Li>Swagger Schema</Li>
            </ULdisc>
          </Li>
          <Li>
            Using response_model with a <SpanYellow>Pydantic Object</SpanYellow>
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            Using JSONResponse with <SpanYellow>Pydantic Object</SpanYellow> (Even though I use a Pydantic model, I still loose validation , since I
            don't use the <SpanYellow>response_model</SpanYellow> )
            <PythonHighlight pythonCode={_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_PostCustomResponse;

const _1_ = `@router.post("/customUserResponse" , status_code=status.HTTP_201_CREATED , response_model=UserCreate)
def create_custom_user(user: UserCreate):
    return user
`;

const _2_ = `@router.post("/customUserResponse")
def create_custom_user(user: UserCreate):
    return JSONResponse(status_code=status.HTTP_201_CREATED , content=jsonable_encoder(user))`;
