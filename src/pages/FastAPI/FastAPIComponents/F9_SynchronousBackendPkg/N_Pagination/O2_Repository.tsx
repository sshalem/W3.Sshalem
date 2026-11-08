/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON } from "../../../../../components/Highlight";

const O2_Repository = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository</div>
        <ULdisc>
          <Li>
            Add these two methods to your existing CustomerRepository:
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

        def find_all_paginated(self, offset: int, limit: int) -> list[Customer]:
        statement = (select(Customer).order_by(Customer.id).offset(offset).limit(limit))
        return list(self.db.scalars(statement).all())

    def count_all(self) -> int:
        statement = select(func.count()).select_from(Customer)
        return self.db.scalar(statement)`;
