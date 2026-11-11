/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, Redtext, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O3_OrderSchemaPydanticDTO = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div>A few concepts worth understanding:</div>
        <ULdisc>
          <Li>
            <SpanEmerald>ConfigDict(from_attributes=True)</SpanEmerald> This is particularly important.
            <ULdisc>
              <Li>
                It allows <Redtext>Pydantic</Redtext> to create a response directly from SQLAlchemy model attributes.
              </Li>
              <Li>You don't need to manually copy every field from your Entity into your DTO.</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        We'll create two schemas:
        <ULdisc>
          <Li>
            <SpanYellow>OrderCreate</SpanYellow> Incoming POST request.
          </Li>
          <Li>
            <SpanYellow>OrderResponse</SpanYellow> Incoming PUT request.
          </Li>
        </ULdisc>
        Create:<SpanEmerald>app/schemas/order.py</SpanEmerald>
        <Highlight_PYTHON code={_1_}></Highlight_PYTHON>
      </section>
    </MainChildArea>
  );
};

export default O3_OrderSchemaPydanticDTO;

const _1_ = `from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel, Field, ConfigDict


class OrderCreate(BaseModel):
    customer_id: int
    total_amount: Decimal = Field(gt=0, max_digits=10, decimal_places=2)


class OrderResponse(BaseModel):
    id: int
    customer_id: int
    order_data: datetime
    total_amount: Decimal
    created_at: datetime
    updated_at: datetime
    model_config = ConfigDict(from_attributes=True)
`;
