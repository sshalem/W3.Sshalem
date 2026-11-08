/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald } from "../../../../../components/Highlight";

const O2_Repository = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — implement dynamic sorting</div>
        <ULdisc>
          <Li>
            Replace the existing <SpanEmerald>find_all_paginated()</SpanEmerald> method with:
            <Highlight_PYTHON code={_1_} />
          </Li>
          <Li>
            Why do we need two queries?
            <ULdisc>
              <Li>First query retrieves the requested page.</Li>
              <Li>Second query determines how many customers exist in total.</Li>
            </ULdisc>
            This allows us to calculate the total number of pages.
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_Repository;

const _1_ = `from sqlalchemy import select, func
from sqlalchemy.orm import Session

from app.models.customer import Customer


class CustomerRepository:

    def __init__(self, db: Session):
        self.db = db

    # Existing methods ...

    def find_all_paginated(self, offset: int, limit: int, sort_by: str, direction: str) -> list[Customer]:

        # The sorting dictionary, Allowed sorting columns
        sort_columns = {
            "id": Customer.id,
            "first_name": Customer.first_name,
            "last_name": Customer.last_name,
            "email": Customer.email,
            "age": Customer.age
        }

        sort_column = sort_columns.get(sort_by)

        if sort_column is None:
            raise ValueError(f"Invalid sorting column: {sort_by}")
        if direction == "asc":
            order_expression = sort_column.asc()
        elif direction == "desc":
            order_expression = sort_column.desc()
        else:
            raise ValueError(f"Invalid sorting direction: {direction}")

        statement = (select(Customer).order_by(order_expression, Customer.id.asc()).offset(offset).limit(limit))
        return list(self.db.scalars(statement).all())

    def count_all(self) -> int:
        statement = select(func.count()).select_from(Customer)
        return self.db.scalar(statement)`;
