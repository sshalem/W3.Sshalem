/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, Highlight_PYTHON, Redtext, SpanEmerald, SpanGrey, SpanYellow } from "../../../../../components/Highlight";

const O2_SchemaPydanticDTO = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>This is one of the most important differences between Spring Boot and FastAPI.</Li>
          <Li>In Spring Boot, you usually create DTO classes and use Bean Validation.</Li>
          <Li>
            In FastAPI, we use <SpanEmerald>Pydantic</SpanEmerald> .
          </Li>
        </ULdisc>
        <div>A few concepts worth understanding:</div>
        <ULdisc>
          <Li>
            <SpanGrey>BaseModel</SpanGrey> All Pydantic schemas inherit from this class.
          </Li>
          <Li>
            <SpanGrey>Field()</SpanGrey> Defines validation rules.
          </Li>
          <Li>
            Example : <SpanGrey>age: int | None = Field(default=None, ge=18, le=120)</SpanGrey>
          </Li>
          <Li>
            This means:
            <ULdisc>
              <Li>Age is optional.</Li>
              <Li>If provided, it must be an integer.</Li>
              <Li>Minimum value is 18.</Li>
              <Li> Maximum value is 120.</Li>
              <Li>
                <SpanYellow>EmailStr</SpanYellow> Validates email addresses.
              </Li>
              <Li>
                I'll need one additional dependency:
                <Highlight_ApplicationProperties code={_2_} />
              </Li>
            </ULdisc>
          </Li>
          <Li>
            <SpanEmerald>ConfigDict(from_attributes=True)</SpanEmerald> This is particularly important.
            <ULdisc>
              <Li>
                It allows <Redtext>Pydantic</Redtext> to create a response directly from SQLAlchemy model attributes.
              </Li>
              <Li>You don't need to manually copy every field from your Entity into your DTO.</Li>
              <Li>
                For example:
                <SpanGrey>CustomerResponse.model_validate(customer)</SpanGrey>
              </Li>
            </ULdisc>
          </Li>
        </ULdisc>
        We'll create three schemas:
        <ULdisc>
          <Li>
            <SpanYellow>CustomerCreate</SpanYellow> Incoming POST request.
          </Li>
          <Li>
            <SpanYellow>CustomerCreate</SpanYellow> Incoming PUT request.
          </Li>
          <Li>
            <SpanYellow>CustomerCreate</SpanYellow> Outgoing response.
          </Li>
        </ULdisc>
        Create:<SpanEmerald>app/schemas/customer.py</SpanEmerald>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O2_SchemaPydanticDTO;

const _1_ = `from datetime import datetime
from pydantic import BaseModel, ConfigDict, EmailStr, Field


# Incoming request for creating a customer
class CustomerCreate(BaseModel):
    first_name: str = Field(min_length=2, max_length=100)
    last_name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    age: int | None = Field(default=None, ge=18, le=120)


# Incoming request for updating a customer
class CustomerUpdate(BaseModel):
    first_name: str = Field(min_length=2, max_length=100)
    last_name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    age: int | None = Field(default=None, ge=18, le=120)


# Outgoing response
class CustomerResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: EmailStr
    age: int | None
    created_at: datetime
    updated_at: datetime
    model_config = ConfigDict(from_attributes=True)
`;

const _2_ = `pip install email-validator`;
