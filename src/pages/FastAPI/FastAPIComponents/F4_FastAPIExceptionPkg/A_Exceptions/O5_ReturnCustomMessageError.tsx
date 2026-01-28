/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, PythonHighlight } from "../../../../../components/Highlight";

const O5_ReturnCustomMessageError = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <h2 className="my-8 text-xl font-semibold">Custom Error message (Spring like)</h2>
        <ULdisc>
          <Li>Lets see how we can return a custom error message (Spring like)</Li>
          <Li>
            Option 1 : Wrap detail with a dict
            <PythonHighlight pythonCode={_1_} />
            Postman shows :
            <ApplicationPropertiesHighlight propertiesCode={_1_1_} />
          </Li>
          <Li>
            Option 2 : Return JSONResponse , this way I dont wrap it with dewtail field
            <PythonHighlight pythonCode={_2_} />
            Postman shows :
            <ApplicationPropertiesHighlight propertiesCode={_2_2_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O5_ReturnCustomMessageError;

const _1_ = `@router.get("/checkError")
def check_error():
    try:
        student_email = student_email_check("shalem")
        return student_email
    except UserNotFoundError as e:
        raise HTTPException(
            status_code=400,
            detail={
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "status": 500,
                "error": "Internal server error",
                "exception": "UserNotFoundError",
                "message": e.message,
                "path": "/checkError",
            }
        )
`;

const _1_1_ = `{
    "detail": {
        "timestamp": "2026-01-28T20:39:40.625879+00:00",
        "status": 500,
        "error": "Internal server error",
        "exception": "UserNotFoundError",
        "message": "User with email 'shalem' already exists",
        "path": "/checkError"
    }
}`;

const _2_ = `@router.get("/checkError")
def check_error():
    try:
        student_email = student_email_check("shalem")
        return student_email
    except UserNotFoundError as e:       
        return JSONResponse(
            status_code=400,
            content={
                "timestamp": datetime.now(timezone.utc).isoformat(),
                "status": 500,
                "error": "Internal server error",
                "exception": "UserNotFoundError",
                "message": e.message,
                "path": "/checkError",
            }
        )
`;

const _2_2_ = `{
    "timestamp": "2026-01-28T20:42:23.097244+00:00",
    "status": 500,
    "error": "Internal server error",
    "exception": "UserNotFoundError",
    "message": "User with email 'shalem' already exists",
    "path": "/checkError"
}`;
