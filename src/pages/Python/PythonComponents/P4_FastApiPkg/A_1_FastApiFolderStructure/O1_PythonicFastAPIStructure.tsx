/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O1_PythonicFastAPIStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Small / Typical Pythonic FastAPI Structure (Most Common)</article>
        Why this is Pythonic?
        <ULdisc>
          <Li>Minimal files</Li>
          <Li>Easy to navigate</Li>
          <Li>Low ceremony</Li>
        </ULdisc>
        Equivalent to one Spring package.
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O1_PythonicFastAPIStructure;

const _1_ = `app/
├── main.py  # Entry poit (Like main() method with annotaion of @SpringBootApplication)
├── routers/
│   └── users.py
├── models.py  # SQLAlchemy
├── schemas.py # Pydantic
└── db.py
`;
