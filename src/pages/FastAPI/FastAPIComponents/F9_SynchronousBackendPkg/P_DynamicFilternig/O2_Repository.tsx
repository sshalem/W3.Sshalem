/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_PYTHON, SpanEmerald, SpanGrey } from "../../../../../components/Highlight";

const O2_Repository = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Repository — build dynamic conditions</div>
        <ULdisc>
          <Li>The important idea is that we build a list of SQLAlchemy conditions and apply only the conditions whose parameters were supplied.</Li>
          <Li>
            Important concepts:
            <ULdisc>
              <Li>
                <SpanEmerald>_build_conditions()</SpanEmerald> is a private helper method. It centralizes the filtering logic so the data query and
                count query use exactly the same conditions.
              </Li>
              <Li>
                <SpanEmerald>conditions.append(...)</SpanEmerald> - adds a condition only when its corresponding parameter was provided.
              </Li>
              <Li>
                <SpanEmerald>.where(*conditions)</SpanEmerald> - applies all conditions using <SpanGrey>AND</SpanGrey> .
              </Li>
              <Li>If the list is empty, no filtering is applied.</Li>
              <Li>
                <SpanEmerald>if first_name is not None</SpanEmerald> - distinguishes an omitted parameter from an explicitly supplied empty string.
              </Li>
              <Li>
                <SpanEmerald>count_all_dynamic()</SpanEmerald> now counts only records matching the filters, not the entire table.
              </Li>
            </ULdisc>
          </Li>
          <Li>
            create the following methods:
            <Highlight_PYTHON code={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O2_Repository;

const _1_ = `    def find_all_dynamic_paginated_sort(
            self,
            offset: int,
            limit: int,
            sort_by: str,
            direction: str,
            first_name: str | None = None,
            last_name: str | None = None,
            email: str | None = None,
            min_age: int | None = None,
            max_age: int | None = None
    ) -> list[Customer]:

        conditions = self._build_conditions(first_name, last_name, email, min_age, max_age)

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

        statement = (select(Customer).where(*conditions).order_by(order_expression, Customer.id.asc()).offset(offset).limit(limit))
        return list(self.db.scalars(statement).all())

    def count_all_dynamic(self,
                          first_name: str | None = None,
                          last_name: str | None = None,
                          email: str | None = None,
                          min_age: int | None = None,
                          max_age: int | None = None
                          ) -> int:

        conditions = self._build_conditions(first_name, last_name, email, min_age, max_age)
        statement = (select(func.count()).select_from(Customer).where(*conditions))
        return self.db.scalar(statement) or 0

    def _build_conditions(self,
                          first_name: str | None = None,
                          last_name: str | None = None,
                          email: str | None = None,
                          min_age: int | None = None,
                          max_age: int | None = None
                          ) -> list:

        conditions = []

        if first_name is not None:
            conditions.append(Customer.first_name == first_name)
        if last_name is not None:
            conditions.append(Customer.last_name == last_name)
        if email is not None:
            conditions.append(Customer.email == email)
        if min_age is not None:
            conditions.append(Customer.age >= min_age)
        if max_age is not None:
            conditions.append(Customer.age <= max_age)
        return conditions`;
