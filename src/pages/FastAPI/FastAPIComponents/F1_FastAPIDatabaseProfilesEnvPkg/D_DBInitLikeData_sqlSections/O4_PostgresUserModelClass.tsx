/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_PostgresUserModelClass = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            Inside <SpanYellow>models</SpanYellow> directory , create <SpanYellow>user_models.py</SpanYellow> file
          </Li>
          <Li>
            Create a <SpanYellow>User</SpanYellow> model class
          </Li>
          <Li>
            Copy/Paste the code
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </Li>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O4_PostgresUserModelClass;

const _1_ = `from sqlalchemy import String, Integer, Column
from core.db import Base


class User(Base):
    __tablename__ = "users"  # make sure this matches your seed SQL
    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False)`;
